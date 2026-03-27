import React, { createContext, useContext, useState, useEffect } from 'react';
import { set, cloneDeep } from 'lodash-es';

interface AdminContextType {
  isEditMode: boolean;
  token: string | null;
  content: any;
  login: (password: string) => Promise<void>;
  logout: () => void;
  toggleEditMode: () => void;
  updateContent: (path: string, value: any) => void;
  saveChanges: () => Promise<void>;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [token, setToken] = useState<string | null>(localStorage.getItem('adminToken'));
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => setContent(data))
      .catch(err => console.error('Failed to load content', err));
  }, []);

  const login = async (password: string) => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password })
    });
    const data = await res.json();
    if (res.ok) {
      setToken(data.token);
      localStorage.setItem('adminToken', data.token);
      setIsEditMode(true);
    } else {
      throw new Error(data.error || 'Login failed');
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('adminToken');
    setIsEditMode(false);
  };

  const toggleEditMode = () => {
    if (token) setIsEditMode(!isEditMode);
  };

  const updateContent = (path: string, value: any) => {
    setContent((prev: any) => {
      const newData = cloneDeep(prev);
      set(newData, path, value);
      return newData;
    });
  };

  const [toast, setToast] = useState<{message: string, type: 'success'|'error'} | null>(null);

  const showToast = (message: string, type: 'success'|'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const saveChanges = async () => {
    if (!token) return;
    try {
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(content)
      });
      if (!res.ok) throw new Error('Failed to save');
      showToast('Changes saved successfully!', 'success');
    } catch (err) {
      console.error(err);
      showToast('Error saving changes', 'error');
    }
  };

  return (
    <AdminContext.Provider value={{ isEditMode, token, content, login, logout, toggleEditMode, updateContent, saveChanges }}>
      {children}
      {toast && (
        <div className={`fixed bottom-20 right-6 px-4 py-2 rounded shadow-lg z-50 text-white ${toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
          {toast.message}
        </div>
      )}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
