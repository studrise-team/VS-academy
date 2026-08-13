import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { Mail, GraduationCap, Building, Calendar, Hash, School, User, Camera, Edit2, Loader2, Save, X } from 'lucide-react';
import { uploadProfilePhoto } from '../lib/cloudinary';

const DEGREES = ['B.Tech', 'M.Tech', 'MCA', 'MBA', 'Diploma', 'B.Sc', 'M.Sc', 'BCA'];
const YEARS = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
const BRANCHES = ['CSE', 'ECE', 'EEE', 'MECH', 'CIVIL', 'IT', 'AI&DS', 'CS&BS', 'CSM', 'CSD'];

export default function Profile() {
  const { currentUser, updateUserData } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    collegeName: '',
    degree: '',
    year: '',
    branch: '',
    pin: '',
  });
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [error, setError] = useState('');
  
  const fileInputRef = useRef(null);

  if (!currentUser) return null;

  const initials = currentUser.name
    ? currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    : 'U';

  const handleEditClick = () => {
    setFormData({
      name: currentUser.name || '',
      collegeName: currentUser.collegeName || '',
      degree: currentUser.degree || '',
      year: currentUser.year || '',
      branch: currentUser.branch || '',
      pin: currentUser.pin || '',
    });
    setPhotoFile(null);
    setPhotoPreview(null);
    setError('');
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setPhotoFile(null);
    setPhotoPreview(null);
    setError('');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  const handleSave = async () => {
    if (!formData.name.trim()) {
      setError('Name is required');
      return;
    }

    setSaving(true);
    setError('');

    try {
      let photoUrl = currentUser.profilePhoto || '';
      
      if (photoFile) {
        const result = await uploadProfilePhoto(photoFile);
        photoUrl = result.url;
      }

      await updateUserData(currentUser.uid, {
        ...formData,
        profilePhoto: photoUrl
      });
      
      setIsEditing(false);
    } catch (err) {
      setError('Failed to update profile. Please try again.');
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const InfoRow = ({ icon: Icon, label, value }) => (
    <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-borderGlass">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm text-textSecondary">{label}</p>
        <p className="font-semibold text-[color:var(--foreground)] truncate">
          {value || 'Not provided'}
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-[80vh] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 text-center relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />
          
          {!isEditing && (
            <button 
              onClick={handleEditClick}
              className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg text-sm font-medium hover:bg-white dark:hover:bg-slate-700 transition-colors shadow-sm"
            >
              <Edit2 className="w-4 h-4" />
              <span className="hidden sm:inline">Edit Profile</span>
            </button>
          )}

          <div className="relative z-10 flex flex-col items-center mt-8">
            <div className="relative mb-4 group">
              <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-card shadow-xl bg-primary/10">
                {photoPreview ? (
                  <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                ) : currentUser.profilePhoto ? (
                  <img src={currentUser.profilePhoto} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-primary">
                    {initials}
                  </div>
                )}
              </div>
              
              {isEditing && (
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute inset-0 flex items-center justify-center bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Camera className="w-8 h-8" />
                </button>
              )}
            </div>
            
            <input 
              type="file" 
              ref={fileInputRef}
              onChange={handlePhotoSelect}
              accept="image/jpeg,image/png,image/webp"
              className="hidden"
            />
            
            {isEditing ? (
              <div className="w-full max-w-sm space-y-3">
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-800 border border-borderGlass rounded-xl text-center font-bold text-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                {error && <p className="text-danger text-sm text-center">{error}</p>}
              </div>
            ) : (
              <>
                <h1 className="text-3xl font-extrabold text-[color:var(--foreground)] mb-1">
                  {currentUser.name}
                </h1>
                <div className="flex items-center gap-2 text-textSecondary bg-slate-100 dark:bg-slate-800 px-4 py-1.5 rounded-full">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-medium">{currentUser.email}</span>
                </div>
              </>
            )}
          </div>
        </motion.div>

        {/* Academic Details Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6 sm:p-8"
        >
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            Academic Information
          </h2>
          
          {isEditing ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-medium text-textSecondary ml-1">College Name</label>
                <input type="text" name="collegeName" value={formData.collegeName} onChange={handleChange} className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-borderGlass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-textSecondary ml-1">Degree</label>
                <select name="degree" value={formData.degree} onChange={handleChange} className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-borderGlass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option value="">Select Degree</option>
                  {DEGREES.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-textSecondary ml-1">Branch</label>
                <select name="branch" value={formData.branch} onChange={handleChange} className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-borderGlass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option value="">Select Branch</option>
                  {BRANCHES.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-textSecondary ml-1">Year of Study</label>
                <select name="year" value={formData.year} onChange={handleChange} className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-borderGlass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option value="">Select Year</option>
                  {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-textSecondary ml-1">PIN / Roll Number</label>
                <input type="text" name="pin" value={formData.pin} onChange={handleChange} className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-borderGlass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoRow icon={School} label="College Name" value={currentUser.collegeName} />
              <InfoRow icon={GraduationCap} label="Degree" value={currentUser.degree} />
              <InfoRow icon={Building} label="Branch" value={currentUser.branch} />
              <InfoRow icon={Calendar} label="Year of Study" value={currentUser.year} />
              <InfoRow icon={Hash} label="PIN / Roll Number" value={currentUser.pin} />
            </div>
          )}
        </motion.div>

        {/* Account Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 sm:p-8"
        >
           <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <User className="w-6 h-6 text-primary" />
            Account Status
          </h2>
          <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-borderGlass">
            <div className={`w-3 h-3 rounded-full ${currentUser.status === 'approved' ? 'bg-success' : 'bg-warning'} shadow-[0_0_10px_rgba(0,0,0,0.2)] shadow-${currentUser.status === 'approved' ? 'success' : 'warning'}`} />
            <div>
              <p className="text-sm text-textSecondary">Registration Status</p>
              <p className="font-semibold capitalize text-[color:var(--foreground)]">{currentUser.status || 'Active'}</p>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        {isEditing && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-end gap-3"
          >
            <button
              onClick={handleCancel}
              disabled={saving}
              className="px-6 py-2.5 rounded-xl font-semibold text-textSecondary hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold bg-primary text-white hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 disabled:opacity-50"
            >
              {saving ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  Save Changes
                </>
              )}
            </button>
          </motion.div>
        )}

      </div>
    </div>
  );
}
