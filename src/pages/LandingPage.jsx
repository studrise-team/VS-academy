import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, BookOpen, FileText, CheckCircle2 } from 'lucide-react';

export function LandingPage() {
  const features = [
    "Beginner Friendly",
    "Practical Examples",
    "Interview Questions",
    "Mini Projects",
    "Cheat Sheets",
    "Download Notes",
    "Practice Quiz",
    "Mobile Friendly"
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background -z-10" />
        
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            Learn Technology the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Smart Way</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-textSecondary max-w-2xl mx-auto mb-10"
          >
            Complete notes, projects, interview questions, coding practice and career roadmap in one beautiful place.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Link to="/subjects" className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all flex items-center shadow-lg shadow-primary/30 w-full sm:w-auto justify-center">
              Start Learning <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/projects" className="px-8 py-4 rounded-full bg-card border border-borderGlass hover:bg-slate-100 dark:hover:bg-slate-800 transition-all text-foreground font-semibold w-full sm:w-auto justify-center flex items-center">
              Explore Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50 dark:bg-[#151f32]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
            <p className="text-textSecondary">Designed for students, built for success.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card p-6 flex items-center gap-3 hover:-translate-y-1"
              >
                <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0" />
                <span className="font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
