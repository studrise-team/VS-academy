import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  createAnnouncement, 
  deleteAnnouncement, 
  subscribeToAnnouncements 
} from '../../lib/notificationService';
import { 
  Megaphone, 
  Send, 
  Trash2, 
  Info, 
  AlertTriangle, 
  CheckCircle2, 
  ExternalLink, 
  Loader2, 
  Sparkles,
  Users,
  Bell
} from 'lucide-react';

export default function AdminAnnouncements() {
  const { currentUser } = useAuth();
  const [announcements, setAnnouncements] = useState([]);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [type, setType] = useState('info');
  const [link, setLink] = useState('');
  const [publishing, setPublishing] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(true);

  // Real-time listener for all announcements
  useEffect(() => {
    const unsubscribe = subscribeToAnnouncements((newList) => {
      setAnnouncements(newList);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const handlePublish = async (e) => {
    e.preventDefault();
    if (!title.trim() || !message.trim() || publishing) return;

    setPublishing(true);
    setSuccessMsg('');

    try {
      await createAnnouncement({
        title,
        message,
        type,
        link,
        adminUser: currentUser
      });

      // Clear form
      setTitle('');
      setMessage('');
      setLink('');
      setType('info');

      setSuccessMsg('Announcement published & real-time push notifications sent to students!');
      setTimeout(() => setSuccessMsg(''), 4000);
    } catch (err) {
      console.error("Failed to publish announcement:", err);
    } finally {
      setPublishing(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this announcement?")) {
      await deleteAnnouncement(id);
    }
  };

  const getTypeBadge = (type) => {
    switch (type) {
      case 'important':
        return { label: 'IMPORTANT', color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20' };
      case 'alert':
        return { label: 'ALERT', color: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20' };
      case 'update':
        return { label: 'UPDATE', color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' };
      default:
        return { label: 'INFO', color: 'bg-primary/10 text-primary border-primary/20' };
    }
  };

  const formatTimestamp = (ts) => {
    if (!ts) return 'Just now';
    const date = ts.toDate ? ts.toDate() : new Date(ts);
    return date.toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-2.5">
            <Megaphone className="w-7 h-7 text-primary" />
            Announcement Broadcast Center
          </h1>
          <p className="text-xs sm:text-sm text-textSecondary mt-1">
            Publish official announcements and send real-time push notifications to all academy students.
          </p>
        </div>
      </div>

      {/* Success Banner */}
      {successMsg && (
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-semibold flex items-center gap-2 animate-bounce">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Grid: Composition Form + Broadcast History */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Composer Form */}
        <div className="lg:col-span-5 bg-card border border-borderGlass rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col">
          <h2 className="text-base font-bold text-foreground flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            Compose Announcement
          </h2>

          <form onSubmit={handlePublish} className="space-y-4 flex-1 flex flex-col">
            {/* Title */}
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">
                Announcement Title <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. New Java Advanced Course Released!"
                className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-100 dark:bg-slate-800 border border-borderGlass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
              />
            </div>

            {/* Category / Type */}
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">
                Category Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'info', label: 'Info' },
                  { id: 'important', label: 'Important' },
                  { id: 'update', label: 'Update' },
                  { id: 'alert', label: 'Alert' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setType(item.id)}
                    className={`py-2 px-2 text-xs font-semibold rounded-xl border transition-all ${
                      type === item.id
                        ? 'bg-primary text-white border-primary shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 border-borderGlass text-textSecondary hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Message Body */}
            <div className="flex-1">
              <label className="block text-xs font-semibold text-foreground mb-1">
                Message Content <span className="text-danger">*</span>
              </label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write full announcement details for students..."
                className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-100 dark:bg-slate-800 border border-borderGlass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground resize-none"
              />
            </div>

            {/* Optional Link */}
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">
                Action Link (Optional)
              </label>
              <input
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="e.g. /subjects/java or https://..."
                className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-100 dark:bg-slate-800 border border-borderGlass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
              />
            </div>

            {/* Publish Button */}
            <button
              type="submit"
              disabled={!title.trim() || !message.trim() || publishing}
              className="w-full py-3 bg-primary text-white text-xs sm:text-sm font-bold rounded-xl hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-md"
            >
              {publishing ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Broadcast Announcement</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Column: Published Announcements History */}
        <div className="lg:col-span-7 bg-card border border-borderGlass rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-foreground flex items-center gap-2">
              <Bell className="w-5 h-5 text-primary" />
              Published Announcements ({announcements.length})
            </h2>
          </div>

          <div className="flex-1 overflow-y-auto space-y-3 max-h-[550px] pr-1">
            {loading ? (
              <div className="p-12 text-center text-textSecondary flex flex-col items-center justify-center">
                <Loader2 className="w-6 h-6 animate-spin text-primary mb-2" />
                <span className="text-xs">Loading announcements...</span>
              </div>
            ) : announcements.length === 0 ? (
              <div className="p-12 text-center text-textSecondary flex flex-col items-center justify-center border border-dashed border-borderGlass rounded-xl">
                <Megaphone className="w-8 h-8 text-primary/30 mb-2" />
                <p className="text-sm font-medium text-foreground">No announcements posted yet</p>
                <p className="text-xs text-textSecondary mt-1">Use the form on the left to broadcast your first announcement.</p>
              </div>
            ) : (
              announcements.map((item) => {
                const badge = getTypeBadge(item.type);
                return (
                  <div
                    key={item.id}
                    className="p-4 bg-slate-50/50 dark:bg-slate-900/40 border border-borderGlass rounded-xl hover:border-primary/30 transition-all flex items-start justify-between gap-3 group"
                  >
                    <div className="flex-1 min-w-0 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-0.5 text-[9px] font-bold rounded-full border ${badge.color}`}>
                          {badge.label}
                        </span>
                        <span className="text-[11px] text-textSecondary">
                          {formatTimestamp(item.createdAt)}
                        </span>
                      </div>

                      <h3 className="font-bold text-sm text-foreground">
                        {item.title}
                      </h3>

                      <p className="text-xs text-textSecondary whitespace-pre-wrap leading-relaxed">
                        {item.message}
                      </p>

                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-primary hover:underline font-semibold"
                        >
                          <span>{item.link}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-2 text-textSecondary hover:text-danger hover:bg-danger/10 rounded-lg transition-colors shrink-0"
                      title="Delete announcement"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
