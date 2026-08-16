import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../theme-provider';
import { Moon, Sun, Search, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full glass border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-primary">
          <img src="/logo.png" alt="VS Academy Logo" className="w-9 h-9 object-contain rounded-lg" />
          <span className="font-bold text-xl text-foreground">VS Academy</span>
        </Link>
        

        <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-textSecondary w-4 h-4" />
          <input
            type="text"
            placeholder="Search topics, code, interview questions..."
            className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border border-borderGlass rounded-full text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/subjects" className="text-sm font-medium hover:text-primary transition-colors">Technologies</Link>
          <Link to="/projects" className="text-sm font-medium hover:text-primary transition-colors hidden md:block">Projects</Link>
          <Link to="/results" className="text-sm font-medium hover:text-primary transition-colors">Results</Link>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {theme === "dark" ? <Sun className="w-5 h-5 text-warning" /> : <Moon className="w-5 h-5 text-secondary" />}
          </button>
          {currentUser && (
            <button
              onClick={handleLogout}
              title="Logout"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 border border-red-200 dark:border-red-800 hover:border-red-400 transition-all duration-200"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
