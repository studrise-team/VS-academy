import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';
import { BookOpen, Mail, Lock, Eye, EyeOff, AlertCircle, Clock, XCircle } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [errorType, setErrorType] = useState(''); // 'pending' | 'rejected' | 'generic'
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setErrorType('');
      setLoading(true);
      const { userData } = await login(email, password);
      
      if (userData?.isAdmin) {
        navigate('/admin');
      } else {
        navigate('/subjects');
      }
    } catch (err) {
      if (err.code === 'auth/pending-approval') {
        setErrorType('pending');
        setError(err.message);
      } else if (err.code === 'auth/rejected') {
        setErrorType('rejected');
        setError(err.message);
      } else if (err.code === 'auth/invalid-credential' || err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found') {
        setErrorType('generic');
        setError('Invalid email or password. Please try again.');
      } else {
        setErrorType('generic');
        setError('Login failed. Please check your credentials.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl text-primary mb-4"
          >
            <BookOpen className="w-8 h-8" />
          </motion.div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[color:var(--foreground)]">
            Welcome back
          </h2>
          <p className="text-textSecondary text-sm mt-2">Sign in to continue learning</p>
        </div>

        {/* Card */}
        <div className="glass-card p-6 sm:p-8">
          {/* Error Messages */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`px-4 py-3 rounded-xl text-sm mb-6 flex items-start gap-3 ${
                errorType === 'pending'
                  ? 'bg-warning/10 border border-warning/30 text-warning'
                  : errorType === 'rejected'
                  ? 'bg-danger/10 border border-danger/30 text-danger'
                  : 'bg-danger/10 border border-danger/30 text-danger'
              }`}
            >
              {errorType === 'pending' ? (
                <Clock className="w-5 h-5 mt-0.5 shrink-0" />
              ) : (
                <XCircle className="w-5 h-5 mt-0.5 shrink-0" />
              )}
              <div>
                <p className="font-medium">{error}</p>
                {errorType === 'pending' && (
                  <p className="text-xs mt-1 opacity-80">Your registration is being reviewed by the admin. You'll receive access soon.</p>
                )}
                {errorType === 'rejected' && (
                  <p className="text-xs mt-1 opacity-80">Please contact the administrator for more information.</p>
                )}
              </div>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[color:var(--foreground)] mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-textSecondary" />
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl px-3 py-3 pl-10 border border-borderGlass bg-[color:var(--background)] text-[color:var(--foreground)] placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(''); }}
                />
              </div>
            </div>
            
            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-[color:var(--foreground)] mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-textSecondary" />
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete="current-password"
                  className="w-full rounded-xl px-3 py-3 pl-10 pr-10 border border-borderGlass bg-[color:var(--background)] text-[color:var(--foreground)] placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(''); }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-textSecondary hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold rounded-xl text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing in...
                </>
              ) : 'Sign in'}
            </button>
          </form>

          {/* Register link */}
          <div className="text-center text-sm text-textSecondary mt-6 pt-4 border-t border-borderGlass">
            Don't have an account?{' '}
            <Link to="/register" className="font-semibold text-primary hover:text-primary/80 transition-colors">
              Register now
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
