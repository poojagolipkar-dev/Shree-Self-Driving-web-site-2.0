import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { Settings, Save, LogOut, Edit3, X, Key } from 'lucide-react';

export default function AdminUI() {
  const { isEditMode, token, login, logout, toggleEditMode, saveChanges, changePassword, showLogin, setShowLogin } = useAdmin();
  const [showChangePass, setShowChangePass] = useState(false);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

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

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await changePassword(newPassword);
      setSuccess('Password changed successfully!');
      setTimeout(() => {
        setShowChangePass(false);
        setNewPassword('');
        setConfirmPassword('');
        setSuccess('');
      }, 2000);
    } catch (err: any) {
      setError(err.message || 'Failed to change password');
    }
  };

  return (
    <>
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
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Admin Login</h2>
            
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Password
                  </label>
                  <span className="text-[10px] text-gray-400 italic">Default: admin123</span>
                </div>
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
                className="w-full py-3 bg-gold-500 hover:bg-gold-400 text-black font-semibold rounded-lg transition-colors"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Admin Toolbar */}
      {token && (
        <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-between z-[100] shadow-md">
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="font-semibold text-gold-500 hidden sm:inline">Admin Mode</span>
            <button
              onClick={toggleEditMode}
              className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                isEditMode ? 'bg-green-500/20 text-green-400' : 'bg-gray-700 text-gray-300'
              }`}
            >
              <Edit3 size={14} className="sm:w-4 sm:h-4" />
              <span>{isEditMode ? 'Edit: ON' : 'Edit: OFF'}</span>
            </button>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => setShowChangePass(true)}
              className="flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-full text-xs sm:text-sm font-medium transition-colors"
              title="Change Password"
            >
              <Key size={14} className="sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Change Password</span>
            </button>
            <button
              onClick={saveChanges}
              className="flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-gold-500 hover:bg-gold-400 text-black rounded-full text-xs sm:text-sm font-semibold transition-colors"
            >
              <Save size={14} className="sm:w-4 sm:h-4" />
              <span>Save</span>
            </button>
            <button
              onClick={logout}
              className="flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-full text-xs sm:text-sm font-medium transition-colors"
              title="Logout"
            >
              <LogOut size={14} className="sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      )}
      {/* Change Password Modal */}
      {showChangePass && token && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100]">
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-2xl w-full max-w-md relative">
            <button 
              onClick={() => setShowChangePass(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <X size={20} />
            </button>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Change Password</h2>
            
            <form onSubmit={handleChangePassword}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-gold-500 outline-none"
                  placeholder="At least 6 characters"
                  required
                  minLength={6}
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-gold-500 outline-none"
                  placeholder="Confirm new password"
                  required
                />
              </div>
              
              {error && (
                <div className="mb-4 text-red-500 text-sm font-medium">
                  {error}
                </div>
              )}
              
              {success && (
                <div className="mb-4 text-green-500 text-sm font-medium">
                  {success}
                </div>
              )}
              
              <button
                type="submit"
                className="w-full py-3 bg-gold-500 hover:bg-gold-400 text-black font-semibold rounded-lg transition-colors"
              >
                Update Password
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
