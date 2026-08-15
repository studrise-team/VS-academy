import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code2, Database, Layout, Terminal, GitBranch, BrainCircuit, Layers, FileCode, ArrowRight, Clock, BookOpen, Server } from 'lucide-react';

const subjects = [
  {
    id: 'html',
    name: 'HTML',
    label: 'HyperText Markup Language',
    chapters: 12,
    difficulty: 'Beginner',
    time: '10h',
    icon: Layout,
    color: 'text-orange-400',
    glow: 'shadow-orange-500/40',
    border: 'hover:border-orange-500/60',
    bg: 'bg-orange-500/10',
    accent: '#f97316',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800',
    tags: ['Structure', 'Semantics', 'Forms'],
  },
  {
    id: 'css',
    name: 'CSS',
    label: 'Cascading Style Sheets',
    chapters: 15,
    difficulty: 'Beginner',
    time: '20h',
    icon: Layers,
    color: 'text-blue-400',
    glow: 'shadow-blue-500/40',
    border: 'hover:border-blue-500/60',
    bg: 'bg-blue-500/10',
    accent: '#3b82f6',
    image: 'https://images.unsplash.com/photo-1545670723-196ed0954986?auto=format&fit=crop&q=80&w=800',
    tags: ['Flexbox', 'Grid', 'Animations'],
  },
  {
    id: 'java',
    name: 'Java',
    label: 'Object-Oriented Programming',
    chapters: 28,
    difficulty: 'Intermediate',
    time: '45h',
    icon: Code2,
    color: 'text-red-400',
    glow: 'shadow-red-500/40',
    border: 'hover:border-red-500/60',
    bg: 'bg-red-500/10',
    accent: '#ef4444',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    tags: ['OOP', 'Collections', 'Threads'],
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    label: 'Dynamic Web Programming',
    chapters: 296,
    difficulty: 'Intermediate',
    time: '35h',
    icon: FileCode,
    color: 'text-yellow-400',
    glow: 'shadow-yellow-500/40',
    border: 'hover:border-yellow-500/60',
    bg: 'bg-yellow-500/10',
    accent: '#eab308',
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&q=80&w=800',
    tags: ['DOM', 'ES6+', 'Async/Await'],
  },
  {
    id: 'mysql',
    name: 'MySQL',
    label: 'Relational Database Management',
    chapters: 16,
    difficulty: 'Intermediate',
    time: '25h',
    icon: Database,
    color: 'text-cyan-400',
    glow: 'shadow-cyan-500/40',
    border: 'hover:border-cyan-500/60',
    bg: 'bg-cyan-500/10',
    accent: '#06b6d4',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    tags: ['Queries', 'Joins', 'Indexing'],
  },
  {
    id: 'linux',
    name: 'Linux',
    label: 'Command Line & Shell Scripting',
    chapters: 10,
    difficulty: 'Beginner',
    time: '15h',
    icon: Terminal,
    color: 'text-green-400',
    glow: 'shadow-green-500/40',
    border: 'hover:border-green-500/60',
    bg: 'bg-green-500/10',
    accent: '#22c55e',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=800',
    tags: ['Shell', 'Bash', 'File System'],
  },
  {
    id: 'github',
    name: 'Git & GitHub',
    label: 'Version Control & Collaboration',
    chapters: 89,
    difficulty: 'Beginner',
    time: '25h',
    icon: GitBranch,
    color: 'text-violet-400',
    glow: 'shadow-violet-500/40',
    border: 'hover:border-violet-500/60',
    bg: 'bg-violet-500/10',
    accent: '#8b5cf6',
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&q=80&w=800',
    tags: ['Commits', 'Branches', 'Pull Requests'],
  },
  {
    id: 'ai',
    name: 'AI',
    label: 'Artificial Intelligence',
    chapters: 8,
    difficulty: 'Advanced',
    time: '30h',
    icon: BrainCircuit,
    color: 'text-pink-400',
    glow: 'shadow-pink-500/40',
    border: 'hover:border-pink-500/60',
    bg: 'bg-pink-500/10',
    accent: '#ec4899',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
    tags: ['ML', 'Neural Nets', 'Prompting'],
  },
  {
    id: 'devops',
    name: 'DevOps',
    label: 'CI/CD & Infrastructure',
    chapters: 22,
    difficulty: 'Intermediate',
    time: '40h',
    icon: Server,
    color: 'text-indigo-400',
    glow: 'shadow-indigo-500/40',
    border: 'hover:border-indigo-500/60',
    bg: 'bg-indigo-500/10',
    accent: '#6366f1',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800',
    tags: ['Docker', 'AWS', 'Kubernetes'],
  },
];

