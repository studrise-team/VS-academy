import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Code2, GraduationCap, Zap, Cpu } from 'lucide-react';

export function SplashScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar smoothly over ~3.5 seconds total
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + 2, 100);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            if (onComplete) onComplete();
          }, 600);
          return 100;
        }
        return next;
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[99999] bg-[#0B0F19] flex flex-col items-center justify-center p-6 select-none overflow-hidden"
        >
          {/* Ambient Glowing Orbs */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.15, 1],
            }}
            transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
            className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-purple-600/20 via-indigo-500/15 to-teal-400/20 blur-3xl pointer-events-none"
          />

          {/* Floating Tech Icons in Background */}
          <motion.div
            animate={{ y: [-8, 8, -8], rotate: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="absolute top-20 left-12 sm:left-24 text-purple-400/30 p-3 rounded-2xl border border-purple-500/20 bg-purple-950/20 backdrop-blur-md"
          >
            <Code2 className="w-6 h-6" />
          </motion.div>

          <motion.div
            animate={{ y: [8, -8, 8], rotate: [5, -5, 5] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
            className="absolute bottom-24 right-12 sm:right-24 text-teal-400/30 p-3 rounded-2xl border border-teal-500/20 bg-teal-950/20 backdrop-blur-md"
          >
            <GraduationCap className="w-6 h-6" />
          </motion.div>

          <motion.div
            animate={{ y: [-10, 10, -10], scale: [0.9, 1.1, 0.9] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="absolute top-32 right-16 sm:right-32 text-amber-400/30 p-2.5 rounded-2xl border border-amber-500/20 bg-amber-950/20 backdrop-blur-md"
          >
            <Zap className="w-5 h-5" />
          </motion.div>

          {/* Main Logo & Content Container */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-sm">
            {/* Animated Welcome Badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: 0.15, type: 'spring', stiffness: 300 }}
              className="mb-4 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-teal-300 shadow-xl"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '5s' }} />
              <span>Welcome to VS-Academy</span>
            </motion.div>

            {/* 3D Brand Logo with Floating Motion & Shimmer Beam */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 25 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: 0.25, type: 'spring', damping: 18, stiffness: 220 }}
              className="relative w-44 h-44 sm:w-52 sm:h-52 mb-5 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/15 bg-slate-900/70 p-2 group"
            >
              {/* Floating Animation wrapper */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                className="w-full h-full relative"
              >
                <img
                  src="/logo.png"
                  alt="VS Academy Logo"
                  className="w-full h-full object-contain filter drop-shadow-2xl"
                />

                {/* Shimmer Light Beam Effect */}
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{ repeat: Infinity, duration: 2.2, delay: 0.8, ease: 'easeInOut' }}
                  className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 pointer-events-none"
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none"></div>
            </motion.div>

            {/* Brand Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="space-y-2"
            >
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white flex items-center justify-center gap-2">
                <span className="bg-gradient-to-r from-purple-400 via-teal-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-sm">
                  VS ACADEMY
                </span>
              </h1>

              {/* Staggered Tagline Badges */}
              <div className="flex items-center justify-center gap-2 pt-1">
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="px-2.5 py-0.5 text-[11px] font-bold tracking-widest text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full"
                >
                  LEARN
                </motion.span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.65, type: 'spring' }}
                  className="px-2.5 py-0.5 text-[11px] font-bold tracking-widest text-teal-300 bg-teal-500/10 border border-teal-500/20 rounded-full"
                >
                  GROW
                </motion.span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, type: 'spring' }}
                  className="px-2.5 py-0.5 text-[11px] font-bold tracking-widest text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded-full"
                >
                  SUCCEED
                </motion.span>
              </div>
            </motion.div>

            {/* Glowing Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-6 w-full max-w-[240px] space-y-2"
            >
              <div className="h-2.5 w-full bg-slate-800/80 rounded-full overflow-hidden p-0.5 border border-white/20 shadow-inner relative">
                <div
                  style={{ width: `${Math.min(Math.max(progress, 2), 100)}%` }}
                  className="h-full bg-gradient-to-r from-purple-500 via-teal-400 to-indigo-400 rounded-full shadow-[0_0_12px_rgba(45,212,191,0.7)] transition-all duration-150 ease-out"
                />
              </div>
              <p className="text-[11px] text-slate-300 font-medium tracking-wide">
                {progress >= 100 ? 'Ready! Launching VS-Academy...' : `Initializing platform... ${progress}%`}
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
