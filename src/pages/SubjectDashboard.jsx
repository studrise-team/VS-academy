import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code2, Database, Layout, Terminal, GitBranch, Server, BrainCircuit, Globe, Layers } from 'lucide-react';

const subjects = [
  { id: 'html', name: 'HTML', chapters: 12, difficulty: 'Beginner', time: '10h', icon: Layout, color: 'text-orange-500', bg: 'bg-orange-500/10' },
  { id: 'css', name: 'CSS', chapters: 15, difficulty: 'Beginner', time: '20h', icon: Layers, color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { id: 'java', name: 'Java', chapters: 28, difficulty: 'Intermediate', time: '45h', icon: Code2, color: 'text-red-500', bg: 'bg-red-500/10' },
  { id: 'mysql', name: 'MySQL', chapters: 16, difficulty: 'Intermediate', time: '25h', icon: Database, color: 'text-blue-600', bg: 'bg-blue-600/10' },
  { id: 'linux', name: 'Linux', chapters: 10, difficulty: 'Beginner', time: '15h', icon: Terminal, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
  { id: 'github', name: 'Git & GitHub', chapters: 89, difficulty: 'Beginner', time: '25h', icon: GitBranch, color: 'text-slate-800 dark:text-slate-200', bg: 'bg-slate-500/10' },
  { id: 'ai', name: 'Artificial Intelligence', chapters: 8, difficulty: 'Advanced', time: '30h', icon: BrainCircuit, color: 'text-purple-500', bg: 'bg-purple-500/10' },
];

export function SubjectDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Subjects</h1>
        <p className="text-textSecondary">Choose a subject to start learning.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {subjects.map((subject, idx) => (
          <motion.div
            key={subject.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <Link to={`/subjects/${subject.id}`} className="block h-full">
              <div className="glass-card p-6 h-full flex flex-col group hover:shadow-xl hover:border-primary/30">
                <div className={`w-12 h-12 rounded-xl ${subject.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <subject.icon className={`w-6 h-6 ${subject.color}`} />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{subject.name}</h3>
                
                <div className="flex flex-wrap gap-2 mb-6 text-sm text-textSecondary">
                  <span className="bg-slate-500/10 px-2 py-1 rounded-md">{subject.chapters} Chapters</span>
                  <span className="bg-slate-500/10 px-2 py-1 rounded-md">{subject.difficulty}</span>
                </div>
                
                <div className="mt-auto">
                  <div className="flex justify-between text-xs text-textSecondary mb-2">
                    <span>Progress</span>
                    <span>0%</span>
                  </div>
                  <div className="w-full bg-slate-500/20 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-0 rounded-full"></div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
