import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { Settings, Save, LogOut, Edit3, X } from 'lucide-react';

export default function AdminUI() {
  const { isEditMode, token, login, logout, toggleEditMode, saveChanges } = useAdmin();
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await login(password);
      setShowLogin(false);
      setPassword('');
    } catch (err: any) {
      setError(err.message || 'Incorrect Password – Access Denied.');
    }
  };

  return (
    <>
      {/* Floating Admin Button */}
      {!token && !showLogin && (
        <button
          onClick={() => setShowLogin(true)}
          className="fixed bottom-6 right-6 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gold-500 hover:text-black transition-all z-50"
          title="Admin Edit"
        >
          <Settings size={20} />
        </button>
      )}

      {/* Login Modal */}
      {showLogin && !token && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100]">
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-2xl w-full max-w-md relative">
            <button 
              onClick={() => setShowLogin(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <X size={20} />
            </button>
            
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Admin Login</h2>
            
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-gold-500 outline-none"
                  placeholder="Enter admin password"
                  autoFocus
                />
              </div>
              
              {error && (
                <div className="mb-4 text-red-500 text-sm font-medium">
                  {error}
                </div>
              )}
              
              <button
                type="submit"
                className="w-full py-3 bg-gold-500 hover:bg-gold-400 text-black font-bold rounded-lg transition-colors"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Admin Toolbar */}
      {token && (
        <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white px-6 py-3 flex items-center justify-between z-[100] shadow-md">
          <div className="flex items-center gap-4">
            <span className="font-bold text-gold-500">Admin Mode</span>
            <button
              onClick={toggleEditMode}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                isEditMode ? 'bg-green-500/20 text-green-400' : 'bg-gray-700 text-gray-300'
              }`}
            >
              <Edit3 size={16} />
              {isEditMode ? 'Edit Mode: ON' : 'Edit Mode: OFF'}
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={saveChanges}
              className="flex items-center gap-2 px-4 py-1.5 bg-gold-500 hover:bg-gold-400 text-black rounded-full text-sm font-bold transition-colors"
            >
              <Save size={16} />
              Save Changes
            </button>
            <button
              onClick={logout}
              className="flex items-center gap-2 px-4 py-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-full text-sm font-medium transition-colors"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
}
