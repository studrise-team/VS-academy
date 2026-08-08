import { useState, useEffect } from 'react';
import { Bookmark, BookmarkCheck, CheckCircle2, Download, Clock, Target, Check, XCircle, AlertCircle, ExternalLink, RotateCcw } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

export function StructuredLesson({ content, chapterId, subjectId }) {
  const { currentUser } = useAuth();
  
  // Storage keys
  const notesKey = `notes_${subjectId}_${chapterId}`;
  const completedKey = `completed_${subjectId}_${chapterId}`;
  const bookmarkKey = `bookmark_${subjectId}_${chapterId}`;
  const quizStorageKey = `quiz_${subjectId}_${chapterId}`;

  const [notes, setNotes] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [dbLoading, setDbLoading] = useState(true);

  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);
  const [quizScore, setQuizScore] = useState(null);
  const [quizValidationMsg, setQuizValidationMsg] = useState('');
  
  const [copied, setCopied] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [expandedInterviewQ, setExpandedInterviewQ] = useState(null);

  // Normalize quiz question list
  const quizList = Array.isArray(content?.quiz) 
    ? content.quiz 
    : (content?.quickQuiz ? [content.quickQuiz] : []);

  // Helper to check if an option is correct
  const checkIsCorrect = (q, selectedOption) => {
    if (selectedOption === undefined || selectedOption === null) return false;
    if (q.answer !== undefined && String(selectedOption).trim() === String(q.answer).trim()) return true;
    if (q.correctAnswer !== undefined && String(selectedOption).trim() === String(q.correctAnswer).trim()) return true;
    if (typeof q.correct === 'number' && Array.isArray(q.options) && q.options[q.correct] === selectedOption) return true;
    if (typeof q.correctAnswer === 'number' && Array.isArray(q.options) && q.options[q.correctAnswer] === selectedOption) return true;
    return false;
  };

  // Helper to get correct answer text display
  const getCorrectAnswerText = (q) => {
    if (q.answer !== undefined && typeof q.answer === 'string') return q.answer;
    if (q.correctAnswer !== undefined && typeof q.correctAnswer === 'string') return q.correctAnswer;
    if (typeof q.correct === 'number' && Array.isArray(q.options) && q.options[q.correct]) return q.options[q.correct];
    if (typeof q.correctAnswer === 'number' && Array.isArray(q.options) && q.options[q.correctAnswer]) return q.options[q.correctAnswer];
    return q.answer || q.correctAnswer || '';
  };

  // Load from DB or Local Storage cleanly on chapter change
  useEffect(() => {
    let isMounted = true;
    setDbLoading(true);
    setQuizValidationMsg('');
    setShowSolution(false);
    setExpandedInterviewQ(null);
    
    const loadProgress = async () => {
      let loadedNotes = '';
      let loadedCompleted = false;
      let loadedBookmarked = false;
      let loadedQuizAnswers = {};
      let loadedShowResults = false;
      let loadedScore = null;

      if (currentUser) {
        try {
          const docRef = doc(db, 'users', currentUser.uid, 'progress', completedKey);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists() && isMounted) {
            const data = docSnap.data();
            loadedNotes = data.notes || '';
            loadedCompleted = data.isCompleted || false;
            loadedBookmarked = data.isBookmarked || false;
            loadedQuizAnswers = data.quizAnswers || {};
            loadedShowResults = data.showQuizResults || false;
            loadedScore = data.quizScore !== undefined ? data.quizScore : null;
          }
        } catch (e) {
          console.error("Error loading progress", e);
        }
      } else {
        loadedNotes = localStorage.getItem(notesKey) || '';
        loadedCompleted = localStorage.getItem(completedKey) === 'true';
        loadedBookmarked = localStorage.getItem(bookmarkKey) === 'true';
        const localQuiz = localStorage.getItem(quizStorageKey);
        if (localQuiz) {
          try {
            const parsed = JSON.parse(localQuiz);
            loadedQuizAnswers = parsed.quizAnswers || {};
            loadedShowResults = parsed.showQuizResults || false;
            loadedScore = parsed.quizScore !== undefined ? parsed.quizScore : null;
          } catch (err) {
            console.error("Error parsing local quiz data", err);
          }
        }
      }

      if (isMounted) {
        setNotes(loadedNotes);
        setIsCompleted(loadedCompleted);
        setIsBookmarked(loadedBookmarked);
        setQuizAnswers(loadedQuizAnswers);
        setShowQuizResults(loadedShowResults);
        setQuizScore(loadedScore);
        setDbLoading(false);
      }
    };

    loadProgress();

    return () => { isMounted = false; };
  }, [currentUser, completedKey, notesKey, bookmarkKey, quizStorageKey, subjectId, chapterId, content]);

  // Sync notes with Debounce
  useEffect(() => { 
    if (dbLoading) return;
    const timeoutId = setTimeout(() => {
      if (currentUser) {
        setDoc(doc(db, 'users', currentUser.uid, 'progress', completedKey), { notes, subjectId, chapterId }, { merge: true }).catch(console.error);
      } else {
        localStorage.setItem(notesKey, notes); 
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [notes, notesKey, currentUser, dbLoading, completedKey, subjectId, chapterId]);

  // Explicit completion toggle handler
  const handleToggleCompleted = async () => {
    const nextCompleted = !isCompleted;
    setIsCompleted(nextCompleted);
    
    if (currentUser) {
      try {
        await setDoc(doc(db, 'users', currentUser.uid, 'progress', completedKey), { 
          isCompleted: nextCompleted, 
          subjectId, 
          chapterId 
        }, { merge: true });
      } catch (e) {
        console.error("Failed to update completion in Firestore", e);
      }
    } else {
      localStorage.setItem(completedKey, nextCompleted);
    }
    window.dispatchEvent(new Event('progressUpdate'));
  };

  // Explicit bookmark toggle handler
  const handleToggleBookmarked = async () => {
    const nextBookmarked = !isBookmarked;
    setIsBookmarked(nextBookmarked);
    
    if (currentUser) {
      try {
        await setDoc(doc(db, 'users', currentUser.uid, 'progress', completedKey), { 
          isBookmarked: nextBookmarked, 
          subjectId, 
          chapterId 
        }, { merge: true });
      } catch (e) {
        console.error("Failed to update bookmark in Firestore", e);
      }
    } else {
      localStorage.setItem(bookmarkKey, nextBookmarked);
    }
  };

  // Quiz submission handler
  const handleQuizSubmit = async () => {
    if (quizList.length === 0) return;

    // Check unanswered questions
    const unanswered = [];
    quizList.forEach((q, idx) => {
      if (quizAnswers[idx] === undefined || quizAnswers[idx] === null) {
        unanswered.push(idx + 1);
      }
    });

    if (unanswered.length > 0) {
      setQuizValidationMsg(`Please answer all questions before submitting. Unanswered: Question ${unanswered.join(', ')}`);
      return;
    }

    setQuizValidationMsg('');

    // Calculate score
    let calculatedScore = 0;
    quizList.forEach((q, idx) => {
      if (checkIsCorrect(q, quizAnswers[idx])) {
        calculatedScore += 1;
      }
    });

    setQuizScore(calculatedScore);
    setShowQuizResults(true);

    const quizPayload = {
      quizAnswers,
      quizScore: calculatedScore,
      quizTotal: quizList.length,
      showQuizResults: true,
      subjectId,
      chapterId,
      updatedAt: new Date().toISOString()
    };

    if (currentUser) {
      try {
        await setDoc(
          doc(db, 'users', currentUser.uid, 'progress', completedKey),
          quizPayload,
          { merge: true }
        );
      } catch (e) {
        console.error("Failed to save quiz progress", e);
      }
    } else {
      localStorage.setItem(quizStorageKey, JSON.stringify(quizPayload));
    }
  };

  // Retake quiz handler
  const handleRetakeQuiz = async () => {
    setQuizAnswers({});
    setShowQuizResults(false);
    setQuizScore(null);
    setQuizValidationMsg('');

    const resetPayload = {
      quizAnswers: {},
      showQuizResults: false,
      quizScore: 0
    };

    if (currentUser) {
      try {
        await setDoc(
          doc(db, 'users', currentUser.uid, 'progress', completedKey),
          resetPayload,
          { merge: true }
        );
      } catch (e) {
        console.error("Failed to reset quiz state", e);
      }
    } else {
      localStorage.removeItem(quizStorageKey);
    }
  };

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
            <button onClick={handleToggleBookmarked} className={`p-2.5 rounded-xl border ${isBookmarked ? 'bg-primary/10 text-primary border-primary/20' : 'bg-card border-borderGlass text-textSecondary hover:text-foreground hover:bg-slate-100 dark:hover:bg-slate-800'} transition-all`}>
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
            <h2 className="text-lg font-bold text-foreground">Why use it?</h2>
            <p className="text-textSecondary leading-relaxed">{content.whyUseIt}</p>
          </section>
        )}
      </div>

      {/* Syntax & Code Example */}
      {(content.syntax || content.codeExample) && (
        <section className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Code Example</h2>
            {content.codeExample && (
              <button onClick={handleCopy} className="no-print text-sm font-semibold text-primary hover:underline flex items-center space-x-1">
                <span>{copied ? 'Copied!' : 'Copy Code'}</span>
              </button>
            )}
          </div>
          {content.syntax && (
            <div className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-sm overflow-x-auto border border-borderGlass">
              <span className="text-slate-400 select-none">// Syntax Overview: </span>
              {content.syntax}
            </div>
          )}
          {content.codeExample && (
            <div className="rounded-2xl overflow-hidden border border-borderGlass bg-slate-950 no-print">
              <pre className="p-6 text-slate-100 font-mono text-sm overflow-x-auto">
                <code>{content.codeExample}</code>
              </pre>
            </div>
          )}
        </section>
      )}

      {/* Explanation Table */}
      {content.explanation && content.explanation.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold">Key Components Explained</h2>
          <div className="border border-borderGlass rounded-2xl overflow-hidden bg-card">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-borderGlass bg-slate-50 dark:bg-slate-900">
                  <th className="p-4 font-bold text-sm">Code / Concept</th>
                  <th className="p-4 font-bold text-sm">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-borderGlass">
                {content.explanation.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                    <td className="p-4 font-mono text-sm font-semibold text-primary">{item.code}</td>
                    <td className="p-4 text-sm text-textSecondary">{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Real-World Analogy */}
      {content.realWorldExample && (
        <section className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-2">
          <h2 className="text-lg font-bold text-amber-700 dark:text-amber-400">💡 Real-World Analogy</h2>
          <p className="text-textSecondary leading-relaxed">{content.realWorldExample}</p>
        </section>
      )}

      {/* Common Mistakes */}
      {content.commonMistakes && content.commonMistakes.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-red-600 dark:text-red-400">⚠️ Common Mistakes to Avoid</h2>
          <div className="space-y-3">
            {content.commonMistakes.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-red-500/5 border border-red-500/20 space-y-1">
                <p className="font-semibold text-red-700 dark:text-red-300 text-sm">❌ {item.error}</p>
                {item.suffix && <p className="text-xs text-textSecondary leading-relaxed pl-5">{item.suffix}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Practice Exercise */}
      {content.practiceExercise && (
        <section className="space-y-4 p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20 no-print">
          <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">🎯 Hands-on Practice</h2>
          <p className="text-textSecondary leading-relaxed">{content.practiceExercise.task}</p>
          
          <div className="pt-2">
            <button 
              onClick={() => setShowSolution(!showSolution)}
              className="px-4 py-2 rounded-xl bg-blue-500 text-white font-semibold text-sm hover:bg-blue-600 transition-colors"
            >
              {showSolution ? 'Hide Solution' : 'Show Solution'}
            </button>
          </div>

          {showSolution && content.practiceExercise.solution && (
            <div className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-sm overflow-x-auto mt-4 border border-blue-500/30">
              <pre><code>{content.practiceExercise.solution}</code></pre>
            </div>
          )}
        </section>
      )}

      {/* Interview Questions */}
      {content.interviewQuestions && content.interviewQuestions.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold">💼 Interview Questions</h2>
          <div className="space-y-3">
            {content.interviewQuestions.map((iq, idx) => {
              const isExpanded = expandedInterviewQ === idx;
              const questionText = iq.q || iq.question;
              const answerText = iq.a || iq.answer;
              return (
                <div key={idx} className="border border-borderGlass rounded-xl overflow-hidden bg-card">
                  <button 
                    onClick={() => setExpandedInterviewQ(isExpanded ? null : idx)}
                    className="w-full p-4 text-left font-semibold flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <span>{idx + 1}. {questionText}</span>
                    <span className="text-xs text-primary font-bold">{isExpanded ? 'Hide Answer' : 'Show Answer'}</span>
                  </button>
                  {isExpanded && answerText && (
                    <div className="px-4 pb-4 pt-2 ml-4 border-t border-borderGlass border-dashed">
                      <p className="text-textSecondary leading-relaxed whitespace-pre-line text-sm">{answerText}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Quiz Section */}
      {quizList.length > 0 && (
        <section className="space-y-6 p-6 md:p-8 bg-indigo-500/5 border border-indigo-500/20 rounded-3xl no-print">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-2">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-indigo-500/20 rounded-xl text-indigo-600 dark:text-indigo-400">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Concept Quiz</h2>
                <p className="text-sm text-textSecondary">Test your knowledge of this lesson ({quizList.length} Questions)</p>
              </div>
            </div>
            {showQuizResults && (
              <button 
                onClick={handleRetakeQuiz}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-semibold text-sm transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Quiz</span>
              </button>
            )}
          </div>

          {/* Quiz Score Summary Card when submitted */}
          {showQuizResults && (
            <div className="p-6 rounded-2xl bg-card border border-indigo-500/30 shadow-md space-y-4 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center font-extrabold text-2xl text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                    {quizScore !== null ? quizScore : Object.keys(quizAnswers).filter(k => checkIsCorrect(quizList[k], quizAnswers[k])).length}/{quizList.length}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {(quizScore !== null ? quizScore : 0) === quizList.length 
                        ? '🎉 Perfect Score! Outstanding job!' 
                        : (quizScore || 0) >= Math.ceil(quizList.length / 2)
                        ? '👏 Good Job! You passed the quiz.'
                        : '💪 Good Effort! Review the answers below.'}
                    </h3>
                    <p className="text-sm text-textSecondary">
                      Score Percentage: {Math.round(((quizScore || 0) / quizList.length) * 100)}%
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-sm">
                  <span className="px-3.5 py-1.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 font-bold border border-green-500/20 flex items-center space-x-1">
                    <CheckCircle2 className="w-4 h-4 mr-1" />
                    <span>{quizScore !== null ? quizScore : 0} Correct</span>
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 font-bold border border-red-500/20 flex items-center space-x-1">
                    <XCircle className="w-4 h-4 mr-1" />
                    <span>{quizList.length - (quizScore !== null ? quizScore : 0)} Incorrect</span>
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Questions List */}
          <div className="space-y-8 pt-4">
            {quizList.map((q, qIdx) => {
              const selectedOption = quizAnswers[qIdx];
              const isUserCorrect = checkIsCorrect(q, selectedOption);
              const correctAnswerText = getCorrectAnswerText(q);

              return (
                <div key={qIdx} className="space-y-4 p-6 rounded-2xl bg-card border border-borderGlass">
                  <div className="flex justify-between items-start gap-4">
                    <p className="text-lg font-semibold text-foreground leading-snug">
                      <span className="text-indigo-500 font-bold mr-2">{qIdx + 1}.</span> 
                      {q.question}
                    </p>
                    {showQuizResults && (
                      <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-bold shrink-0 ${
                        isUserCorrect 
                          ? 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20' 
                          : 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20'
                      }`}>
                        {isUserCorrect ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-green-500" />
                            <span>Correct</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-3.5 h-3.5 mr-1 text-red-500" />
                            <span>Incorrect</span>
                          </>
                        )}
                      </span>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3.5">
                    {q.options.map((option, idx) => {
                      const isOptionSelected = selectedOption === option;
                      const isOptionCorrect = (q.answer !== undefined && String(option).trim() === String(q.answer).trim()) ||
                        (q.correctAnswer !== undefined && String(option).trim() === String(q.correctAnswer).trim()) ||
                        (typeof q.correct === 'number' && q.correct === idx) ||
                        (typeof q.correctAnswer === 'number' && q.correctAnswer === idx);
                      
                      let buttonStyle = "bg-card border-borderGlass hover:border-indigo-400 hover:bg-indigo-500/5 text-foreground";
                      
                      if (showQuizResults) {
                        if (isOptionCorrect) {
                          buttonStyle = "bg-green-500/10 border-green-500 text-green-700 dark:text-green-300 ring-2 ring-green-500/20 font-bold";
                        } else if (isOptionSelected && !isOptionCorrect) {
                          buttonStyle = "bg-red-500/10 border-red-500 text-red-700 dark:text-red-300 ring-2 ring-red-500/20 font-bold";
                        } else {
                          buttonStyle = "bg-card border-borderGlass opacity-50";
                        }
                      } else if (isOptionSelected) {
                        buttonStyle = "bg-indigo-500/10 border-indigo-500 text-indigo-700 dark:text-indigo-300 ring-2 ring-indigo-500/20 font-bold";
                      }

                      return (
                        <button
                          key={idx}
                          disabled={showQuizResults}
                          onClick={() => {
                            setQuizAnswers(prev => ({ ...prev, [qIdx]: option }));
                            setQuizValidationMsg('');
                          }}
                          className={`p-4 rounded-xl border-2 text-left font-medium transition-all ${buttonStyle} flex justify-between items-center`}
                        >
                          <span>{option}</span>
                          {showQuizResults && isOptionCorrect && <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 ml-2" />}
                          {showQuizResults && isOptionSelected && !isOptionCorrect && <XCircle className="w-5 h-5 text-red-500 shrink-0 ml-2" />}
                        </button>
                      );
                    })}
                  </div>

                  {/* Answer Explanation Box */}
                  {showQuizResults && (
                    <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-borderGlass space-y-2">
                      {!isUserCorrect && (
                        <p className="text-sm font-semibold text-green-600 dark:text-green-400 flex items-center">
                          <Check className="w-4 h-4 mr-1.5 text-green-500" />
                          Correct Answer: <span className="ml-1 text-foreground font-bold">{correctAnswerText}</span>
                        </p>
                      )}
                      {q.explanation && (
                        <div className="text-xs sm:text-sm text-textSecondary leading-relaxed pt-1 border-t border-borderGlass/50">
                          <span className="font-semibold text-foreground">Explanation: </span>
                          {Array.isArray(q.explanation) ? (
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                              {q.explanation.map((item, i) => (
                                <li key={i}>{typeof item === 'object' ? `${item.code || ''}: ${item.desc || ''}` : item}</li>
                              ))}
                            </ul>
                          ) : (
                            <span>{q.explanation}</span>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Validation Error Message */}
          {quizValidationMsg && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-sm font-semibold flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 shrink-0 text-red-500" />
              <span>{quizValidationMsg}</span>
            </div>
          )}

          {/* Submit / Retake Bottom Controls */}
          <div className="mt-8 pt-6 border-t border-indigo-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            {!showQuizResults ? (
              <button 
                onClick={handleQuizSubmit}
                className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center space-x-2"
              >
                <Check className="w-5 h-5" />
                <span>Submit Answers</span>
              </button>
            ) : (
              <div className="flex items-center justify-between w-full flex-wrap gap-4">
                <span className="text-sm font-semibold text-textSecondary">
                  Quiz results stored. You can retake anytime.
                </span>
                <button 
                  onClick={handleRetakeQuiz}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold transition-all shadow-md flex items-center space-x-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Retake Quiz</span>
                </button>
              </div>
            )}
          </div>
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
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-card border border-borderGlass hover:border-primary hover:text-primary transition-all text-textSecondary font-medium text-sm"
              >
                <span>{ref.name || ref.label}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Personal Notes */}
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
          onClick={handleToggleCompleted}
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
