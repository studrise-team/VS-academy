import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, BookOpen, ArrowLeft } from 'lucide-react';
import { auth, db } from '../lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function PendingApproval() {
  const [status, setStatus] = useState('pending');
  const navigate = useNavigate();

  // Poll Firestore every 30 seconds to check if admin approved
  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;

    const checkStatus = async () => {
      try {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          if (data.status === 'approved') {
            setStatus('approved');
            setTimeout(() => navigate('/login'), 2000);
          } else if (data.status === 'rejected') {
            setStatus('rejected');
          }
        }
      } catch (err) {
        console.error('Error checking status:', err);
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 30000);
    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="min-h-[90vh] flex items-center justify-center py-8 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full text-center"
      >
        <div className="glass-card p-8 sm:p-12 space-y-6">
          {status === 'pending' && (
            <>
              {/* Animated clock */}
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-warning/10 text-warning mx-auto"
              >
                <Clock className="w-10 h-10" />
              </motion.div>

              <div>
                <h2 className="text-2xl font-bold text-[color:var(--foreground)] mb-2">
                  Registration Under Review
                </h2>
                <p className="text-textSecondary leading-relaxed">
                  Your account has been created successfully! The admin will review and approve your registration shortly.
                </p>
              </div>

              {/* Pulse indicator */}
              <div className="flex items-center justify-center gap-2 text-sm text-textSecondary">
                <div className="w-2 h-2 rounded-full bg-warning animate-pulse" />
                <span>Waiting for admin approval...</span>
              </div>
            </>
          )}

          {status === 'approved' && (
            <>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-success/10 text-success mx-auto"
              >
                <CheckCircle2 className="w-10 h-10" />
              </motion.div>

              <div>
                <h2 className="text-2xl font-bold text-success mb-2">Approved!</h2>
                <p className="text-textSecondary">
                  Your account has been approved. Redirecting to login...
                </p>
              </div>
            </>
          )}

          {status === 'rejected' && (
            <>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-danger/10 text-danger mx-auto">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-danger mb-2">Registration Rejected</h2>
                <p className="text-textSecondary">
                  Unfortunately your registration was not approved. Please contact the administrator for more information.
                </p>
              </div>
            </>
          )}

          <div className="pt-4 border-t border-borderGlass">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Login
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
