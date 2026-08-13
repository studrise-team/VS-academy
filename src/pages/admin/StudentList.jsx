import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Download, ChevronDown, ChevronUp, Mail, GraduationCap, Building, Calendar, Hash, School, Clock, BarChart3, User } from 'lucide-react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../lib/firebase';

function UserAvatar({ photo, name, size = 'w-10 h-10' }) {
  const initials = name
    ? name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    : '?';
  const colors = ['bg-primary', 'bg-secondary', 'bg-accent', 'bg-success', 'bg-warning'];
  const colorIdx = name ? name.charCodeAt(0) % colors.length : 0;

  return (
    <div className={`${size} rounded-full overflow-hidden shrink-0`}>
      {photo ? (
        <img src={photo} alt={name} className="w-full h-full object-cover" />
      ) : (
        <div className={`w-full h-full ${colors[colorIdx]} flex items-center justify-center text-white font-bold text-xs`}>
          {initials}
        </div>
      )}
    </div>
  );
}

export default function StudentList({ statusFilter = 'approved' }) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBranch, setFilterBranch] = useState('');
  const [filterYear, setFilterYear] = useState('');
  const [filterCollege, setFilterCollege] = useState('');
  const [expandedId, setExpandedId] = useState(null);
  const [studentProgress, setStudentProgress] = useState({});

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      try {
        const baseConstraints = [where('isAdmin', '==', false)];
        if (statusFilter !== 'all') {
          baseConstraints.push(where('status', '==', statusFilter));
        }
        const q = query(collection(db, 'users'), ...baseConstraints);
        const snapshot = await getDocs(q);
        const data = [];
        snapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setStudents(data);
      } catch (err) {
        console.error('Failed to fetch students:', err);
      }
      setLoading(false);
    };

    fetchStudents();
  }, [statusFilter]);

  const fetchProgress = async (userId) => {
    if (studentProgress[userId]) return;
    try {
      const progressSnapshot = await getDocs(
        query(collection(db, 'users', userId, 'progress'), where('isCompleted', '==', true))
      );
      const counts = {};
      progressSnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.subjectId) {
          counts[data.subjectId] = (counts[data.subjectId] || 0) + 1;
        }
      });
      setStudentProgress(prev => ({ ...prev, [userId]: counts }));
    } catch (err) {
      console.error('Failed to fetch progress:', err);
    }
  };

  const toggleExpand = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
      fetchProgress(id);
    }
  };

  // Get unique values for filters
  const branches = [...new Set(students.map(s => s.branch).filter(Boolean))];
  const years = [...new Set(students.map(s => s.year).filter(Boolean))];
  const colleges = [...new Set(students.map(s => s.collegeName).filter(Boolean))];

  // Filter students
  const filtered = students.filter(s => {
    const matchesSearch = !searchTerm || 
      s.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.pin?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBranch = !filterBranch || s.branch === filterBranch;
    const matchesYear = !filterYear || s.year === filterYear;
    const matchesCollege = !filterCollege || s.collegeName === filterCollege;
    return matchesSearch && matchesBranch && matchesYear && matchesCollege;
  });

  // Export CSV
  const exportCSV = () => {
    const headers = ['Name', 'Email', 'College', 'Degree', 'Branch', 'Year', 'Pin', 'Joined'];
    const rows = filtered.map(s => [
      s.name, s.email, s.collegeName, s.degree, s.branch, s.year, s.pin,
      new Date(s.createdAt).toLocaleDateString()
    ]);
    const csv = [headers, ...rows].map(r => r.map(c => `"${c || ''}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `students_${statusFilter}_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const subjects = [
    { id: 'html', name: 'HTML', total: 12 },
    { id: 'css', name: 'CSS', total: 15 },
    { id: 'java', name: 'Java', total: 28 },
    { id: 'mysql', name: 'MySQL', total: 16 },
    { id: 'linux', name: 'Linux', total: 10 },
    { id: 'github', name: 'Git & GitHub', total: 89 },
    { id: 'ai', name: 'AI', total: 8 },
  ];

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="glass-card p-6 animate-pulse">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-300 dark:bg-slate-700" />
              <div className="flex-1">
                <div className="h-4 w-1/3 bg-slate-300 dark:bg-slate-700 rounded mb-2" />
                <div className="h-3 w-1/2 bg-slate-200 dark:bg-slate-800 rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (students.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 mx-auto bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
          <User className="w-10 h-10 text-textSecondary" />
        </div>
        <h3 className="text-xl font-bold text-[color:var(--foreground)] mb-2">
          No {statusFilter} students
        </h3>
        <p className="text-textSecondary">
          {statusFilter === 'approved' ? 'No students have been approved yet.' : 'No rejected registrations.'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Search + Filters Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-textSecondary" />
          <input
            type="text"
            placeholder="Search by name, email, or pin..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-borderGlass bg-[color:var(--background)] text-[color:var(--foreground)] placeholder-textSecondary text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto">
          <select
            value={filterBranch}
            onChange={(e) => setFilterBranch(e.target.value)}
            className="px-3 py-2.5 rounded-xl border border-borderGlass bg-[color:var(--background)] text-[color:var(--foreground)] text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none min-w-[100px]"
          >
            <option value="">All Branches</option>
            {branches.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
          <select
            value={filterYear}
            onChange={(e) => setFilterYear(e.target.value)}
            className="px-3 py-2.5 rounded-xl border border-borderGlass bg-[color:var(--background)] text-[color:var(--foreground)] text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none min-w-[100px]"
          >
            <option value="">All Years</option>
            {years.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
          {colleges.length > 1 && (
            <select
              value={filterCollege}
              onChange={(e) => setFilterCollege(e.target.value)}
              className="px-3 py-2.5 rounded-xl border border-borderGlass bg-[color:var(--background)] text-[color:var(--foreground)] text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none min-w-[100px]"
            >
              <option value="">All Colleges</option>
              {colleges.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          )}
        </div>

        {/* Export */}
        {statusFilter === 'approved' && (
          <button
            onClick={exportCSV}
            className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium bg-primary/10 text-primary border border-primary/20 rounded-xl hover:bg-primary/20 transition-all whitespace-nowrap"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export CSV</span>
          </button>
        )}
      </div>

      {/* Results Count */}
      <p className="text-sm text-textSecondary">
        Showing <span className="font-bold text-foreground">{filtered.length}</span> of {students.length} students
      </p>

      {/* Student Cards */}
      <div className="space-y-3">
        {filtered.map((student, idx) => (
          <motion.div
            key={student.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.03 }}
            className="glass-card overflow-hidden"
          >
            {/* Main Row */}
            <button
              onClick={() => toggleExpand(student.id)}
              className="w-full flex items-center gap-3 sm:gap-4 p-4 sm:p-5 text-left hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
            >
              <UserAvatar photo={student.profilePhoto} name={student.name} />
              
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-[color:var(--foreground)] truncate">{student.name}</p>
                <p className="text-xs text-textSecondary truncate">{student.email}</p>
              </div>

              <div className="hidden sm:flex items-center gap-3 text-xs text-textSecondary">
                <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800">{student.branch}</span>
                <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800">{student.year}</span>
                <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800">{student.degree}</span>
              </div>

              {expandedId === student.id ? (
                <ChevronUp className="w-5 h-5 text-textSecondary shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-textSecondary shrink-0" />
              )}
            </button>

            {/* Expanded Details */}
            <AnimatePresence>
              {expandedId === student.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-2 border-t border-borderGlass">
                    {/* Detail Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4 text-sm">
                      {student.collegeName && (
                        <div className="flex items-center gap-2 text-textSecondary">
                          <School className="w-4 h-4 text-primary" />
                          <span>{student.collegeName}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-textSecondary">
                        <Hash className="w-4 h-4 text-success" />
                        <span>{student.pin}</span>
                      </div>
                      <div className="flex items-center gap-2 text-textSecondary">
                        <Clock className="w-4 h-4 text-warning" />
                        <span>Joined {new Date(student.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>

                    {/* Progress Bars */}
                    {statusFilter === 'approved' && (
                      <div>
                        <h4 className="text-sm font-semibold text-[color:var(--foreground)] mb-3 flex items-center gap-2">
                          <BarChart3 className="w-4 h-4 text-primary" />
                          Course Progress
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {subjects.map(sub => {
                            const completed = studentProgress[student.id]?.[sub.id] || 0;
                            const pct = Math.round((completed / sub.total) * 100);
                            return (
                              <div key={sub.id} className="flex items-center gap-3">
                                <span className="text-xs text-textSecondary w-20 truncate">{sub.name}</span>
                                <div className="flex-1 h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                                  <div
                                    className="h-full bg-primary rounded-full transition-all duration-700"
                                    style={{ width: `${pct}%` }}
                                  />
                                </div>
                                <span className="text-xs font-medium text-textSecondary w-8 text-right">{pct}%</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
