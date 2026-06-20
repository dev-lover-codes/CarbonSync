import React, { useState } from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Map, 
  Bot, 
  Lightbulb, 
  Target, 
  Trophy, 
  Info, 
  User,
  Bell,
  Flame,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import Avatar from '../ui/Avatar';
import Badge from '../ui/Badge';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Map, label: 'Tracker', path: '/tracker' },
  { icon: Bot, label: 'AI Coach', path: '/coach' },
  { icon: Lightbulb, label: 'Insights', path: '/insights' },
  { icon: Target, label: 'Goals', path: '/goals' },
  { icon: Trophy, label: 'Leaderboard', path: '/leaderboard' },
  { icon: Info, label: 'Tips', path: '/tips' },
  { icon: User, label: 'Profile', path: '/profile' },
];

const AppLayout = () => {
  const { userProfile, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/auth');
    } catch {
      // Logout errors are non-critical; user stays on current page
    }
  };

  const currentPage = navItems.find(item => item.path === location.pathname)?.label || 'CarbonSync';

  return (
    <div className="min-h-screen bg-surface flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-72 bg-white border-r border-gray-100 fixed inset-y-0 left-0 z-40">
        <div className="p-8">
          <Link to="/dashboard" className="text-2xl font-black text-primary flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full" />
            </div>
            CarbonSync
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all duration-200
                ${location.pathname === item.path 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-gray-400 hover:text-primary hover:bg-primary/5'}
              `}
            >
              <item.icon size={22} />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <div className="bg-gray-50 rounded-2xl p-4 space-y-4">
            <div className="flex items-center gap-3">
              <Avatar name={userProfile?.name} level={userProfile?.level} />
              <div className="flex-1 min-w-0">
                <p className="font-bold text-surface-dark truncate">{userProfile?.name || 'Guest User'}</p>
                <Badge variant="green">{userProfile?.level || 'Seedling'}</Badge>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm font-bold text-red-400 hover:text-red-500 transition-colors w-full px-2"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 lg:ml-72 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-surface/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden p-2 text-gray-500"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close sidebar menu" : "Open sidebar menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="text-xl lg:text-2xl font-black text-surface-dark">{currentPage}</h1>
          </div>

          <div className="flex items-center gap-3 lg:gap-6">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 text-amber-600 rounded-full font-bold text-sm lg:text-base">
              <Flame size={20} className="fill-amber-500" />
              {userProfile?.streak || 0}
            </div>
            <button 
              className="relative p-2 text-gray-400 hover:text-primary transition-colors"
              aria-label="View notifications"
            >
              <Bell size={24} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-surface" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-6 lg:p-10 pb-24 lg:pb-10">
          <Outlet />
        </div>

        {/* Mobile Bottom Navigation */}
        <nav className="lg:hidden fixed bottom-0 inset-x-0 bg-white border-t border-gray-100 px-6 py-3 flex items-center justify-between z-40">
          {navItems.slice(0, 5).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex flex-col items-center gap-1 transition-all duration-200
                ${location.pathname === item.path ? 'text-primary' : 'text-gray-300'}
              `}
            >
              <item.icon size={24} />
              <span className="text-[10px] font-bold">{item.label}</span>
            </Link>
          ))}
        </nav>
      </main>

      {/* Mobile Drawer (optional/expanded items) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              className="lg:hidden fixed inset-y-0 left-0 w-64 bg-white z-[60] p-6 shadow-xl"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="text-xl font-black text-primary">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close sidebar menu"><X size={24} /></button>
              </div>
              <nav className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 font-bold ${location.pathname === item.path ? 'text-primary' : 'text-gray-400'}`}
                  >
                    <item.icon size={20} />
                    {item.label}
                  </Link>
                ))}
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-3 font-bold text-red-400 w-full pt-4 border-t border-gray-100"
                >
                  <LogOut size={20} />
                  Logout
                </button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AppLayout;
