import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VITE_FIREBASE_DATABASE_URL,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
  measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

async function setupAdmin() {
  const ADMIN_EMAIL = process.env.VITE_ADMIN_EMAIL || 'venkatmallacs@gmail.com';
  const ADMIN_PASS = process.env.VITE_ADMIN_PASSWORD || 'vsacademy@143';
  
  try {
    console.log(`Trying to log in as admin ${ADMIN_EMAIL}...`);
    let credential;
    try {
      credential = await signInWithEmailAndPassword(auth, ADMIN_EMAIL, ADMIN_PASS);
      console.log('Logged in successfully.');
    } catch (err) {
      if (err.code === 'auth/user-not-found' || err.code === 'auth/invalid-credential') {
        console.log('Admin account not found. Creating it now...');
        credential = await createUserWithEmailAndPassword(auth, ADMIN_EMAIL, ADMIN_PASS);
        console.log('Created admin account successfully.');
      } else {
        throw err;
      }
    }
    
    const user = credential.user;

    console.log('Setting admin flags in Firestore...');
    await setDoc(doc(db, 'users', user.uid), {
      name: 'Admin',
      email: ADMIN_EMAIL,
      isAdmin: true,
      status: 'approved',
      degree: 'N/A',
      branch: 'N/A',
      year: 'N/A',
      pin: 'ADMIN',
      collegeName: 'Swarnandhra Academy',
      profilePhoto: '',
      createdAt: new Date().toISOString()
    }, { merge: true });
    
    console.log('✅ Admin setup complete with approved status!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Failed:', error.message);
    process.exit(1);
  }
}

setupAdmin();
