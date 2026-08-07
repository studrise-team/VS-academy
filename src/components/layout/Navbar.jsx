import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../theme-provider';
import { useAuth } from '../../contexts/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Search, BookOpen, LogOut, User, Menu, X, Shield, ChevronRight, MessageSquare } from 'lucide-react';

import { NotificationDrawer } from '../notifications/NotificationDrawer';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { currentUser, isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  const navLinks = [
    { to: '/subjects', label: 'Technologies' },
    { to: '/projects', label: 'Projects' },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 w-full glass border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2.5 text-primary shrink-0 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300 ring-2 ring-primary/20 bg-slate-900 flex items-center justify-center p-0.5">
              <img src="/logo.png" alt="VS Academy Logo" className="w-full h-full object-contain filter drop-shadow" />
            </div>
            <span className="font-extrabold text-lg sm:text-xl text-foreground tracking-tight hidden min-[400px]:inline">VS-Academy</span>
            <span className="font-extrabold text-lg text-foreground min-[400px]:hidden">VS</span>
          </Link>  
          
          {/* Desktop Search */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-textSecondary w-4 h-4" />
            <input
              type="text"
              placeholder="Search topics, code, interview questions..."
              className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border border-borderGlass rounded-full text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                  location.pathname.startsWith(link.to) ? 'text-primary' : 'hover:text-primary'
                }`}
              >
                {link.icon && <link.icon className="w-4 h-4" />}
                {link.label}
              </Link>
            ))}

            {isAdmin ? (
              <Link
                to="/admin/chat"
                className="text-sm font-medium hover:text-primary transition-all flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 shadow-sm active:scale-95"
                title="Student Messages Center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Messages</span>
              </Link>
            ) : (
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('toggle-student-chat'))}
                className="text-sm font-medium hover:text-primary transition-all flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 shadow-sm active:scale-95"
                title="Chat with Admin"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat</span>
              </button>
            )}
            
            {/* Notification Bell Icon */}
            <NotificationDrawer />
            
            <div className="h-6 w-px bg-borderGlass ml-4"></div>

            {currentUser ? (
              <div className="flex items-center space-x-3">
                <Link to="/profile" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                  {/* Avatar */}
                  <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-primary/20">
                    {currentUser.profilePhoto ? (
                      <img src={currentUser.profilePhoto} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xs">
                        {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
                      </div>
                    )}
                  </div>
                  <span className="text-sm font-medium hidden lg:inline">{currentUser.name || 'Student'}</span>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-sm font-medium text-danger hover:text-danger/80 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden lg:inline">Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login" className="text-sm font-medium px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors">
                  Login
                </Link>
              </div>
            )}
          </div>

          {/* Mobile: Notification + Theme + Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <NotificationDrawer />
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === "dark" ? <Sun className="w-5 h-5 text-warning" /> : <Moon className="w-5 h-5 text-secondary" />}
            </button>
            <button
              onClick={() => setDrawerOpen(true)}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-[280px] bg-[color:var(--card)] z-[70] md:hidden shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-4 border-b border-borderGlass">
                <span className="font-bold text-lg">Menu</span>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* User Info */}
              {currentUser && (
                <Link to="/profile" className="block p-4 border-b border-borderGlass hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" onClick={() => setDrawerOpen(false)}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
                      {currentUser.profilePhoto ? (
                        <img src={currentUser.profilePhoto} alt="" className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                          <User className="w-6 h-6 text-primary" />
                        </div>
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold truncate text-[color:var(--foreground)]">{currentUser.name || 'Student'}</p>
                      <p className="text-xs text-textSecondary truncate">{currentUser.email}</p>
                    </div>
                  </div>
                </Link>
              )}

              {/* Search */}
              <div className="p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-textSecondary w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-borderGlass rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
              </div>

              {/* Nav Links */}
              <div className="flex-1 px-2 space-y-1 overflow-y-auto">
                {navLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      location.pathname.startsWith(link.to)
                        ? 'bg-primary/10 text-primary'
                        : 'text-[color:var(--foreground)] hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {link.icon && <link.icon className="w-4 h-4" />}
                      {link.label}
                    </div>
                    <ChevronRight className="w-4 h-4 text-textSecondary" />
                  </Link>
                ))}

                {isAdmin ? (
                  <Link
                    to="/admin/chat"
                    onClick={() => setDrawerOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 transition-all border border-primary/20 mt-2"
                  >
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      <span>Student Messages</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-primary" />
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      setDrawerOpen(false);
                      window.dispatchEvent(new CustomEvent('toggle-student-chat'));
                    }}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 transition-all border border-primary/20 mt-2"
                  >
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      <span>Chat with Admin</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-primary" />
                  </button>
                )}
              </div>

              {/* Bottom Actions */}
              <div className="p-4 border-t border-borderGlass space-y-2">
                {currentUser ? (
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-danger bg-danger/10 border border-danger/20 rounded-xl hover:bg-danger/20 transition-all"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="w-full flex items-center justify-center px-4 py-3 text-sm font-semibold bg-primary text-white rounded-xl hover:bg-primary/90 transition-all"
                  >
                    Login
                  </Link>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
