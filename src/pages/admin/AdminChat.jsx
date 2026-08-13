import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { db } from '../../lib/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { 
  subscribeToAdminChats, 
  subscribeToStudentMessages, 
  sendMessage, 
  markAsReadByAdmin 
} from '../../lib/chatService';
import { 
  MessageSquare, 
  Search, 
  Send, 
  User, 
  Shield, 
  Clock, 
  Loader2, 
  CheckCheck,
  GraduationCap,
  Sparkles
} from 'lucide-react';

export default function AdminChat() {
  const { currentUser } = useAuth();
  const [chats, setChats] = useState([]);
  const [allStudents, setAllStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [sending, setSending] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const messagesEndRef = useRef(null);

  // 1. Subscribe to all active chat metadata from Firestore
  useEffect(() => {
    const unsubscribe = subscribeToAdminChats((adminChats) => {
      setChats(adminChats);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // 2. Fetch all approved students from Firestore to allow admin to start chat with any student
  useEffect(() => {
    async function fetchStudents() {
      try {
        const q = query(collection(db, 'users'), where('isAdmin', '==', false));
        const querySnapshot = await getDocs(q);
        const studentsList = [];
        querySnapshot.forEach((docSnap) => {
          studentsList.push({ uid: docSnap.id, ...docSnap.data() });
        });
        setAllStudents(studentsList);
      } catch (err) {
        console.error("Error fetching students:", err);
      }
    }
    fetchStudents();
  }, []);

  // 3. Subscribe to real-time messages for the selected student
  useEffect(() => {
    if (!selectedStudent?.uid) {
      setMessages([]);
      return;
    }

    // Mark as read by admin when student is selected
    markAsReadByAdmin(selectedStudent.uid);

    const unsubscribe = subscribeToStudentMessages(selectedStudent.uid, (msgs) => {
      setMessages(msgs);
    });

    return unsubscribe;
  }, [selectedStudent?.uid]);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Send message from Admin to selected Student
  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputText.trim() || !selectedStudent?.uid || sending) return;

    const textToSend = inputText;
    setInputText('');
    setSending(true);

    try {
      await sendMessage({
        studentUid: selectedStudent.uid,
        studentInfo: selectedStudent,
        senderUser: currentUser,
        text: textToSend,
        isSenderAdmin: true
      });
    } catch (error) {
      console.error("Failed to send admin message:", error);
      setInputText(textToSend);
    } finally {
      setSending(false);
    }
  };

  // Combine active chats with registered students who don't have chat metadata yet
  const chatStudentUids = new Set(chats.map(c => c.studentUid));
  
  // List items combining active chats and other registered students
  const conversationList = [
    // 1. Existing chat threads
    ...chats.map(chat => ({
      uid: chat.studentUid,
      name: chat.studentName || 'Student',
      email: chat.studentEmail || '',
      profilePhoto: chat.studentPhoto || '',
      lastMessage: chat.lastMessage || 'No messages yet',
      lastUpdated: chat.lastUpdated,
      unreadByAdmin: chat.unreadByAdmin || false,
      hasChat: true
    })),
    // 2. Students who haven't started a chat yet
    ...allStudents
      .filter(s => !chatStudentUids.has(s.uid))
      .map(s => ({
        uid: s.uid,
        name: s.name || 'Student',
        email: s.email || '',
        profilePhoto: s.profilePhoto || '',
        lastMessage: 'Start a conversation...',
        lastUpdated: null,
        unreadByAdmin: false,
        hasChat: false,
        branch: s.branch,
        year: s.year
      }))
  ];

  // Filter conversations based on search term
  const filteredConversations = conversationList.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatTimestamp = (ts) => {
    if (!ts) return '';
    const date = ts.toDate ? ts.toDate() : new Date(ts);
    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();

    if (isToday) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
  };

  return (
    <div className="h-[calc(100vh-4.1rem)] flex flex-col p-4 sm:p-6 bg-background">
      {/* Top Header */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-primary" />
            Student Messages
          </h1>
          <p className="text-xs text-textSecondary mt-0.5">
            Real-time direct messaging center with academy students. Each student has a private channel with you.
          </p>
        </div>
      </div>

      {/* Main Split View Container */}
      <div className="flex-1 bg-card border border-borderGlass rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row">
        {/* LEFT PANEL: Student Chat List */}
        <div className={`w-full md:w-80 lg:w-96 border-r border-borderGlass flex flex-col bg-slate-50/50 dark:bg-slate-900/30 ${selectedStudent ? 'hidden md:flex' : 'flex'}`}>
          {/* Search Box */}
          <div className="p-3 border-b border-borderGlass">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-textSecondary" />
              <input
                type="text"
                placeholder="Search student by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs bg-slate-100 dark:bg-slate-800 border border-borderGlass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
              />
            </div>
          </div>

          {/* Conversation List */}
          <div className="flex-1 overflow-y-auto divide-y divide-borderGlass/50">
            {loading ? (
              <div className="p-8 flex flex-col items-center justify-center text-textSecondary">
                <Loader2 className="w-6 h-6 animate-spin text-primary mb-2" />
                <span className="text-xs">Loading conversations...</span>
              </div>
            ) : filteredConversations.length === 0 ? (
              <div className="p-8 text-center text-xs text-textSecondary">
                No students found matching "{searchTerm}"
              </div>
            ) : (
              filteredConversations.map((item) => {
                const isSelected = selectedStudent?.uid === item.uid;
                return (
                  <button
                    key={item.uid}
                    onClick={() => setSelectedStudent(item)}
                    className={`w-full p-3.5 flex items-start space-x-3 text-left transition-all duration-150 ${
                      isSelected
                        ? 'bg-primary/10 border-l-4 border-primary'
                        : 'hover:bg-slate-100/80 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    {/* Student Avatar */}
                    <div className="relative shrink-0">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center ring-2 ring-primary/20">
                        {item.profilePhoto ? (
                          <img src={item.profilePhoto} alt="" className="w-full h-full object-cover" />
                        ) : (
                          <span className="font-bold text-primary text-sm">
                            {item.name ? item.name.charAt(0).toUpperCase() : 'S'}
                          </span>
                        )}
                      </div>
                      {item.unreadByAdmin && (
                        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-danger rounded-full ring-2 ring-card animate-pulse"></span>
                      )}
                    </div>

                    {/* Chat info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className={`text-xs font-semibold truncate ${item.unreadByAdmin ? 'text-foreground font-bold' : 'text-foreground'}`}>
                          {item.name}
                        </h4>
                        {item.lastUpdated && (
                          <span className="text-[10px] text-textSecondary shrink-0 ml-2">
                            {formatTimestamp(item.lastUpdated)}
                          </span>
                        )}
                      </div>

                      <p className="text-[11px] text-textSecondary truncate mt-0.5">
                        {item.email}
                      </p>

                      <div className="flex items-center justify-between mt-1">
                        <p className={`text-[11px] truncate max-w-[190px] ${
                          item.unreadByAdmin ? 'text-primary font-bold' : 'text-textSecondary'
                        }`}>
                          {item.lastMessage}
                        </p>
                        {item.unreadByAdmin && (
                          <span className="px-1.5 py-0.5 bg-danger text-white font-bold text-[9px] rounded-full shrink-0">
                            NEW
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* RIGHT PANEL: Selected Student Chat Room */}
        <div className={`flex-1 flex flex-col bg-card ${!selectedStudent ? 'hidden md:flex' : 'flex'}`}>
          {selectedStudent ? (
            <>
              {/* Active Header */}
              <div className="p-3.5 px-6 border-b border-borderGlass flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setSelectedStudent(null)}
                    className="md:hidden p-1.5 -ml-2 mr-1 rounded-lg text-textSecondary hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    ←
                  </button>
                  <div className="w-9 h-9 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center ring-2 ring-primary/20 shrink-0">
                    {selectedStudent.profilePhoto ? (
                      <img src={selectedStudent.profilePhoto} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <span className="font-bold text-primary text-sm">
                        {selectedStudent.name ? selectedStudent.name.charAt(0).toUpperCase() : 'S'}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-foreground leading-tight flex items-center gap-2">
                      {selectedStudent.name}
                      <span className="px-2 py-0.5 text-[10px] bg-primary/10 text-primary font-semibold rounded-full border border-primary/20">
                        Student
                      </span>
                    </h3>
                    <p className="text-[11px] text-textSecondary">
                      {selectedStudent.email}
                      {selectedStudent.branch && ` • ${selectedStudent.branch}`}
                      {selectedStudent.year && ` (${selectedStudent.year} Year)`}
                    </p>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50/30 dark:bg-slate-900/20">
                {messages.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center text-textSecondary py-12">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-foreground">No message history with {selectedStudent.name} yet.</p>
                    <p className="text-xs text-textSecondary mt-1">Send a message below to start the conversation.</p>
                  </div>
                ) : (
                  messages.map((msg) => {
                    const isAdminMsg = msg.senderRole === 'admin';
                    return (
                      <div
                        key={msg.id}
                        className={`flex flex-col ${isAdminMsg ? 'items-end' : 'items-start'}`}
                      >
                        <div className="flex items-end gap-2 max-w-[75%] sm:max-w-[65%]">
                          {!isAdminMsg && (
                            <div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center shrink-0 mb-1 text-xs font-bold text-foreground">
                              {selectedStudent.name ? selectedStudent.name.charAt(0).toUpperCase() : 'S'}
                            </div>
                          )}
                          <div
                            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${
                              isAdminMsg
                                ? 'bg-primary text-white rounded-br-none'
                                : 'bg-slate-100 dark:bg-slate-800 text-foreground border border-borderGlass rounded-bl-none'
                            }`}
                          >
                            <span className="block font-bold text-[10px] opacity-80 mb-0.5">
                              {isAdminMsg ? 'You (Admin)' : selectedStudent.name}
                            </span>
                            <p className="whitespace-pre-wrap break-words">{msg.text}</p>
                            <span
                              className={`block text-[9px] mt-1 text-right ${
                                isAdminMsg ? 'text-white/70' : 'text-textSecondary'
                              }`}
                            >
                              {formatTimestamp(msg.createdAt)}
                            </span>
                          </div>
                          {isAdminMsg && (
                            <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mb-1">
                              <Shield className="w-4 h-4 text-primary" />
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Message Composer Bar */}
              <form onSubmit={handleSend} className="p-3 sm:p-4 bg-card border-t border-borderGlass flex items-center gap-3">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={`Reply to ${selectedStudent.name}...`}
                  className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-slate-100 dark:bg-slate-800 border border-borderGlass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-textSecondary"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim() || sending}
                  className="px-5 py-2.5 bg-primary text-white text-xs sm:text-sm font-medium rounded-xl hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 shrink-0 shadow-sm"
                >
                  {sending ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <span>Send</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 text-textSecondary">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Select a Student Conversation</h3>
              <p className="text-xs text-textSecondary max-w-sm mt-1 leading-relaxed">
                Choose a student from the left list to view their individual chat channel and send direct messages.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
