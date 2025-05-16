import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  BarChart3, 
  MessageCircle, 
  PieChart,
  Target,
  ShieldCheck,
  Settings,
  X,
  Home
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `
      flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors
      ${isActive 
        ? 'bg-primary-50 text-primary-700 font-medium' 
        : 'text-neutral-600 hover:bg-neutral-100'
      }
    `}
  >
    {icon}
    <span>{label}</span>
  </NavLink>
);

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-neutral-800/50 z-20 md:hidden"
          onClick={onClose}
        ></div>
      )}
      
      {/* Sidebar */}
      <aside 
        className={`
          fixed md:sticky top-0 left-0 h-full w-72 bg-white border-r border-neutral-200 z-30
          transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full p-4">
          <div className="flex items-center justify-between mb-8 px-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-primary-600 flex items-center justify-center">
                <MessageCircle size={20} className="text-white" />
              </div>
              <h1 className="text-lg font-semibold">VoC Dashboard</h1>
            </div>
            
            <button 
              className="md:hidden p-1 rounded-full hover:bg-neutral-100"
              onClick={onClose}
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>
          
          <nav className="space-y-1.5">
            <NavItem to="/" icon={<Home size={18} />} label="Dashboard" />
            <NavItem to="/sentiment" icon={<BarChart3 size={18} />} label="Sentiment Analysis" />
            <NavItem to="/feedback" icon={<MessageCircle size={18} />} label="Feedback Aggregation" />
            <NavItem to="/marketing" icon={<Target size={18} />} label="Marketing Automation" />
            <NavItem to="/security" icon={<ShieldCheck size={18} />} label="Security & Compliance" />
          </nav>
          
          <div className="mt-auto">
            <div className="border-t border-neutral-200 pt-4 mt-4">
              <NavItem to="/settings" icon={<Settings size={18} />} label="Settings" />
            </div>
            
            <div className="bg-primary-50 rounded-lg p-4 mt-6">
              <h3 className="text-sm font-medium text-primary-800 mb-2">Pro Upgrade</h3>
              <p className="text-xs text-primary-700 mb-3">Get advanced analytics and AI features</p>
              <button className="w-full px-3 py-1.5 bg-primary-600 text-white text-sm rounded-md hover:bg-primary-700 transition-colors">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;