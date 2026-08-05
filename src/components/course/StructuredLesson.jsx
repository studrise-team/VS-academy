import { useState, useEffect } from 'react';
import { Bookmark, BookmarkCheck, CheckCircle2, Download, Play, Copy, Clock, Target, ChevronRight, Check, XCircle, AlertCircle, ExternalLink } from 'lucide-react';

export function StructuredLesson({ content, chapterId, subjectId }) {
  // Local storage keys
  const notesKey = `notes_${subjectId}_${chapterId}`;
  const completedKey = `completed_${subjectId}_${chapterId}`;
  const bookmarkKey = `bookmark_${subjectId}_${chapterId}`;

  const [notes, setNotes] = useState(() => localStorage.getItem(notesKey) || '');
  const [isCompleted, setIsCompleted] = useState(() => localStorage.getItem(completedKey) === 'true');
  const [isBookmarked, setIsBookmarked] = useState(() => localStorage.getItem(bookmarkKey) === 'true');
  const [showPreview, setShowPreview] = useState(false);
  const [selectedQuizOption, setSelectedQuizOption] = useState(null);
  const [copied, setCopied] = useState(false);

  // Sync to local storage
  useEffect(() => { localStorage.setItem(notesKey, notes); }, [notes, notesKey]);
  useEffect(() => { 
    localStorage.setItem(completedKey, isCompleted);
    // Dispatch custom event to notify parent (SubjectView) of progress change
    window.dispatchEvent(new Event('progressUpdate'));
  }, [isCompleted, completedKey]);
  useEffect(() => { localStorage.setItem(bookmarkKey, isBookmarked); }, [isBookmarked, bookmarkKey]);

  // Reset states when content changes
  useEffect(() => {
    setShowPreview(false);
    setSelectedQuizOption(null);
  }, [content]);

  const handleCopy = () => {
    navigator.clipboard.writeText(content.codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-12 pb-24 printable-lesson animate-in fade-in duration-500">
      {/* Header */}
      <header className="space-y-6">
        <div className="flex justify-between items-start">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{content.title}</h1>
          <div className="flex space-x-2 no-print">
            <button onClick={() => setIsBookmarked(!isBookmarked)} className={`p-2.5 rounded-xl border ${isBookmarked ? 'bg-primary/10 text-primary border-primary/20' : 'bg-card border-borderGlass text-textSecondary hover:text-foreground hover:bg-slate-100 dark:hover:bg-slate-800'} transition-all`}>
              {isBookmarked ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
            </button>
            <button onClick={handlePrint} className="p-2.5 rounded-xl border bg-card border-borderGlass text-textSecondary hover:text-foreground hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex space-x-4">
          <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-semibold">
            <Target className="w-4 h-4" />
            <span>{content.difficulty || 'Beginner'}</span>
          </span>
          <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>{content.readingTime || '5 min'}</span>
          </span>
        </div>
      </header>

      {/* Definition & Why Use It */}
      <div className="grid md:grid-cols-2 gap-8">
        {content.definition && (
          <section className="space-y-4 bg-card p-6 rounded-2xl border border-borderGlass">
            <h2 className="text-lg font-bold text-foreground">What is it?</h2>
            <p className="text-textSecondary leading-relaxed">{content.definition}</p>
          </section>
        )}
        {content.whyUseIt && (
          <section className="space-y-4 bg-card p-6 rounded-2xl border border-borderGlass">
            <h2 className="text-lg font-bold text-foreground">Why do we use it?</h2>
            <p className="text-textSecondary leading-relaxed">{content.whyUseIt}</p>
          </section>
        )}
      </div>

      {/* Syntax */}
      {content.syntax && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold border-b border-borderGlass pb-2">Syntax</h2>
          <div className="bg-slate-900 rounded-xl p-5 overflow-x-auto text-sm text-sky-300 font-mono leading-relaxed border border-slate-800">
            <pre>{content.syntax.split('\\n').join('\n')}</pre>
          </div>
        </section>
      )}

      {/* Code Example & Preview */}
      {content.codeExample && (
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-borderGlass pb-2 gap-4">
            <h2 className="text-xl font-bold">Code Example</h2>
            <div className="flex space-x-2 no-print">
              <button onClick={handleCopy} className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-semibold transition-all text-foreground">
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : 'Copy Code'}</span>
              </button>
            </div>
          </div>
          <div className="bg-slate-900 rounded-xl p-5 overflow-x-auto text-sm text-green-400 font-mono leading-relaxed border border-slate-800">
            <pre>{content.codeExample.split('\\n').join('\n')}</pre>
          </div>

          {/* Expected Output Box — shown for all SQL topics */}
          {content.expectedOutput && (
            <div className="mt-4 rounded-xl overflow-hidden border border-slate-700 shadow-lg">
              <div className="bg-slate-800 px-4 py-2.5 flex items-center space-x-2 border-b border-slate-700">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest ml-3">⚡ Expected Output</span>
              </div>
              <div className="bg-slate-950 p-5 overflow-x-auto">
                <pre className="text-sm text-amber-300 font-mono leading-relaxed whitespace-pre">{content.expectedOutput.split('\\n').join('\n')}</pre>
              </div>
            </div>
          )}

          {content.hasLiveOutput && (
            <div className="mt-6 border border-borderGlass rounded-xl overflow-hidden bg-white no-print shadow-xl">
              <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2.5 border-b border-borderGlass flex items-center space-x-2">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <span className="text-xs font-semibold text-textSecondary uppercase tracking-wider ml-4">Sample Output</span>
              </div>
              <iframe 
                srcDoc={content.codeExample.split('\\n').join('\n').replace('</head>', '  <base target="_blank">\\n</head>')} 
                className="w-full min-h-[200px] resize-y bg-white"
                sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-top-navigation-by-user-activation allow-forms"
                title="Sample Output"
                onLoad={(e) => {
                  // Auto-adjust height based on content if possible, fallback to 200px
                  const iframe = e.target;
                  try {
                    iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + 'px';
                  } catch(err) {
                    // Cross-origin or sandbox restriction
                  }
                }}
              />
            </div>
          )}
        </section>
      )}

      {/* Explanation */}
      {content.explanation && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold border-b border-borderGlass pb-2">Line by Line Explanation</h2>
          <div className="space-y-3">
            {content.explanation.map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 p-4 rounded-xl bg-card border border-borderGlass">
                <code className="px-2 py-1 bg-primary/10 text-primary rounded font-mono text-sm shrink-0 whitespace-nowrap">
                  {item.code}
                </code>
                <span className="text-textSecondary">{item.desc}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Real World Example & Common Mistakes */}
      <div className="grid md:grid-cols-2 gap-8">
        {content.realWorldExample && (
          <section className="space-y-4">
            <h2 className="text-xl font-bold border-b border-borderGlass pb-2">Real World Example</h2>
            <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl h-full">
              <p className="text-blue-700 dark:text-blue-300 leading-relaxed">{content.realWorldExample}</p>
            </div>
          </section>
        )}
        
        {content.commonMistakes && (
          <section className="space-y-4">
            <h2 className="text-xl font-bold border-b border-borderGlass pb-2">Common Mistakes</h2>
            <ul className="space-y-3">
              {content.commonMistakes.map((mistake, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-textSecondary">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>
                    {mistake.error}{' '}
                    {mistake.code && <code className="px-1.5 py-0.5 bg-red-500/10 text-red-500 rounded text-sm">{mistake.code}</code>}{' '}
                    {mistake.suffix}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Best Practices */}
      {content.bestPractices && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold border-b border-borderGlass pb-2">Best Practices</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {content.bestPractices.map((practice, idx) => (
              <div key={idx} className="flex items-center space-x-3 p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-green-800 dark:text-green-200 font-medium">{practice}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Mini Exercise */}
      {content.miniExercise && (
        <section className="space-y-4 p-8 bg-card border border-borderGlass rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
          <h2 className="text-2xl font-bold mb-4">Mini Exercise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="font-semibold text-textSecondary uppercase tracking-wider text-sm">Your Task</h3>
              <div className="prose prose-slate dark:prose-invert">
                {content.miniExercise.task.split('\\n').map((line, i) => (
                  <p key={i} className="my-1">{line}</p>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-textSecondary uppercase tracking-wider text-sm">Expected Output</h3>
              <div className="bg-slate-100 dark:bg-slate-900 border border-borderGlass rounded-xl p-4 overflow-hidden relative">
                <div className="pointer-events-none opacity-50 prose prose-slate dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: content.miniExercise.expectedOutput }} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Summary */}
      {content.summary && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold border-b border-borderGlass pb-2">Summary</h2>
          <ul className="list-disc list-inside space-y-2 text-textSecondary marker:text-primary">
            {content.summary.map((item, idx) => (
              <li key={idx} className="leading-relaxed">{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Interview Questions */}
      {content.interviewQuestions && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold border-b border-borderGlass pb-2">Interview Questions</h2>
          <div className="space-y-3">
            {content.interviewQuestions.map((q, idx) => (
              <div key={idx} className="flex items-start space-x-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-borderGlass">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-sm shrink-0">
                  {idx + 1}
                </span>
                <span className="text-foreground font-medium">{q}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Quick Quiz */}
      {content.quickQuiz && (
        <section className="space-y-6 p-8 bg-indigo-500/5 border border-indigo-500/20 rounded-3xl no-print">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-600 dark:text-indigo-400">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Quick Quiz</h2>
          </div>
          <p className="text-lg font-medium text-foreground mb-6">{content.quickQuiz.question}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {content.quickQuiz.options.map((option, idx) => {
              const isSelected = selectedQuizOption === option;
              const isCorrect = option === content.quickQuiz.answer;
              const showResult = selectedQuizOption !== null;
              
              let buttonStyle = "bg-card border-borderGlass hover:border-primary hover:bg-primary/5 text-foreground";
              if (showResult) {
                if (isCorrect) {
                  buttonStyle = "bg-green-500/10 border-green-500 text-green-700 dark:text-green-300 ring-2 ring-green-500/20";
                } else if (isSelected) {
                  buttonStyle = "bg-red-500/10 border-red-500 text-red-700 dark:text-red-300 ring-2 ring-red-500/20";
                } else {
                  buttonStyle = "bg-card border-borderGlass opacity-50";
                }
              }

              return (
                <button
                  key={idx}
                  disabled={showResult}
                  onClick={() => setSelectedQuizOption(option)}
                  className={`p-4 rounded-xl border-2 text-left font-semibold transition-all ${buttonStyle} flex justify-between items-center`}
                >
                  <span>{option}</span>
                  {showResult && isCorrect && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                  {showResult && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-500" />}
                </button>
              );
            })}
          </div>
          {selectedQuizOption !== null && (
            <div className="mt-6 pt-4 border-t border-indigo-500/20 flex items-center justify-between">
              <p className={`font-semibold ${selectedQuizOption === content.quickQuiz.answer ? 'text-green-600' : 'text-red-600'}`}>
                {selectedQuizOption === content.quickQuiz.answer ? '🎉 Correct!' : '❌ Not quite right. Try again next time!'}
              </p>
              <button 
                onClick={() => setSelectedQuizOption(null)}
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 underline"
              >
                Reset Quiz
              </button>
            </div>
          )}
        </section>
      )}

      {/* References */}
      {content.references && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold border-b border-borderGlass pb-2">References</h2>
          <div className="flex flex-wrap gap-4">
            {content.references.map((ref, idx) => (
              <a 
                key={idx} 
                href={ref.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-card border border-borderGlass hover:border-primary hover:text-primary transition-all text-textSecondary font-medium"
              >
                <span>{ref.label}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Notes Section (Local Storage) */}
      <section className="space-y-4 pt-8 border-t border-borderGlass no-print">
        <h2 className="text-xl font-bold">Personal Notes</h2>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Write your personal notes here... (They are saved automatically)"
          className="w-full h-32 p-4 rounded-2xl bg-card border border-borderGlass focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-textSecondary resize-none"
        />
      </section>

      {/* Mark as Completed */}
      <div className="pt-8 border-t border-borderGlass flex justify-center no-print">
        <button
          onClick={() => setIsCompleted(!isCompleted)}
          className={`inline-flex items-center space-x-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 ${
            isCompleted 
              ? 'bg-green-500 text-white shadow-lg shadow-green-500/20' 
              : 'bg-primary text-white shadow-lg shadow-primary/20'
          }`}
        >
          {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : <Target className="w-6 h-6" />}
          <span>{isCompleted ? 'Completed!' : 'Mark as Completed'}</span>
        </button>
      </div>
    </div>
  );
}
