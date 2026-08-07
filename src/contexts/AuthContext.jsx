import { createContext, useContext, useEffect, useState, useRef } from 'react';
import { auth, db } from '../lib/firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc, deleteDoc, updateDoc } from 'firebase/firestore';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const isRegistering = useRef(false);

  async function register(email, password, userData) {
    isRegistering.current = true;
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
    
      // Update auth profile
      await updateProfile(user, {
        displayName: userData.name
      });

      try {
        // Save extra user details to Firestore with pending status
        const saveDocPromise = setDoc(doc(db, 'users', user.uid), {
          name: userData.name,
          email: email,
          collegeName: userData.collegeName || '',
          degree: userData.degree,
          year: userData.year,
          branch: userData.branch,
          pin: userData.pin,
          profilePhoto: userData.profilePhoto || '',
          status: 'pending',       // pending until admin approves
          isAdmin: false,
          createdAt: new Date().toISOString()
        });

        // Firebase WebChannel can hang infinitely on CORS/network errors. Add a 10s timeout.
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Database connection timed out. This is often caused by AdBlockers, Brave Shields, or missing Firestore Database setup. Please disable blockers and try again.')), 10000)
        );

        await Promise.race([saveDocPromise, timeoutPromise]);

        // Sign out immediately — user must wait for admin approval
        await signOut(auth);

        return user;
      } catch (err) {
        // If Firestore fails, delete the auth user so they aren't stuck in a half-registered state
        try {
          await user.delete();
        } catch (deleteErr) {
          console.error('Failed to clean up auth user:', deleteErr);
        }
        throw err;
      }
    } finally {
      isRegistering.current = false;
    }
  }

  async function login(email, password) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Fetch user status from Firestore
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    
    if (userDoc.exists()) {
      const userData = userDoc.data();
      
      if (userData.status === 'pending') {
        await signOut(auth);
        const error = new Error('Your account is pending admin approval. Please wait.');
        error.code = 'auth/pending-approval';
        throw error;
      }

      if (userData.status === 'rejected') {
        await signOut(auth);
        const error = new Error('Your registration was rejected. Please contact the admin.');
        error.code = 'auth/rejected';
        throw error;
      }

      // Approved — set user with all data
      setCurrentUser({ ...user, ...userData });
      return { user, userData };
    } else {
      // No Firestore doc (e.g. admin created via script without user doc? script creates user doc now)
      setCurrentUser(user);
      return { user, userData: null };
    }
  }

  function logout() {
    return signOut(auth);
  }

  async function refreshUser() {
    if (auth.currentUser) {
      const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
      if (userDoc.exists()) {
        setCurrentUser({ ...auth.currentUser, ...userDoc.data() });
      }
    }
  }

  async function updateUserData(uid, data) {
    try {
      const userRef = doc(db, 'users', uid);
      await updateDoc(userRef, data);
      
      // Update local state if this is the current user
      if (currentUser && currentUser.uid === uid) {
        setCurrentUser(prev => ({
          ...prev,
          ...data
        }));
      }
    } catch (error) {
      console.error("Error updating user data:", error);
      throw error;
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth, 
      async (user) => {
        if (isRegistering.current) return;

        if (user) {
          try {
            const userDoc = await getDoc(doc(db, 'users', user.uid));
            if (userDoc.exists()) {
              const userData = userDoc.data();
              // Only set as logged in if approved or admin
              if (userData.status === 'approved' || userData.isAdmin) {
                setCurrentUser({ ...user, ...userData });
              } else {
                // Pending or rejected — sign out silently
                setCurrentUser(null);
              }
            } else {
              setCurrentUser(user);
            }
          } catch (err) {
            console.error('Error fetching user data:', err);
            setCurrentUser(user);
          }
        } else {
          setCurrentUser(null);
        }
        setLoading(false);
      },
      (error) => {
        console.warn('Firebase Auth listener error:', error);
        setCurrentUser(null);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, []);

  const isAdmin = currentUser?.isAdmin === true;

  const value = {
    currentUser,
    isAdmin,
    login,
    register,
    logout,
    refreshUser,
    updateUserData
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
