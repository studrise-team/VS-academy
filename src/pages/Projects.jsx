import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { Search, Monitor, Cpu, Shield, Database, Cloud, Activity, Leaf, Smartphone, Code, Zap } from 'lucide-react';

const categories = [
  { name: 'All', icon: Zap },
  { name: 'AI & Machine Learning', icon: Cpu },
  { name: 'Internet of Things (IoT)', icon: Activity },
  { name: 'Web Development', icon: Code },
  { name: 'Cybersecurity & Blockchain', icon: Shield },
  { name: 'Embedded Systems', icon: Monitor },
  { name: 'Data Science & Analytics', icon: Database },
  { name: 'Cloud & DevOps', icon: Cloud },
  { name: 'Biomedical & Healthcare', icon: Activity },
  { name: 'Renewable Energy', icon: Leaf },
  { name: 'Mobile App Development', icon: Smartphone },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24 pb-12 bg-background relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -z-10 animate-blob" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20"
          >
            <Zap className="w-4 h-4" />
            <span>Discover Top B.Tech Projects</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight mb-6"
          >
            Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Project Ideas</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-textSecondary max-w-2xl mx-auto mb-10"
          >
            Explore cutting-edge project ideas across AI, Web3, IoT, and Cloud to build your ultimate resume and solve real-world problems.
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-xl mx-auto relative group"
          >
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-textSecondary group-focus-within:text-primary transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search by project name or technology..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-card/80 backdrop-blur-xl border border-borderGlass rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder-textSecondary shadow-lg shadow-black/5 transition-all"
            />
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full lg:w-1/4 shrink-0"
          >
            <div className="sticky top-24 flex flex-col gap-2">
              <h3 className="text-lg font-bold text-foreground mb-2 px-2">Domains</h3>
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all text-left ${
                    activeCategory === cat.name
                      ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                      : 'bg-card border border-borderGlass text-textSecondary hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-foreground hover:translate-x-1'
                  }`}
                >
                  <cat.icon className="w-4 h-4 shrink-0" />
                  <span className="text-sm">{cat.name}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid Container */}
          <div className="w-full lg:w-3/4">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold text-foreground mb-2">No projects found</h3>
            <p className="text-textSecondary">Try adjusting your search or category filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  key={project.id}
                >
                  <Link to={`/projects/${project.id}`} className="block h-full">
                    <div className="h-full glass-card p-6 flex flex-col group hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                      
                      <div className="flex justify-between items-start mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                          {project.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm text-textSecondary mb-6 line-clamp-3 flex-grow">
                        {project.description}
                      </p>
                      
                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.slice(0, 3).map((tech, i) => (
                            <span key={i} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-textSecondary text-xs rounded-lg font-medium border border-borderGlass">
                              {tech}
                            </span>
                          ))}
                          {project.techStack.length > 3 && (
                            <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-textSecondary text-xs rounded-lg font-medium border border-borderGlass">
                              +{project.techStack.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
          </div>
        </div>
      </div>
    </div>
  );
}
