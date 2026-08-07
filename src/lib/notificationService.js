import { db } from './firebase';
import { 
  collection, 
  addDoc, 
  deleteDoc, 
  doc, 
  query, 
  orderBy, 
  onSnapshot, 
  serverTimestamp 
} from 'firebase/firestore';

/**
 * Publish a new Announcement to Firestore and trigger native browser notifications
 */
export async function createAnnouncement({ title, message, type = 'info', link = '', adminUser }) {
  if (!title || !message) return;

  const announcementsRef = collection(db, 'announcements');
  
  // 1. Write announcement document to Firestore
  const docRef = await addDoc(announcementsRef, {
    title: title.trim(),
    message: message.trim(),
    type: type, // 'info', 'important', 'alert', 'update'
    link: link.trim(),
    createdBy: adminUser?.uid || 'admin',
    authorName: adminUser?.name || 'Academy Admin',
    createdAt: serverTimestamp()
  });

  // 2. Trigger native browser push notification if permitted
  triggerNativePushNotification(title.trim(), message.trim());

  return docRef.id;
}

/**
 * Delete an announcement from Firestore
 */
export async function deleteAnnouncement(announcementId) {
  if (!announcementId) return;
  try {
    await deleteDoc(doc(db, 'announcements', announcementId));
  } catch (err) {
    console.error("Error deleting announcement:", err);
  }
}

/**
 * Real-time listener for all announcements (sorted newest first)
 */
export function subscribeToAnnouncements(callback) {
  const q = query(
    collection(db, 'announcements'),
    orderBy('createdAt', 'desc')
  );

  return onSnapshot(q, (snapshot) => {
    const announcements = snapshot.docs.map(docSnap => ({
      id: docSnap.id,
      ...docSnap.data()
    }));
    
    callback(announcements);
  }, (error) => {
    console.error("Error subscribing to announcements:", error);
  });
}

/**
 * Request Browser Push Notification Permission
 */
export async function requestNotificationPermission() {
  if (!('Notification' in window)) {
    console.log("This browser does not support desktop notifications.");
    return false;
  }

  if (Notification.permission === 'granted') {
    return true;
  }

  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }

  return false;
}

/**
 * Trigger native browser push notification pop-up on student device
 */
export function triggerNativePushNotification(title, body) {
  if (!('Notification' in window)) return;

  if (Notification.permission === 'granted') {
    try {
      new Notification(title, {
        body: body,
        icon: '/favicon.ico',
        tag: 'vs-academy-announcement'
      });
    } catch (e) {
      console.warn("Could not fire native notification:", e);
    }
  }
}
