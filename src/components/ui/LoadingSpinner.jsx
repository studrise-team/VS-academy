export function LoadingSpinner({ message = 'Loading...' }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-16 h-16 rounded-full border-4 border-primary/20 animate-spin border-t-primary"></div>
        {/* Inner pulse */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-primary/30 animate-pulse"></div>
        </div>
      </div>
      <p className="text-textSecondary text-sm font-medium animate-pulse">{message}</p>
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="glass-card p-6 animate-pulse">
      <div className="w-12 h-12 rounded-xl bg-slate-300 dark:bg-slate-700 mb-4"></div>
      <div className="h-5 w-2/3 rounded bg-slate-300 dark:bg-slate-700 mb-3"></div>
      <div className="h-3 w-1/2 rounded bg-slate-200 dark:bg-slate-800 mb-6"></div>
      <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800"></div>
    </div>
  );
}

export function SkeletonLine({ width = 'w-full', height = 'h-4' }) {
  return (
    <div className={`${width} ${height} rounded bg-slate-300 dark:bg-slate-700 animate-pulse`}></div>
  );
}

export function SkeletonAvatar({ size = 'w-12 h-12' }) {
  return (
    <div className={`${size} rounded-full bg-slate-300 dark:bg-slate-700 animate-pulse`}></div>
  );
}
