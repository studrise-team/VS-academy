import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import { ArrowLeft, Target, Lightbulb, Zap, Code2, PlayCircle, ExternalLink } from 'lucide-react';

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-12 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-foreground mb-4">Project not found</h2>
        <button onClick={() => navigate('/projects')} className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          Go back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-textSecondary hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Projects</span>
        </Link>

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <span className="inline-block px-3 py-1 mb-4 bg-primary/10 text-primary text-sm font-bold rounded-full border border-primary/20">
            {project.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-6 leading-tight">
            {project.title}
          </h1>
          <p className="text-lg text-textSecondary leading-relaxed border-l-4 border-primary pl-4">
            {project.description}
          </p>
        </motion.div>

        {/* YouTube Video Section */}
        {project.videoId && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12 rounded-2xl overflow-hidden shadow-2xl border border-borderGlass aspect-video bg-slate-900 relative group"
          >
            <iframe 
              width="100%" 
              height="100%" 
              src={`https://www.youtube.com/embed/${project.videoId}?rel=0`} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <div className="md:col-span-2 space-y-8">
            
            {/* The Problem */}
            <motion.section 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 sm:p-8"
            >
              <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mb-4">
                <Target className="w-6 h-6 text-danger" />
                The Problem
              </h2>
              <p className="text-textSecondary leading-relaxed">
                {project.problem}
              </p>
            </motion.section>

            {/* The Solution */}
            <motion.section 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-6 sm:p-8 border-t-4 border-t-success"
            >
              <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mb-4">
                <Lightbulb className="w-6 h-6 text-success" />
                Proposed Solution
              </h2>
              <p className="text-textSecondary leading-relaxed">
                {project.solution}
              </p>
            </motion.section>
            
            {/* Existing Solutions */}
            <motion.section 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-6 sm:p-8"
            >
              <h2 className="flex items-center gap-3 text-xl font-bold text-foreground mb-4">
                <ExternalLink className="w-5 h-5 text-warning" />
                Existing Solutions in Market
              </h2>
              <p className="text-textSecondary italic">
                {project.existingSolutions}
              </p>
            </motion.section>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-8">
            
            {/* Tech Stack */}
            <motion.section 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6"
            >
              <h2 className="flex items-center gap-2 text-lg font-bold text-foreground mb-5">
                <Code2 className="w-5 h-5 text-primary" />
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-textSecondary text-sm rounded-lg font-medium border border-borderGlass">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* Key Features */}
            <motion.section 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-6"
            >
              <h2 className="flex items-center gap-2 text-lg font-bold text-foreground mb-5">
                <Zap className="w-5 h-5 text-secondary" />
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-textSecondary text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
            
            {/* Get Help CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-6 text-center"
            >
              <PlayCircle className="w-8 h-8 text-danger mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">Need Guidance?</h3>
              <p className="text-xs text-textSecondary mb-4">Watch tutorials to understand the concepts used in this project.</p>
              <a 
                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(project.title + ' tutorial')}`} 
                target="_blank" 
                rel="noreferrer"
                className="block w-full py-2 bg-foreground text-background font-bold rounded-xl hover:opacity-90 transition-opacity text-sm"
              >
                Search on YouTube
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
