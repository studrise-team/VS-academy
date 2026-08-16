import { Link } from 'react-router-dom';
import { GitBranch, Briefcase, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t border-borderGlass bg-card mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-primary mb-4">VS Academy</h3>
            <p className="text-textSecondary mb-4 max-w-sm">
              Learn technology the smart way. Complete notes, projects, interview questions, and career roadmap in one place.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-textSecondary hover:text-primary transition-colors"><GitBranch className="w-5 h-5" /></a>
              <a href="#" className="text-textSecondary hover:text-primary transition-colors"><Briefcase className="w-5 h-5" /></a>
              <a href="#" className="text-textSecondary hover:text-primary transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/subjects" className="text-textSecondary hover:text-primary text-sm transition-colors">All Subjects</Link></li>
              <li><Link to="/projects" className="text-textSecondary hover:text-primary text-sm transition-colors">Projects</Link></li>
              <li><Link to="/placement" className="text-textSecondary hover:text-primary text-sm transition-colors">Placement Prep</Link></li>
              <li><a href="#" className="text-textSecondary hover:text-primary text-sm transition-colors">Cheat Sheets</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-textSecondary hover:text-primary text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-textSecondary hover:text-primary text-sm transition-colors">Contact</a></li>
              <li><a href="#" className="text-textSecondary hover:text-primary text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-textSecondary hover:text-primary text-sm transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-borderGlass text-center flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-textSecondary">
            © {new Date().getFullYear()} VS Academy. All rights reserved.
          </p>
          <p className="text-sm text-textSecondary mt-2 md:mt-0 flex items-center">
            Made with <span className="text-danger mx-1">❤️</span> for Students
          </p>
        </div>
      </div>
    </footer>
  );
}
