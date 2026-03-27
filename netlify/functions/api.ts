import express from 'express';
import serverless from 'serverless-http';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(cors());
app.use(express.json());

// In a serverless environment, the file system is read-only except for /tmp.
// However, since this is just a mock/example, we'll try to read from the project root.
// In a real Netlify deployment, you'd want to use a database (like Supabase, Firebase, or MongoDB)
// instead of a local JSON file for persistent storage.
const CONTENT_FILE = path.resolve(process.cwd(), 'content.json');
const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key-change-in-production';
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || bcrypt.hashSync('admin123', 10);

app.post('/api/login', async (req, res) => {
  const { password } = req.body;
  if (bcrypt.compareSync(password, ADMIN_PASSWORD_HASH)) {
    const token = jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '24h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Incorrect Password – Access Denied.' });
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
    // Note: Writing to the file system will not persist across function invocations on Netlify.
    // It will only write to the ephemeral container.
    await fs.writeFile(CONTENT_FILE, JSON.stringify(req.body, null, 2));
    res.json({ success: true });
  } catch (e) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

export const handler = serverless(app);
