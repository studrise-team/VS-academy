import { Link } from 'react-router-dom';
import { useTheme } from '../theme-provider';
import { Moon, Sun, Search, BookOpen } from 'lucide-react';

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 w-full glass border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-primary">
          <BookOpen className="w-8 h-8" />
          <span className="font-bold text-xl text-foreground">Swarnandhra Academy</span>
        </Link>  
        

        <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-textSecondary w-4 h-4" />
          <input
            type="text"
            placeholder="Search topics, code, interview questions..."
            className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border border-borderGlass rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/subjects" className="text-sm font-medium hover:text-primary transition-colors">Technologies</Link>
          <Link to="/projects" className="text-sm font-medium hover:text-primary transition-colors hidden md:block">Projects</Link>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {theme === "dark" ? <Sun className="w-5 h-5 text-warning" /> : <Moon className="w-5 h-5 text-secondary" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
