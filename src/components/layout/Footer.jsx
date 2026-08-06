import { Link } from 'react-router-dom';
import { BookOpen, GitBranch, Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full relative mt-auto overflow-hidden">
      {/* Decorative gradient blur in background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-24 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="bg-card/40 backdrop-blur-xl border-t border-borderGlass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2 lg:col-span-1">
              <Link to="/" className="flex items-center space-x-2 text-primary mb-4 group w-fit">
                <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="font-extrabold text-xl text-foreground tracking-tight">VS-Academy</span>
              </Link>
              <p className="text-textSecondary text-sm leading-relaxed mb-6">
                Complete notes, projects, interview questions, and career roadmap for engineering students. Built for the future of learning.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-foreground text-sm uppercase tracking-wider mb-4 relative inline-block">
                Learn
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary rounded-full"></span>
              </h3>
              <ul className="space-y-3 text-sm">
                {['HTML', 'CSS', 'Java', 'MySQL', 'Linux', 'Git & GitHub', 'AI'].map(subject => (
                  <li key={subject}>
                    <Link to="/subjects" className="text-textSecondary hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">
                      {subject}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-bold text-foreground text-sm uppercase tracking-wider mb-4 relative inline-block">
                Resources
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary rounded-full"></span>
              </h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/subjects" className="text-textSecondary hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Technologies</Link></li>
                <li><Link to="/projects" className="text-textSecondary hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Projects</Link></li>
                <li><span className="text-textSecondary cursor-not-allowed opacity-70">Interview Questions</span></li>
                <li><span className="text-textSecondary cursor-not-allowed opacity-70">Practice Quizzes</span></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-foreground text-sm uppercase tracking-wider mb-4 relative inline-block">
                Connect
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary rounded-full"></span>
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="mailto:venkatamallacs@gmail.com" className="text-textSecondary hover:text-primary transition-all duration-300 flex items-center gap-3 group">
                    <div className="bg-slate-800/50 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    Contact Admin
                  </a>
                </li>
                <li>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-primary transition-all duration-300 flex items-center gap-3 group">
                    <div className="bg-slate-800/50 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <GitBranch className="w-4 h-4" />
                    </div>
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-borderGlass/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-textSecondary font-medium">
              © {new Date().getFullYear()} VS-Academy. All rights reserved.
            </p>
            <p className="text-xs text-textSecondary flex items-center gap-1.5 font-medium bg-slate-800/30 px-3 py-1.5 rounded-full">
              Made with <Heart className="w-3.5 h-3.5 text-danger fill-danger animate-pulse" /> for Students
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
