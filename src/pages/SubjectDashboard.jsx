import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code2, Database, Layout, Terminal, GitBranch, Server, BrainCircuit, Globe, Layers } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

const subjects = [
  { id: 'html', name: 'HTML', chapters: 12, difficulty: 'Beginner', time: '10h', icon: Layout, color: 'text-orange-500', bg: 'bg-orange-500/10', image: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?auto=format&fit=crop&q=80&w=800' }, // HTML Code
  { id: 'css', name: 'CSS', chapters: 15, difficulty: 'Beginner', time: '20h', icon: Layers, color: 'text-blue-400', bg: 'bg-blue-400/10', image: 'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?auto=format&fit=crop&q=80&w=800' }, // CSS / Design
  { id: 'java', name: 'Java', chapters: 28, difficulty: 'Intermediate', time: '45h', icon: Code2, color: 'text-red-500', bg: 'bg-red-500/10', image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=800' }, // Java / Code Screen
  { id: 'mysql', name: 'MySQL', chapters: 16, difficulty: 'Intermediate', time: '25h', icon: Database, color: 'text-blue-600', bg: 'bg-blue-600/10', image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800' }, // Data / Charts / DB
  { id: 'linux', name: 'Linux', chapters: 10, difficulty: 'Beginner', time: '15h', icon: Terminal, color: 'text-yellow-500', bg: 'bg-yellow-500/10', image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800' }, // Linux Terminal
  { id: 'github', name: 'Git & GitHub', chapters: 89, difficulty: 'Beginner', time: '25h', icon: GitBranch, color: 'text-slate-800 dark:text-slate-200', bg: 'bg-slate-500/10', image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800' }, // Git / Code
  { id: 'ai', name: 'Artificial Intelligence', chapters: 8, difficulty: 'Advanced', time: '30h', icon: BrainCircuit, color: 'text-purple-500', bg: 'bg-purple-500/10', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800' }, // AI Brain / Network
];

export default function SubjectDashboard() {
  const { currentUser } = useAuth();
  const [progressData, setProgressData] = useState({});

  useEffect(() => {
    const fetchAllProgress = async () => {
      if (!currentUser) {
        // Fallback local storage check (less accurate across all, but we can do a quick scan)
        const local = {};
        subjects.forEach(sub => {
          let count = 0;
          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith(`completed_${sub.id}_`) && localStorage.getItem(key) === 'true') {
              count++;
            }
          }
          local[sub.id] = count;
        });
        setProgressData(local);
        return;
      }

      try {
        const q = query(
          collection(db, 'users', currentUser.uid, 'progress'),
          where('isCompleted', '==', true)
        );
        const snapshot = await getDocs(q);
        const counts = {};
        snapshot.forEach((doc) => {
          const data = doc.data();
          if (data.subjectId) {
            counts[data.subjectId] = (counts[data.subjectId] || 0) + 1;
          }
        });
        setProgressData(counts);
      } catch (e) {
        console.error("Failed to load dashboard progress", e);
      }
    };

    fetchAllProgress();
  }, [currentUser]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Subjects</h1>
        <p className="text-textSecondary">Choose a subject to start learning.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {subjects.map((subject, idx) => {
          const completedCount = progressData[subject.id] || 0;
          const percentage = Math.round((completedCount / subject.chapters) * 100) || 0;
          
          return (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <Link to={`/subjects/${subject.id}`} className="block h-full">
                <div className="glass-card h-full flex flex-col group hover:shadow-xl hover:border-primary/30 overflow-hidden">
                  
                  {/* Hero Image Section */}
                  <div className="relative h-40 w-full overflow-hidden">
                    <img 
                      src={subject.image} 
                      alt={subject.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                    <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl ${subject.bg} backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <subject.icon className={`w-6 h-6 ${subject.color}`} />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{subject.name}</h3>
                    
                    <div className="flex flex-wrap gap-2 mb-6 text-sm text-textSecondary">
                      <span className="bg-slate-500/10 px-2 py-1 rounded-md">{subject.chapters} Chapters</span>
                      <span className="bg-slate-500/10 px-2 py-1 rounded-md">{subject.difficulty}</span>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="flex justify-between text-xs text-textSecondary mb-2">
                        <span>Progress</span>
                        <span>{percentage}%</span>
                      </div>
                      <div className="w-full bg-slate-500/20 h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full transition-all duration-1000" style={{ width: `${percentage}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
