import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, BookOpen } from 'lucide-react';

export function SplashScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar smoothly over ~4.5 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            if (onComplete) onComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[99999] bg-[#0B0F19] flex flex-col items-center justify-center p-6 select-none overflow-hidden"
        >
          {/* Ambient Radial Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-purple-600/15 to-teal-500/20 blur-3xl opacity-60 animate-pulse"></div>

          {/* Floating background particles */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-indigo-500/20 to-teal-400/20 blur-3xl pointer-events-none"
          />

          {/* Logo Container with Animations */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-sm">
            {/* Animated Sparkle Badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
              className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-teal-300 shadow-lg"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Welcome to VS-Academy</span>
            </motion.div>

            {/* 3D Brand Logo */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: 'spring', damping: 20, stiffness: 200 }}
              className="relative w-44 h-44 sm:w-52 sm:h-52 mb-6 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/10 bg-slate-900/60 p-2 group"
            >
              <img
                src="/logo.png"
                alt="VS Academy Logo"
                className="w-full h-full object-contain filter drop-shadow-xl transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>
            </motion.div>

            {/* Brand Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="space-y-1.5"
            >
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center justify-center gap-2">
                <span className="bg-gradient-to-r from-purple-400 via-teal-300 to-indigo-300 bg-clip-text text-transparent">
                  VS ACADEMY
                </span>
              </h1>

              {/* Tagline */}
              <p className="text-xs sm:text-sm font-bold tracking-widest text-slate-300 uppercase flex items-center justify-center gap-2 pt-1">
                <span className="text-purple-400">LEARN</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span className="text-teal-300">GROW</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span className="text-rose-400">SUCCEED</span>
              </p>
            </motion.div>

            {/* Progress Bar Container */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '100%' }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-8 w-full max-w-[240px] space-y-2"
            >
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden p-0.5 border border-white/10 shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 via-teal-400 to-indigo-500 rounded-full shadow-lg"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>
              <p className="text-[11px] text-slate-400 font-medium tracking-wide">
                Loading academy modules... {progress}%
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
