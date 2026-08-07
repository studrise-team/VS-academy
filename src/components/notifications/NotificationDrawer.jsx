import { useState, useEffect, useRef } from 'react';
import { 
  subscribeToAnnouncements, 
  requestNotificationPermission, 
  triggerNativePushNotification 
} from '../../lib/notificationService';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell, 
  X, 
  Megaphone, 
  Info, 
  AlertTriangle, 
  CheckCircle2, 
  ExternalLink,
  Volume2
} from 'lucide-react';

export function NotificationDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [announcements, setAnnouncements] = useState([]);
  const [readIds, setReadIds] = useState(() => {
    try {
      const saved = localStorage.getItem('vs_read_announcements');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [permissionState, setPermissionState] = useState(() => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      return Notification.permission;
    }
    return 'default';
  });

  const prevAnnouncementsRef = useRef([]);

  // Subscribe to real-time announcements
  useEffect(() => {
    const unsubscribe = subscribeToAnnouncements((newList) => {
      // Check if there's a brand new announcement created just now
      if (prevAnnouncementsRef.current.length > 0 && newList.length > prevAnnouncementsRef.current.length) {
        const newest = newList[0];
        if (newest && !readIds.includes(newest.id)) {
          triggerNativePushNotification(
            `📢 Announcement: ${newest.title}`,
            newest.message
          );
        }
      }
      prevAnnouncementsRef.current = newList;
      setAnnouncements(newList);
    });

    return unsubscribe;
  }, [readIds]);

  // Save read IDs to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('vs_read_announcements', JSON.stringify(readIds));
    } catch (e) {
      console.warn("Could not save read announcements:", e);
    }
  }, [readIds]);

  const unreadCount = announcements.filter(a => !readIds.includes(a.id)).length;

  const markAllAsRead = () => {
    const allIds = announcements.map(a => a.id);
    setReadIds(allIds);
  };

  const handleToggleRead = (id) => {
    if (readIds.includes(id)) {
      setReadIds(prev => prev.filter(i => i !== id));
    } else {
      setReadIds(prev => [...prev, id]);
    }
  };

  const handleEnablePush = async () => {
    const granted = await requestNotificationPermission();
    if (granted) {
      setPermissionState('granted');
      triggerNativePushNotification('Notifications Enabled!', 'You will now receive real-time admin announcements.');
    } else {
      setPermissionState('denied');
    }
  };

  const getTypeBadge = (type) => {
    switch (type) {
      case 'important':
        return { label: 'IMPORTANT', color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20', icon: AlertTriangle };
      case 'alert':
        return { label: 'ALERT', color: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20', icon: AlertTriangle };
      case 'update':
        return { label: 'UPDATE', color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20', icon: CheckCircle2 };
      default:
        return { label: 'INFO', color: 'bg-primary/10 text-primary border-primary/20', icon: Info };
    }
  };

  const formatTimestamp = (ts) => {
    if (!ts) return 'Just now';
    const date = ts.toDate ? ts.toDate() : new Date(ts);
    const now = new Date();
    const diffMin = Math.floor((now - date) / (1000 * 60));

    if (diffMin < 1) return 'Just now';
    if (diffMin < 60) return `${diffMin}m ago`;
    const diffHours = Math.floor(diffMin / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
  };

  return (
    <div className="relative">
      {/* Bell Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-xl text-foreground hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center"
        title="Announcements & Notifications"
        aria-label="Announcements & Notifications"
      >
        <Bell className="w-5 h-5 text-foreground" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-primary text-white text-[9px] font-bold items-center justify-center">
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          </span>
        )}
      </button>

      {/* Notification Dropdown Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for click outside */}
            <div
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[1px]"
            />

            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="absolute right-0 top-12 z-50 w-[340px] sm:w-[380px] bg-card border border-borderGlass rounded-2xl shadow-2xl overflow-hidden glass"
            >
              {/* Drawer Header */}
              <div className="p-3.5 px-4 bg-slate-50 dark:bg-slate-900 border-b border-borderGlass flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Megaphone className="w-4 h-4 text-primary" />
                  <h3 className="font-bold text-sm text-foreground">Announcements</h3>
                  {unreadCount > 0 && (
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-primary text-white rounded-full">
                      {unreadCount} new
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllAsRead}
                      className="text-[11px] text-primary hover:underline font-medium"
                    >
                      Mark all read
                    </button>
                  )}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded-lg text-textSecondary hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Push Permission Prompt Banner */}
              {permissionState !== 'granted' && (
                <div className="p-3 bg-primary/10 border-b border-primary/20 flex items-center justify-between gap-2">
                  <div className="flex items-center space-x-2 min-w-0">
                    <Volume2 className="w-4 h-4 text-primary shrink-0" />
                    <p className="text-[11px] text-foreground font-medium truncate">
                      Get real-time push alerts on desktop
                    </p>
                  </div>
                  <button
                    onClick={handleEnablePush}
                    className="px-2.5 py-1 text-[10px] font-bold bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shrink-0 shadow-sm"
                  >
                    Enable
                  </button>
                </div>
              )}

              {/* Announcement List */}
              <div className="max-h-[380px] overflow-y-auto divide-y divide-borderGlass/50">
                {announcements.length === 0 ? (
                  <div className="p-8 text-center text-textSecondary flex flex-col items-center">
                    <Megaphone className="w-8 h-8 text-primary/40 mb-2" />
                    <p className="text-xs font-medium text-foreground">No announcements yet</p>
                    <p className="text-[11px] mt-0.5">Admin notices will appear here in real-time.</p>
                  </div>
                ) : (
                  announcements.map((item) => {
                    const isRead = readIds.includes(item.id);
                    const badge = getTypeBadge(item.type);
                    const IconComp = badge.icon;

                    return (
                      <div
                        key={item.id}
                        onClick={() => handleToggleRead(item.id)}
                        className={`p-3.5 transition-colors cursor-pointer relative ${
                          isRead 
                            ? 'bg-transparent opacity-75' 
                            : 'bg-primary/5 hover:bg-primary/10 font-medium'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-[9px] font-bold rounded-full border ${badge.color}`}>
                            <IconComp className="w-3 h-3" />
                            {badge.label}
                          </span>
                          <span className="text-[10px] text-textSecondary shrink-0">
                            {formatTimestamp(item.createdAt)}
                          </span>
                        </div>

                        <h4 className="text-xs font-bold text-foreground leading-snug">
                          {item.title}
                        </h4>

                        <p className="text-[11px] text-textSecondary mt-1 leading-relaxed whitespace-pre-wrap">
                          {item.message}
                        </p>

                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-[11px] text-primary hover:underline font-semibold mt-2"
                          >
                            <span>View details</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}

                        {!isRead && (
                          <span className="absolute top-4 right-3.5 w-2 h-2 bg-primary rounded-full"></span>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
