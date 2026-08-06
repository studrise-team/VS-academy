import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { CodeBlock } from '../components/ui/CodeBlock';
import { subjectsData } from '../data/subjects';
import { ChevronRight, Menu, X, CheckCircle2 } from 'lucide-react';
import { StructuredLesson } from '../components/course/StructuredLesson';
import { useAuth } from '../contexts/AuthContext';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function SubjectView() {
  const { subjectId } = useParams();
  const subject = subjectsData[subjectId];
  
  const [activeChapter, setActiveChapter] = useState(
    subject?.chapters[0]?.id || ''
  );
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [completedChapters, setCompletedChapters] = useState({});
  const { currentUser } = useAuth();

  const updateProgress = async () => {
    if (!subject) return;
    
    if (!currentUser) {
      let localProgress = {};
      subject.chapters.forEach(c => {
        if (localStorage.getItem(`completed_${subjectId}_${c.id}`) === 'true') {
          localProgress[c.id] = true;
        }
      });
      setCompletedChapters(localProgress);
      return;
    }

    try {
      const q = query(
        collection(db, 'users', currentUser.uid, 'progress'), 
        where('subjectId', '==', subjectId), 
        where('isCompleted', '==', true)
      );
      const querySnapshot = await getDocs(q);
      const progress = {};
      querySnapshot.forEach((doc) => {
        progress[doc.data().chapterId] = true;
      });
      setCompletedChapters(progress);
    } catch (e) {
      console.error("Failed to fetch progress", e);
    }
  };

  useEffect(() => {
    if (subject) {
      setActiveChapter(subject.chapters[0].id);
      updateProgress();
    }
    
    window.addEventListener('progressUpdate', updateProgress);
    return () => window.removeEventListener('progressUpdate', updateProgress);
  }, [subjectId, subject, currentUser]);

  if (!subject) {
    return <div className="p-8 text-center">Subject not found.</div>;
  }

  const rawContent = subject.content[activeChapter];
  // Structured if content is a plain object (AI/Git lessons), markdown if it's a string
  const isStructured = rawContent !== null && typeof rawContent === 'object';
  const markdownContent = !isStructured && (rawContent || "# Content Coming Soon\nWe are working hard to bring you this content.");

  const currentIdx = subject.chapters.findIndex(c => c.id === activeChapter);
  const hasPrev = currentIdx > 0;
  const hasNext = currentIdx < subject.chapters.length - 1;

  const handlePrev = () => {
    if (hasPrev) {
      setActiveChapter(subject.chapters[currentIdx - 1].id);
      window.scrollTo(0, 0);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      setActiveChapter(subject.chapters[currentIdx + 1].id);
      window.scrollTo(0, 0);
    }
  };

  const completedCount = Object.keys(completedChapters).length;
  const progressPercentage = Math.round((completedCount / subject.chapters.length) * 100) || 0;

  return (
    <div className="flex w-full min-h-[calc(100vh-4rem)]">
      {/* Mobile Sidebar Toggle */}
      <button 
        className="md:hidden fixed bottom-4 right-4 z-50 bg-primary text-white p-3 rounded-full shadow-lg no-print"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar */}
      <aside className={`
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 
        fixed md:sticky top-16 left-0 z-40 
        w-72 h-[calc(100vh-4rem)] 
        bg-card border-r border-borderGlass 
        overflow-y-auto transition-transform duration-300 no-print
      `}>
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">{subject.name} Tutorial</h2>
            <div className="flex items-center justify-between text-sm text-textSecondary mb-2">
              <span>Progress</span>
              <span>{progressPercentage}%</span>
            </div>
            <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
          
          <nav className="space-y-1">
            {subject.chapters.map((chapter) => {
              const isCompleted = completedChapters[chapter.id];
              return (
                <button
                  key={chapter.id}
                  onClick={() => {
                    setActiveChapter(chapter.id);
                    setSidebarOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className={`
                    w-full text-left px-4 py-2.5 rounded-lg transition-all text-sm font-medium flex items-center justify-between
                    ${activeChapter === chapter.id 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-textSecondary hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-foreground'}
                  `}
                >
                  <span className="truncate pr-2">{chapter.title}</span>
                  {isCompleted && <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 max-w-4xl mx-auto w-full">
        <div className="flex items-center text-sm text-textSecondary mb-8 space-x-2 no-print">
          <Link to="/subjects" className="hover:text-primary">Subjects</Link>
          <ChevronRight className="w-4 h-4" />
          <span>{subject.name}</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{subject.chapters[currentIdx]?.title}</span>
        </div>

        <div className="mb-8 no-print">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-semibold mb-4">
            Lesson {currentIdx + 1} of {subject.chapters.length}
          </div>
        </div>

        {isStructured ? (
          <StructuredLesson 
            content={rawContent} 
            chapterId={activeChapter} 
            subjectId={subjectId} 
          />
        ) : (
          <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary prose-pre:p-0 prose-pre:bg-transparent pb-16">
            <Markdown
              components={{
                code(props) {
                  const {children, className, node, ...rest} = props
                  const match = /language-(\w+)/.exec(className || '')
                  return match ? (
                    <CodeBlock className={className} node={node} {...rest}>
                      {children}
                    </CodeBlock>
                  ) : (
                    <CodeBlock inline className={className} {...rest}>
                      {children}
                    </CodeBlock>
                  )
                }
              }}
            >
              {markdownContent}
            </Markdown>
          </div>
        )}
        
        {/* Next/Prev Navigation */}
        <div className="mt-8 pt-8 border-t border-borderGlass flex justify-between no-print pb-16">
          <button 
            onClick={handlePrev}
            disabled={!hasPrev}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
              hasPrev 
                ? 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-foreground' 
                : 'bg-slate-50 dark:bg-slate-900 text-textSecondary/50 cursor-not-allowed'
            }`}
          >
            Previous Chapter
          </button>
          <button 
            onClick={handleNext}
            disabled={!hasNext}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
              hasNext 
                ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                : 'bg-slate-50 dark:bg-slate-900 text-textSecondary/50 cursor-not-allowed'
            }`}
          >
            Next Chapter
          </button>
        </div>
      </main>
    </div>
  );
}
