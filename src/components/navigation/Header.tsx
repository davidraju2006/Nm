import React, { useState } from 'react';
import { Menu, Bell, Search, UserCircle, LogOut } from 'lucide-react';
import { signOut, getCurrentUser } from '../../lib/auth';
import AuthModal from '../auth/AuthModal';
import { useEffect } from 'react';
import type { AuthUser } from '../../lib/auth';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    };
    loadUser();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="bg-white border-b border-neutral-200 z-10">
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            className="md:hidden p-2 rounded-full hover:bg-neutral-100 transition-colors"
            onClick={onMenuClick}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
          
          <div className="hidden md:flex items-center relative max-w-md w-full">
            <Search size={18} className="absolute left-3 text-neutral-400" />
            <input 
              type="text" 
              placeholder="Search feedback, topics, customers..." 
              className="w-full pl-10 pr-4 py-2 rounded-full border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm transition-all"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="relative p-2 rounded-full hover:bg-neutral-100 transition-colors">
            <Bell size={20} className="text-neutral-600" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-error-500 rounded-full"></span>
          </button>
          
          {user ? (
            <div className="flex items-center gap-4">
              <div className="hidden md:block text-right">
                <p className="text-sm font-medium text-neutral-900">
                  {user.role === 'customer' ? user.company : 'Admin'}
                </p>
                <p className="text-xs text-neutral-500">{user.email}</p>
              </div>
              <button
                onClick={handleSignOut}
                className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
              >
                <LogOut size={20} className="text-neutral-600" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowAuthModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
            >
              <UserCircle size={20} />
              <span>Sign In</span>
            </button>
          )}
        </div>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </header>
  );
};

export default Header;