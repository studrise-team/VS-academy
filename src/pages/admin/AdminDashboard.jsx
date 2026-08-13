import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Clock, CheckCircle2, XCircle, BarChart3, Shield } from 'lucide-react';
import { collection, query, where, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import PendingRequests from './PendingRequests';
import StudentList from './StudentList';

function StatCard({ icon: Icon, label, value, color, bg, delay = 0, to }) {
  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={`glass-card p-5 sm:p-6 ${to ? 'hover:scale-[1.02] transition-transform cursor-pointer' : ''}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-textSecondary text-sm font-medium">{label}</p>
          <motion.p
            key={value}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`text-3xl font-bold mt-1 ${color}`}
          >
            {value}
          </motion.p>
        </div>
        <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${color}`} />
        </div>
      </div>
    </motion.div>
  );

  if (to) {
    return <Link to={to} className="block">{CardContent}</Link>;
  }
  return CardContent;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('pending');
  const [stats, setStats] = useState({ total: 0, pending: 0, approved: 0, rejected: 0 });

  useEffect(() => {
    // Real-time listener on users collection
    const q = query(collection(db, 'users'), where('isAdmin', '==', false));
    const unsub = onSnapshot(q, (snapshot) => {
      let pending = 0, approved = 0, rejected = 0;
      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.status === 'pending') pending++;
        else if (data.status === 'approved') approved++;
        else if (data.status === 'rejected') rejected++;
      });
      setStats({ total: snapshot.size, pending, approved, rejected });
    }, (err) => console.error('Stats listener error:', err));

    return () => unsub();
  }, []);

  return (
    <div className="py-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 mb-8"
      >
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Shield className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-textSecondary text-sm">Manage student registrations and data</p>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <StatCard icon={Users} label="Total Students" value={stats.total} color="text-primary" bg="bg-primary/10" delay={0} to="/admin/students" />
        <StatCard icon={Clock} label="Pending" value={stats.pending} color="text-warning" bg="bg-warning/10" delay={0.1} to="/admin/pending" />
        <StatCard icon={CheckCircle2} label="Approved" value={stats.approved} color="text-success" bg="bg-success/10" delay={0.2} to="/admin/students" />
        <StatCard icon={XCircle} label="Rejected" value={stats.rejected} color="text-danger" bg="bg-danger/10" delay={0.3} to="/admin/students" />
      </div>
      
      {/* Optional: Add a recent activity feed or charts here later */}
    </div>
  );
}
