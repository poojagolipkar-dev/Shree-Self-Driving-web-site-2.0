import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const CONTENT_FILE = path.join(__dirname, 'content.json');
const ADMIN_CONFIG_FILE = path.join(__dirname, 'admin-config.json');
const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key-change-in-production';

async function getAdminPasswordHash() {
  try {
    const config = await fs.readFile(ADMIN_CONFIG_FILE, 'utf-8');
    return JSON.parse(config).passwordHash;
  } catch (e) {
    return process.env.ADMIN_PASSWORD_HASH || bcrypt.hashSync('admin123', 10);
  }
}

app.post('/api/login', async (req, res) => {
  const { password } = req.body;
  const hash = await getAdminPasswordHash();
  if (bcrypt.compareSync(password, hash)) {
    const token = jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '24h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Incorrect Password – Access Denied.' });
  }
});

app.post('/api/admin/change-password', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  try {
    jwt.verify(token, JWT_SECRET);
    const { newPassword } = req.body;
    if (!newPassword || newPassword.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters long' });
    }
    const passwordHash = bcrypt.hashSync(newPassword, 10);
    await fs.writeFile(ADMIN_CONFIG_FILE, JSON.stringify({ passwordHash }, null, 2));
    res.json({ success: true });
  } catch (e) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

app.get('/api/content', async (req, res) => {
  try {
    const data = await fs.readFile(CONTENT_FILE, 'utf-8');
    res.json(JSON.parse(data));
  } catch (e) {
    res.status(404).json({ error: 'Content not found' });
  }
});

app.post('/api/content', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  try {
    jwt.verify(token, JWT_SECRET);
    await fs.writeFile(CONTENT_FILE, JSON.stringify(req.body, null, 2));
    res.json({ success: true });
  } catch (e) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