const difficultyConfig = {
  Beginner:     { class: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40', dot: 'bg-emerald-400' },
  Intermediate: { class: 'bg-amber-500/20 text-amber-300 border border-amber-500/40',     dot: 'bg-amber-400' },
  Advanced:     { class: 'bg-rose-500/20 text-rose-300 border border-rose-500/40',         dot: 'bg-rose-400' },
};

function SubjectCard({ subject, idx }) {
  const [hovered, setHovered] = useState(false);
  const diff = difficultyConfig[subject.difficulty];
  const Icon = subject.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/subjects/${subject.id}`} className="block h-full">
        <motion.div
          animate={{ y: hovered ? -6 : 0, scale: hovered ? 1.02 : 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          className={`relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md h-full flex flex-col transition-all duration-300 ${subject.border} ${hovered ? `shadow-2xl ${subject.glow}` : 'shadow-md'}`}
          style={{
            boxShadow: hovered ? `0 20px 60px -10px ${subject.accent}55, 0 0 0 1px ${subject.accent}44` : undefined,
          }}
        >
          {/* Image Section */}
          <div className="relative h-44 overflow-hidden">
            <motion.img
              src={subject.image}
              alt={subject.name}
              className="w-full h-full object-cover"
              animate={{ scale: hovered ? 1.12 : 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

            {/* Colored glow overlay on hover */}
            <motion.div
              className="absolute inset-0"
              animate={{ opacity: hovered ? 0.25 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ background: `radial-gradient(ellipse at center, ${subject.accent}, transparent 70%)` }}
            />

            {/* Difficulty Badge */}
            <div className={`absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold backdrop-blur-md ${diff.class}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${diff.dot} animate-pulse`} />
              {subject.difficulty}
            </div>

            {/* Icon Badge */}
            <motion.div
              animate={{ scale: hovered ? 1.15 : 1, rotate: hovered ? 8 : 0 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className={`absolute bottom-3 left-4 w-11 h-11 rounded-xl ${subject.bg} border border-white/20 flex items-center justify-center shadow-xl backdrop-blur-sm`}
              style={{ boxShadow: hovered ? `0 0 20px ${subject.accent}88` : undefined }}
            >
              <Icon className={`w-5 h-5 ${subject.color}`} />
            </motion.div>
          </div>

          {/* Card Body */}
          <div className="p-5 flex flex-col flex-1">
            {/* Name & Label */}
            <div className="mb-3">
              <h3 className="text-xl font-extrabold text-white tracking-tight">{subject.name}</h3>
              <p className="text-xs text-slate-400 mt-0.5 truncate">{subject.label}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {subject.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-medium px-2 py-0.5 rounded-md border border-white/10 bg-white/5 text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
              <span className="flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" />
                {subject.chapters} Chapters
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {subject.time}
              </span>
            </div>

            {/* Progress bar */}
            <div className="mt-auto">
              <div className="flex justify-between text-[11px] text-slate-500 mb-1.5">
                <span>Progress</span>
                <span>0%</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="h-full w-0 rounded-full" style={{ background: subject.accent }} />
              </div>
            </div>

            {/* CTA row - appears on hover */}
            <motion.div
              animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
              transition={{ duration: 0.2 }}
              className="mt-4 flex items-center gap-1 text-xs font-semibold"
              style={{ color: subject.accent }}
            >
              Start Learning
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.div>
          </div>

          {/* Bottom glow line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ background: `linear-gradient(90deg, transparent, ${subject.accent}, transparent)` }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}

export function SubjectDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-3 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
          Learning Paths
        </span>
        <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          Choose Your Subject
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto text-sm">
          Master in-demand tech skills with structured courses, quizzes, and hands-on projects — all in one place.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {subjects.map((subject, idx) => (
          <SubjectCard key={subject.id} subject={subject} idx={idx} />
        ))}
      </div>
    </div>
  );
}
