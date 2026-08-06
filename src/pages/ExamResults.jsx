import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import examData from '../data/exam_results.json';

// Helper to get initials from name
const getInitials = (name) => {
  if (!name) return '?';
  return name.substring(0, 2).toUpperCase();
};

// Array of nice gradient colors for avatars
const avatarColors = [
  'bg-purple-500', 'bg-blue-500', 'bg-pink-500', 'bg-indigo-500', 'bg-violet-500'
];

export function ExamResults() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = useMemo(() => {
    if (!searchTerm) return examData;
    const lowerSearch = searchTerm.toLowerCase();
    return examData.filter(student => {
      const name = student.Username ? String(student.Username).toLowerCase() : '';
      const email = student.Email ? String(student.Email).toLowerCase() : '';
      const mobile = student.Mobile ? String(student.Mobile).toLowerCase() : '';
      return name.includes(lowerSearch) || email.includes(lowerSearch) || mobile.includes(lowerSearch);
    });
  }, [searchTerm]);

  const totalSubmissions = examData.length;
  
  const averageScore = useMemo(() => {
    if (examData.length === 0) return 0;
    const total = examData.reduce((acc, curr) => {
      const score = parseFloat(curr.Score);
      return acc + (isNaN(score) ? 0 : score);
    }, 0);
    return Math.round(total / examData.length);
  }, []);

  const highestScore = useMemo(() => {
    if (examData.length === 0) return 0;
    let max = 0;
    examData.forEach(student => {
      const score = parseFloat(student.Score);
      if (!isNaN(score) && score > max) max = score;
    });
    return max;
  }, []);

  return (
    <div className="min-h-screen bg-[#0f111a] text-slate-300 py-12 px-4 md:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-fuchsia-500 text-transparent bg-clip-text inline-block">
            Exam Results
          </h1>
          <p className="text-slate-400 text-lg">
            Comprehensive overview of student performances and statistics
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1a1d2d] rounded-2xl p-8 text-center border border-slate-800 shadow-[0_0_15px_rgba(168,85,247,0.15)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-5xl font-bold text-fuchsia-400 mb-2 relative z-10">{totalSubmissions}</div>
            <div className="text-slate-400 text-sm tracking-wider uppercase font-semibold relative z-10">Total Submissions</div>
          </div>
          <div className="bg-[#1a1d2d] rounded-2xl p-8 text-center border border-slate-800 shadow-xl relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-5xl font-bold text-purple-400 mb-2 relative z-10">{averageScore}</div>
            <div className="text-slate-400 text-sm tracking-wider uppercase font-semibold relative z-10">Average Score</div>
          </div>
          <div className="bg-[#1a1d2d] rounded-2xl p-8 text-center border border-slate-800 shadow-xl relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-5xl font-bold text-fuchsia-400 mb-2 relative z-10">{highestScore}</div>
            <div className="text-slate-400 text-sm tracking-wider uppercase font-semibold relative z-10">Highest Score</div>
          </div>
        </div>

        {/* Results List Section */}
        <div className="bg-[#161824] border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
          
          {/* Search Bar */}
          <div className="relative max-w-md mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name, email, or mobile..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#1e2132] border border-slate-700 rounded-xl text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
            />
          </div>

          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-slate-800 text-xs font-bold text-slate-500 tracking-wider uppercase px-4">
            <div className="col-span-6 lg:col-span-5">Student</div>
            <div className="col-span-2 lg:col-span-3">Mobile</div>
            <div className="col-span-2 text-center">Correct Ans.</div>
            <div className="col-span-2 text-right">Total Score</div>
          </div>

          {/* List Items */}
          <div className="divide-y divide-slate-800/60 mt-2">
            {filteredData.length > 0 ? (
              filteredData.map((student, index) => {
                const colorClass = avatarColors[index % avatarColors.length];
                return (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-4 py-4 px-4 items-center hover:bg-[#1c1f2e] rounded-xl transition-colors">
                    {/* Student Info */}
                    <div className="col-span-12 md:col-span-6 lg:col-span-5 flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${colorClass} shrink-0`}>
                        {getInitials(student.Username)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold text-slate-200 truncate">{student.Username || 'Unknown'}</div>
                        <div className="text-sm text-slate-500 truncate">{student.Email || 'No email provided'}</div>
                      </div>
                    </div>
                    
                    {/* Mobile - visible only on md+ unless we restyle mobile */}
                    <div className="col-span-6 md:col-span-2 lg:col-span-3 text-slate-300 text-sm hidden md:block truncate">
                      {student.Mobile || 'N/A'}
                    </div>

                    {/* Correct Answers */}
                    <div className="col-span-3 md:col-span-2 text-slate-300 md:text-center text-sm flex items-center md:justify-center">
                      <span className="md:hidden text-slate-500 mr-2 text-xs uppercase">Correct:</span>
                      {student['Correct Answers'] || '0'}
                    </div>

                    {/* Total Score */}
                    <div className="col-span-3 md:col-span-2 text-emerald-400 font-bold md:text-right text-lg flex items-center md:justify-end">
                      <span className="md:hidden text-slate-500 mr-2 text-xs uppercase font-normal">Score:</span>
                      {student.Score || '0'}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 text-slate-500">
                No students found matching your search.
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}
