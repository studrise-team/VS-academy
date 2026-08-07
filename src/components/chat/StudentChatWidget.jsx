import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { 
  sendMessage, 
  subscribeToStudentMessages, 
  markAsReadByStudent 
} from '../../lib/chatService';
import { db } from '../../lib/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Shield, User, Loader2, LogIn } from 'lucide-react';

export function StudentChatWidget() {
  const { currentUser, isAdmin } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [sending, setSending] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const messagesEndRef = useRef(null);

  // Listen to custom window toggle event from Navbar or elsewhere
  useEffect(() => {
    const handleToggle = () => setIsOpen(prev => !prev);
    window.addEventListener('toggle-student-chat', handleToggle);
    return () => window.removeEventListener('toggle-student-chat', handleToggle);
  }, []);

  // Hide widget for Admin
  if (isAdmin) return null;

  // Listen to unread status from parent chat document
  useEffect(() => {
    if (!currentUser?.uid) return;

    const chatDocRef = doc(db, 'chats', currentUser.uid);
    const unsubscribe = onSnapshot(chatDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setHasUnread(!!data.unreadByStudent);
      }
    }, (err) => {
      console.warn("Unread listener error:", err);
    });

    return unsubscribe;
  }, [currentUser?.uid]);

  // Subscribe to real-time messages when widget is open or logged in
  useEffect(() => {
    if (!currentUser?.uid) return;

    const unsubscribe = subscribeToStudentMessages(currentUser.uid, (msgs) => {
      setMessages(msgs);
    });

    return unsubscribe;
  }, [currentUser?.uid]);

  // Auto-scroll to bottom when messages update or widget opens
  useEffect(() => {
    if (isOpen && currentUser) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      // Mark messages as read when widget is opened
      if (hasUnread) {
        markAsReadByStudent(currentUser.uid);
      }
    }
  }, [messages, isOpen, hasUnread, currentUser?.uid]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputText.trim() || sending || !currentUser) return;

    const textToSend = inputText;
    setInputText('');
    setSending(true);

    try {
      await sendMessage({
        studentUid: currentUser.uid,
        studentInfo: currentUser,
        senderUser: currentUser,
        text: textToSend,
        isSenderAdmin: false
      });
    } catch (error) {
      console.error("Failed to send message:", error);
      setInputText(textToSend);
    } finally {
      setSending(false);
    }
  };

  const formatTime = (createdAt) => {
    if (!createdAt) return '';
    const date = createdAt.toDate ? createdAt.toDate() : new Date(createdAt);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="pointer-events-auto mb-4 w-[340px] sm:w-[385px] h-[490px] max-h-[80vh] bg-card border border-borderGlass rounded-2xl shadow-2xl flex flex-col overflow-hidden glass"
          >
            {/* Header */}
            <div className="px-4 py-3.5 bg-primary text-white flex items-center justify-between shadow-sm">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center font-bold text-white relative">
                  <Shield className="w-5 h-5 text-white" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-primary rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm leading-tight">Admin Support</h3>
                  <p className="text-xs text-white/80 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span> Direct message with Admin
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/20 transition-colors text-white"
                title="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content area */}
            {!currentUser ? (
              /* Guest User Login Required Screen */
              <div className="flex-1 p-6 flex flex-col items-center justify-center text-center bg-slate-50/50 dark:bg-slate-900/40">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 ring-8 ring-primary/5">
                  <MessageSquare className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-bold text-foreground text-base">Chat with Academy Admin</h4>
                <p className="text-xs text-textSecondary mt-2 leading-relaxed max-w-xs">
                  Have questions about courses, projects, or registration? Log in to your student account to send direct messages to the admin.
                </p>
                <div className="mt-6 flex flex-col w-full gap-2">
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-2.5 bg-primary text-white text-xs font-semibold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Login to Chat</span>
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-2.5 bg-slate-100 dark:bg-slate-800 text-foreground text-xs font-semibold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-borderGlass"
                  >
                    Create Account
                  </Link>
                </div>
              </div>
            ) : (
              /* Logged In Student Message Stream */
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/50 dark:bg-slate-900/40">
                  {messages.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center text-textSecondary px-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <MessageSquare className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-medium text-foreground text-sm">Need help or have questions?</h4>
                      <p className="text-xs mt-1 leading-relaxed">
                        Send a message directly to the academy admin. Only you and the admin can see this chat.
                      </p>
                    </div>
                  ) : (
                    messages.map((msg) => {
                      const isMe = msg.senderId === currentUser.uid;
                      return (
                        <div
                          key={msg.id}
                          className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
                        >
                          <div className="flex items-end gap-1.5 max-w-[82%]">
                            {!isMe && (
                              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mb-1">
                                <Shield className="w-3.5 h-3.5 text-primary" />
                              </div>
                            )}
                            <div
                              className={`px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed shadow-sm ${
                                isMe
                                  ? 'bg-primary text-white rounded-br-none'
                                  : 'bg-card text-foreground border border-borderGlass rounded-bl-none'
                              }`}
                            >
                              {!isMe && (
                                <span className="block font-bold text-[10px] text-primary mb-0.5">Admin</span>
                              )}
                              <p className="whitespace-pre-wrap break-words">{msg.text}</p>
                              <span
                                className={`block text-[9px] mt-1 text-right ${
                                  isMe ? 'text-white/70' : 'text-textSecondary'
                                }`}
                              >
                                {formatTime(msg.createdAt)}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Bar */}
                <form onSubmit={handleSend} className="p-3 bg-card border-t border-borderGlass flex items-center gap-2">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type your message to admin..."
                    className="flex-1 px-3.5 py-2 text-xs bg-slate-100 dark:bg-slate-800 border border-borderGlass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-textSecondary"
                  />
                  <button
                    type="submit"
                    disabled={!inputText.trim() || sending}
                    className="p-2.5 bg-primary text-white rounded-xl hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shrink-0"
                  >
                    {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto relative p-3.5 bg-primary text-white rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center group"
        title="Chat with Admin"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-6 h-6" />
        )}

        {/* Unread Badge */}
        {!isOpen && hasUnread && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-danger opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-danger text-white text-[9px] font-bold items-center justify-center">
              !
            </span>
          </span>
        )}
      </button>
    </div>
  );
}
