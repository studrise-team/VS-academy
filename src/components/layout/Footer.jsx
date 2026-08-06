import { Link } from 'react-router-dom';
import { BookOpen, GitBranch, Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t border-borderGlass bg-card mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 text-primary mb-3">
              <BookOpen className="w-6 h-6" />
              <span className="font-bold text-lg text-foreground">Swarnandhra Academy</span>
            </Link>
            <p className="text-textSecondary text-sm leading-relaxed">
              Complete notes, projects, interview questions, and career roadmap for engineering students.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-3">Learn</h3>
            <ul className="space-y-2 text-sm">
              {['HTML', 'CSS', 'Java', 'MySQL', 'Linux', 'Git & GitHub', 'AI'].map(subject => (
                <li key={subject}>
                  <Link to="/subjects" className="text-textSecondary hover:text-primary transition-colors">
                    {subject}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/subjects" className="text-textSecondary hover:text-primary transition-colors">Technologies</Link></li>
              <li><Link to="/projects" className="text-textSecondary hover:text-primary transition-colors">Projects</Link></li>
              <li><span className="text-textSecondary">Interview Questions</span></li>
              <li><span className="text-textSecondary">Practice Quizzes</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-3">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:venkatamallacs@gmail.com" className="text-textSecondary hover:text-primary transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Contact Admin
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-primary transition-colors flex items-center gap-2">
                  <GitBranch className="w-4 h-4" /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-borderGlass flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-textSecondary">
            © {new Date().getFullYear()} Swarnandhra Academy. All rights reserved.
          </p>
          <p className="text-xs text-textSecondary flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-danger fill-danger" /> for Students
          </p>
        </div>
      </div>
    </footer>
  );
}
