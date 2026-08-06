import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function testFirestore() {
  try {
    console.log('Testing Firestore connection...');
    // We try to read a non-existent document just to see if the connection works
    const testDoc = await getDoc(doc(db, 'test', 'test'));
    console.log('✅ Firestore connection successful! Document exists:', testDoc.exists());
    process.exit(0);
  } catch (error) {
    console.error('❌ Firestore connection failed:', error.message);
    process.exit(1);
  }
}

testFirestore();
