import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
dotenv.config();

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function checkUsers() {
  const snapshot = await getDocs(collection(db, 'users'));
  snapshot.forEach(doc => {
    const data = doc.data();
    console.log(`User: ${data.name} (${data.email})`);
    console.log(` - Admin: ${data.isAdmin}`);
    console.log(` - Photo: ${data.profilePhoto || 'NONE'}`);
  });
  process.exit(0);
}

checkUsers();
