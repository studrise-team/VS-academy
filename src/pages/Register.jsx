import { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { uploadProfilePhoto } from '../lib/cloudinary';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, User, Mail, Lock, Hash, GraduationCap, Building, Calendar, 
  Camera, ChevronRight, ChevronLeft, School, Eye, EyeOff, Check, Shield,
  AlertCircle
} from 'lucide-react';

const DEGREES = ['B.Tech', 'M.Tech', 'MCA', 'MBA', 'Diploma', 'B.Sc', 'M.Sc', 'BCA'];
const YEARS = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
const BRANCHES = ['CSE', 'ECE', 'EEE', 'MECH', 'CIVIL', 'IT', 'AI&DS', 'CS&BS', 'CSM', 'CSD'];

const STEPS = [
  { title: 'Personal', icon: User, description: 'Your identity' },
  { title: 'Academic', icon: GraduationCap, description: 'College details' },
  { title: 'Security', icon: Shield, description: 'Set credentials' },
];

function PasswordStrength({ password }) {
  const getStrength = (pwd) => {
    let score = 0;
    if (pwd.length >= 6) score++;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    return score;
  };

  const strength = getStrength(password);
  const labels = ['', 'Weak', 'Fair', 'Good', 'Strong', 'Excellent'];
  const colors = ['', 'bg-danger', 'bg-warning', 'bg-yellow-400', 'bg-success', 'bg-emerald-500'];

  if (!password) return null;

  return (
    <div className="mt-2 space-y-1.5">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map(i => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
              i <= strength ? colors[strength] : 'bg-slate-200 dark:bg-slate-700'
            }`}
          />
        ))}
      </div>
      <p className={`text-xs font-medium ${strength <= 2 ? 'text-danger' : 'text-success'}`}>
        {labels[strength]}
      </p>
    </div>
  );
}

export default function Register() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    collegeName: '',
    degree: '',
    year: '',
    branch: '',
    pin: '',
    email: '',
    password: '',
    confirmPassword: '',
    profilePhoto: '',
  });
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);

  const fileInputRef = useRef(null);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handlePhotoSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setError('Photo must be under 5MB');
      return;
    }

    setPhotoFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => setPhotoPreview(ev.target.result);
    reader.readAsDataURL(file);
    setError('');
  };

  const validateStep = () => {
    switch (step) {
      case 0:
        if (!formData.name.trim()) return 'Please enter your full name';
        if (formData.name.trim().length < 2) return 'Name must be at least 2 characters';
        return null;
      case 1:
        if (!formData.collegeName.trim()) return 'Please enter your college name';
        if (!formData.degree) return 'Please select your degree';
        if (!formData.year) return 'Please select your year';
        if (!formData.branch) return 'Please select your branch';
        if (!formData.pin.trim()) return 'Please enter your pin/roll number';
        return null;
      case 2:
        if (!formData.email.trim()) return 'Please enter your email';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Please enter a valid email';
        if (formData.password.length < 6) return 'Password must be at least 6 characters';
        if (formData.password !== formData.confirmPassword) return 'Passwords do not match';
        return null;
      default:
        return null;
    }
  };

  const nextStep = () => {
    const validationError = validateStep();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError('');
    setStep(s => Math.min(s + 1, STEPS.length - 1));
  };

  const prevStep = () => {
    setError('');
    setStep(s => Math.max(s - 1, 0));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateStep();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setError('');
      setLoading(true);

      // Upload photo to Cloudinary if selected
      let photoUrl = '';
      if (photoFile) {
        setUploadingPhoto(true);
        try {
          const result = await uploadProfilePhoto(photoFile);
          photoUrl = result.url;
        } catch (uploadErr) {
          console.error('Photo upload failed:', uploadErr);
          // Continue registration without photo
        }
        setUploadingPhoto(false);
      }

      await register(formData.email, formData.password, {
        ...formData,
        profilePhoto: photoUrl,
      });

      navigate('/pending');
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError('An account with this email already exists.');
      } else {
        setError('Registration failed: ' + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-lg w-full">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mb-8"
        >
          <div className="flex items-center space-x-2 text-primary mb-3">
            <BookOpen className="w-10 h-10" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[color:var(--foreground)] text-center">
            Join VS-Academy
          </h2>
          <p className="text-textSecondary text-sm mt-2">Create your student account</p>
        </motion.div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center mb-8 px-4">
          {STEPS.map((s, i) => (
            <div key={i} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`
                  w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500
                  ${i < step ? 'bg-success text-white scale-90' : 
                    i === step ? 'bg-primary text-white ring-4 ring-primary/20 scale-110' : 
                    'bg-slate-200 dark:bg-slate-700 text-textSecondary'}
                `}>
                  {i < step ? <Check className="w-5 h-5" /> : <s.icon className="w-5 h-5" />}
                </div>
                <span className={`text-xs mt-1.5 font-medium hidden sm:block ${
                  i === step ? 'text-primary' : 'text-textSecondary'
                }`}>{s.title}</span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`w-12 sm:w-20 h-0.5 mx-1 sm:mx-2 transition-all duration-500 ${
                  i < step ? 'bg-success' : 'bg-slate-200 dark:bg-slate-700'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6 sm:p-8 overflow-hidden"
        >
          {/* Error */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-danger/10 border border-danger/30 text-danger px-4 py-3 rounded-xl text-sm mb-6 flex items-start gap-2"
              >
                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{error}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait" custom={step}>
              {/* Step 1: Personal Info */}
              {step === 0 && (
                <motion.div
                  key="step-0"
                  custom={1}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-lg font-bold text-[color:var(--foreground)] mb-1">Personal Information</h3>
                    <p className="text-textSecondary text-sm">Tell us about yourself</p>
                  </div>

                  {/* Profile Photo Upload */}
                  <div className="flex flex-col items-center gap-3">
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="relative cursor-pointer group"
                    >
                      <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 transition-all duration-300 ${
                        photoPreview ? 'border-success/50' : 'border-borderGlass border-dashed hover:border-primary/50'
                      }`}>
                        {photoPreview ? (
                          <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                            <User className="w-10 h-10 text-textSecondary" />
                          </div>
                        )}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                        <Camera className="w-4 h-4" />
                      </div>
                    </div>
                    <span className="text-xs text-textSecondary">
                      {photoPreview ? 'Tap to change photo' : 'Add profile photo (optional)'}
                    </span>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      onChange={handlePhotoSelect}
                      className="hidden"
                    />
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-[color:var(--foreground)] mb-1.5">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-textSecondary" />
                      <input
                        name="name"
                        type="text"
                        required
                        className="w-full rounded-xl px-3 py-3 pl-10 border border-borderGlass bg-[color:var(--background)] text-[color:var(--foreground)] placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Academic Info */}
              {step === 1 && (
                <motion.div
                  key="step-1"
                  custom={1}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="space-y-5"
                >
                  <div>
                    <h3 className="text-lg font-bold text-[color:var(--foreground)] mb-1">Academic Details</h3>
                    <p className="text-textSecondary text-sm">Your college information</p>
                  </div>

                  {/* College Name */}
                  <div>
                    <label className="block text-sm font-medium text-[color:var(--foreground)] mb-1.5">College Name</label>
                    <div className="relative">
                      <School className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-textSecondary" />
                      <input
                        name="collegeName"
                        type="text"
                        required
                        className="w-full rounded-xl px-3 py-3 pl-10 border border-borderGlass bg-[color:var(--background)] text-[color:var(--foreground)] placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                        placeholder="e.g., VS-Academy Engineering College"
                        value={formData.collegeName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Degree + Year */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[color:var(--foreground)] mb-1.5">Degree</label>
                      <div className="relative">
                        <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-textSecondary" />
                        <select
                          name="degree"
                          required
                          className="w-full rounded-xl px-3 py-3 pl-10 border border-borderGlass bg-[color:var(--background)] text-[color:var(--foreground)] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm appearance-none"
                          value={formData.degree}
                          onChange={handleChange}
                        >
                          <option value="" disabled>Select degree</option>
                          {DEGREES.map(d => <option key={d} value={d}>{d}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[color:var(--foreground)] mb-1.5">Year</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-textSecondary" />
                        <select
                          name="year"
                          required
                          className="w-full rounded-xl px-3 py-3 pl-10 border border-borderGlass bg-[color:var(--background)] text-[color:var(--foreground)] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm appearance-none"
                          value={formData.year}
                          onChange={handleChange}
                        >
                          <option value="" disabled>Select year</option>
                          {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Branch + Pin */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[color:var(--foreground)] mb-1.5">Branch</label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-textSecondary" />
                        <select
                          name="branch"
                          required
                          className="w-full rounded-xl px-3 py-3 pl-10 border border-borderGlass bg-[color:var(--background)] text-[color:var(--foreground)] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm appearance-none"
                          value={formData.branch}
                          onChange={handleChange}
                        >
                          <option value="" disabled>Select branch</option>
                          {BRANCHES.map(b => <option key={b} value={b}>{b}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[color:var(--foreground)] mb-1.5">Pin / Roll No.</label>
                      <div className="relative">
                        <Hash className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-textSecondary" />
                        <input
                          name="pin"
                          type="text"
                          required
                          className="w-full rounded-xl px-3 py-3 pl-10 border border-borderGlass bg-[color:var(--background)] text-[color:var(--foreground)] placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                          placeholder="e.g., 22A51A0501"
                          value={formData.pin}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Credentials */}
              {step === 2 && (
                <motion.div
                  key="step-2"
                  custom={1}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="space-y-5"
                >
                  <div>
                    <h3 className="text-lg font-bold text-[color:var(--foreground)] mb-1">Set Your Credentials</h3>
                    <p className="text-textSecondary text-sm">Secure your account</p>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-[color:var(--foreground)] mb-1.5">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-textSecondary" />
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-xl px-3 py-3 pl-10 border border-borderGlass bg-[color:var(--background)] text-[color:var(--foreground)] placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
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
                        className="w-full rounded-xl px-3 py-3 pl-10 pr-10 border border-borderGlass bg-[color:var(--background)] text-[color:var(--foreground)] placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                        placeholder="Min 6 characters"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-textSecondary hover:text-foreground transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    <PasswordStrength password={formData.password} />
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-sm font-medium text-[color:var(--foreground)] mb-1.5">Confirm Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-textSecondary" />
                      <input
                        name="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        required
                        className={`w-full rounded-xl px-3 py-3 pl-10 pr-10 border bg-[color:var(--background)] text-[color:var(--foreground)] placeholder-textSecondary focus:outline-none focus:ring-2 transition-all text-sm ${
                          formData.confirmPassword && formData.password !== formData.confirmPassword
                            ? 'border-danger focus:ring-danger/50 focus:border-danger'
                            : formData.confirmPassword && formData.password === formData.confirmPassword
                            ? 'border-success focus:ring-success/50 focus:border-success'
                            : 'border-borderGlass focus:ring-primary/50 focus:border-primary'
                        }`}
                        placeholder="Re-enter your password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-textSecondary hover:text-foreground transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {formData.confirmPassword && formData.password === formData.confirmPassword && (
                      <p className="text-xs text-success mt-1.5 flex items-center gap-1">
                        <Check className="w-3 h-3" /> Passwords match
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-borderGlass">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-textSecondary hover:text-foreground transition-colors rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
              ) : (
                <div />
              )}

              {step < STEPS.length - 1 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center gap-1.5 px-6 py-2.5 text-sm font-semibold bg-primary text-white rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30"
                >
                  Continue <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 px-6 py-2.5 text-sm font-semibold bg-primary text-white rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {uploadingPhoto ? 'Uploading photo...' : 'Creating account...'}
                    </>
                  ) : (
                    <>Register <ChevronRight className="w-4 h-4" /></>
                  )}
                </button>
              )}
            </div>
          </form>

          {/* Login link */}
          <div className="text-center text-sm text-textSecondary mt-6 pt-4 border-t border-borderGlass">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-primary hover:text-primary/80 transition-colors">
              Sign in
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
