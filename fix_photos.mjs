import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, updateDoc, doc } from 'firebase/firestore';
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

async function fixUsers() {
  const dummyPhoto = "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_fill,g_face,q_auto,f_auto/v1312461204/sample.jpg";
  
  const snapshot = await getDocs(collection(db, 'users'));
  for (const userDoc of snapshot.docs) {
    const data = userDoc.data();
    if (!data.profilePhoto) {
      console.log(`Fixing user: ${data.name} (${data.email})`);
      await updateDoc(doc(db, 'users', userDoc.id), {
        profilePhoto: dummyPhoto
      });
    }
  }
  console.log("Done fixing users.");
  process.exit(0);
}

fixUsers();
