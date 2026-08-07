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

// Register Service Worker for System / Mobile OS Push Notifications
let swRegistration = null;

if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/firebase-messaging-sw.js')
    .then((reg) => {
      swRegistration = reg;
      console.log('Push Service Worker registered successfully:', reg.scope);
    })
    .catch((err) => {
      console.warn('Push Service Worker registration failed:', err);
    });
}

/**
 * Publish a new Announcement to Firestore and trigger native OS push notifications
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

  // 2. Trigger native OS system push notification
  triggerNativePushNotification(`📢 ${title.trim()}`, message.trim(), link.trim());

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
 * Request Browser / Mobile OS Push Notification Permission
 */
export async function requestNotificationPermission() {
  if (!('Notification' in window)) {
    console.log("This device/browser does not support notifications.");
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
 * Trigger native System OS push notification pop-up (Windows, Android, macOS)
 */
export function triggerNativePushNotification(title, body, url = '/') {
  if (typeof window === 'undefined' || !('Notification' in window)) return;

  if (Notification.permission === 'granted') {
    const options = {
      body: body,
      icon: '/favicon.svg',
      badge: '/favicon.svg',
      tag: 'vs-academy-announcement-' + Date.now(),
      renotify: true,
      data: { url: url || '/' },
      vibrate: [200, 100, 200]
    };

    // Priority 1: Service Worker System OS Banner (Windows Action Center & Mobile Bar)
    if (swRegistration && 'showNotification' in swRegistration) {
      swRegistration.showNotification(title, options).catch((e) => {
        console.warn("SW showNotification failed, using fallback:", e);
        fallbackNotification(title, options);
      });
    } else if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((reg) => {
        reg.showNotification(title, options);
      }).catch(() => {
        fallbackNotification(title, options);
      });
    } else {
      fallbackNotification(title, options);
    }
  }
}

function fallbackNotification(title, options) {
  try {
    const n = new Notification(title, options);
    n.onclick = () => {
      window.focus();
      if (options.data?.url) {
        window.location.href = options.data.url;
      }
    };
  } catch (e) {
    console.warn("Desktop notification fallback error:", e);
  }
}
