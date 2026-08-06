import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Clock, User, Mail, GraduationCap, Building, Calendar, Hash, School, CheckCheck } from 'lucide-react';
import { collection, query, where, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

function UserAvatar({ photo, name, size = 'w-14 h-14' }) {
  const initials = name
    ? name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    : '?';
  
  const colors = ['bg-primary', 'bg-secondary', 'bg-accent', 'bg-success', 'bg-warning'];
  const colorIdx = name ? name.charCodeAt(0) % colors.length : 0;

  return (
    <div className={`${size} rounded-full overflow-hidden shrink-0 ring-2 ring-borderGlass`}>
      {photo ? (
        <img src={photo} alt={name} className="w-full h-full object-cover" />
      ) : (
        <div className={`w-full h-full ${colors[colorIdx]} flex items-center justify-center text-white font-bold text-sm`}>
          {initials}
        </div>
      )}
    </div>
  );
}

export default function PendingRequests() {
  const [requests, setRequests] = useState([]);
  const [actionLoading, setActionLoading] = useState({});

  useEffect(() => {
    const q = query(
      collection(db, 'users'),
      where('status', '==', 'pending'),
      where('isAdmin', '==', false)
    );

    const unsub = onSnapshot(q, (snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      // Sort newest first
      data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setRequests(data);
    });

    return () => unsub();
  }, []);

  const handleAction = async (userId, action) => {
    setActionLoading(prev => ({ ...prev, [userId]: action }));
    try {
      await updateDoc(doc(db, 'users', userId), {
        status: action,
        [`${action}At`]: new Date().toISOString(),
      });
    } catch (err) {
      console.error(`Failed to ${action} user:`, err);
    }
    setActionLoading(prev => ({ ...prev, [userId]: null }));
  };

  const handleApproveAll = async () => {
    if (!confirm(`Approve all ${requests.length} pending requests?`)) return;
    
    for (const req of requests) {
      await handleAction(req.id, 'approved');
    }
  };

  if (requests.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-16"
      >
        <div className="w-20 h-20 mx-auto bg-success/10 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="w-10 h-10 text-success" />
        </div>
        <h3 className="text-xl font-bold text-[color:var(--foreground)] mb-2">All Caught Up!</h3>
        <p className="text-textSecondary">No pending registration requests.</p>
      </motion.div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Bulk Actions */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-textSecondary">
          <span className="font-bold text-warning">{requests.length}</span> pending request{requests.length !== 1 ? 's' : ''}
        </p>
        <button
          onClick={handleApproveAll}
          className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-success/10 text-success border border-success/20 rounded-xl hover:bg-success/20 transition-all"
        >
          <CheckCheck className="w-4 h-4" />
          Approve All
        </button>
      </div>

      {/* Cards */}
      <AnimatePresence>
        {requests.map((user, idx) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -300, height: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="glass-card p-4 sm:p-6"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Avatar + Info */}
              <div className="flex items-start gap-4 flex-1">
                <UserAvatar photo={user.profilePhoto} name={user.name} />
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-[color:var(--foreground)] truncate">{user.name}</h3>
                  
                  <div className="flex items-center gap-1.5 text-sm text-textSecondary mt-1">
                    <Mail className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{user.email}</span>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 mt-3 text-xs">
                    {user.collegeName && (
                      <div className="flex items-center gap-1.5 text-textSecondary">
                        <School className="w-3.5 h-3.5 shrink-0 text-primary" />
                        <span className="truncate">{user.collegeName}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1.5 text-textSecondary">
                      <GraduationCap className="w-3.5 h-3.5 shrink-0 text-secondary" />
                      <span>{user.degree}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-textSecondary">
                      <Building className="w-3.5 h-3.5 shrink-0 text-accent" />
                      <span>{user.branch}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-textSecondary">
                      <Calendar className="w-3.5 h-3.5 shrink-0 text-warning" />
                      <span>{user.year}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-textSecondary">
                      <Hash className="w-3.5 h-3.5 shrink-0 text-success" />
                      <span>{user.pin}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-textSecondary">
                      <Clock className="w-3.5 h-3.5 shrink-0" />
                      <span>{new Date(user.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex sm:flex-col gap-2 sm:justify-center">
                <button
                  onClick={() => handleAction(user.id, 'approved')}
                  disabled={!!actionLoading[user.id]}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold bg-success text-white rounded-xl hover:bg-success/90 transition-all disabled:opacity-50 shadow-sm"
                >
                  {actionLoading[user.id] === 'approved' ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <CheckCircle2 className="w-4 h-4" />
                  )}
                  <span>Approve</span>
                </button>
                <button
                  onClick={() => handleAction(user.id, 'rejected')}
                  disabled={!!actionLoading[user.id]}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold bg-danger/10 text-danger border border-danger/20 rounded-xl hover:bg-danger/20 transition-all disabled:opacity-50"
                >
                  {actionLoading[user.id] === 'rejected' ? (
                    <div className="w-4 h-4 border-2 border-danger/30 border-t-danger rounded-full animate-spin" />
                  ) : (
                    <XCircle className="w-4 h-4" />
                  )}
                  <span>Reject</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
