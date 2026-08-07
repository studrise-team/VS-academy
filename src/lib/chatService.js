import { db } from './firebase';
import { 
  collection, 
  doc, 
  addDoc, 
  setDoc, 
  updateDoc, 
  query, 
  orderBy, 
  onSnapshot, 
  serverTimestamp 
} from 'firebase/firestore';
import { triggerNativePushNotification } from './notificationService';

/**
 * Send a message in a student's chat channel
 */
export async function sendMessage({ studentUid, studentInfo, senderUser, text, isSenderAdmin }) {
  if (!text || !text.trim() || !studentUid) return;

  const trimmedText = text.trim();
  const messagesRef = collection(db, 'chats', studentUid, 'messages');
  
  // 1. Add message document to subcollection
  await addDoc(messagesRef, {
    senderId: senderUser.uid,
    senderName: senderUser.name || senderUser.displayName || (isSenderAdmin ? 'Admin' : 'Student'),
    senderRole: isSenderAdmin ? 'admin' : 'student',
    text: trimmedText,
    createdAt: serverTimestamp()
  });

  // 2. Update or create parent conversation metadata document
  const chatDocRef = doc(db, 'chats', studentUid);
  await setDoc(chatDocRef, {
    studentUid: studentUid,
    studentName: studentInfo?.name || 'Student',
    studentEmail: studentInfo?.email || '',
    studentPhoto: studentInfo?.profilePhoto || '',
    lastMessage: trimmedText,
    lastSenderRole: isSenderAdmin ? 'admin' : 'student',
    lastUpdated: serverTimestamp(),
    ...(isSenderAdmin 
      ? { unreadByStudent: true, unreadByAdmin: false } 
      : { unreadByAdmin: true, unreadByStudent: false }
    )
  }, { merge: true });

  // 3. Trigger immediate OS level Push Notification
  if (isSenderAdmin) {
    // Notify Student
    triggerNativePushNotification(
      '💬 Message from Admin',
      trimmedText,
      '/'
    );
  } else {
    // Notify Admin
    triggerNativePushNotification(
      `💬 New message from ${studentInfo?.name || 'Student'}`,
      trimmedText,
      '/admin/chat'
    );
  }
}

let prevStudentMsgCount = 0;

/**
 * Real-time listener for messages in a specific student chat
 */
export function subscribeToStudentMessages(studentUid, callback) {
  if (!studentUid) return () => {};

  const q = query(
    collection(db, 'chats', studentUid, 'messages'),
    orderBy('createdAt', 'asc')
  );

  return onSnapshot(q, (snapshot) => {
    const messages = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    // Trigger push notification if new message from Admin arrives while listening
    if (prevStudentMsgCount > 0 && messages.length > prevStudentMsgCount) {
      const lastMsg = messages[messages.length - 1];
      if (lastMsg && lastMsg.senderRole === 'admin') {
        triggerNativePushNotification(
          '💬 Message from Admin',
          lastMsg.text,
          '/'
        );
      }
    }
    prevStudentMsgCount = messages.length;

    callback(messages);
  }, (error) => {
    console.error("Error subscribing to student messages:", error);
  });
}

let prevAdminUnreadCount = 0;

/**
 * Real-time listener for all student chats (used by Admin)
 */
export function subscribeToAdminChats(callback) {
  const q = query(
    collection(db, 'chats'),
    orderBy('lastUpdated', 'desc')
  );

  return onSnapshot(q, (snapshot) => {
    const chats = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    const currentUnread = chats.filter(c => c.unreadByAdmin).length;
    // Trigger push notification for Admin when a student sends a new message
    if (currentUnread > prevAdminUnreadCount) {
      const newestUnread = chats.find(c => c.unreadByAdmin);
      if (newestUnread) {
        triggerNativePushNotification(
          `💬 New message from ${newestUnread.studentName || 'Student'}`,
          newestUnread.lastMessage || 'New message received.',
          '/admin/chat'
        );
      }
    }
    prevAdminUnreadCount = currentUnread;

    callback(chats);
  }, (error) => {
    console.error("Error subscribing to admin chats:", error);
  });
}

/**
 * Mark student chat as read by Admin
 */
export async function markAsReadByAdmin(studentUid) {
  if (!studentUid) return;
  try {
    const chatDocRef = doc(db, 'chats', studentUid);
    await updateDoc(chatDocRef, { unreadByAdmin: false });
  } catch (err) {
    console.error("Error marking chat read by admin:", err);
  }
}

/**
 * Mark student chat as read by Student
 */
export async function markAsReadByStudent(studentUid) {
  if (!studentUid) return;
  try {
    const chatDocRef = doc(db, 'chats', studentUid);
    await updateDoc(chatDocRef, { unreadByStudent: false });
  } catch (err) {
    console.error("Error marking chat read by student:", err);
  }
}
