import { useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

export function QuizRunner({ questions, onComplete }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const question = questions[currentIdx];

  const handleSelect = (idx) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    
    if (idx === question.correct) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(c => c + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
      if (onComplete) onComplete(score);
    }
  };

  const handleRetry = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="glass-card p-8 text-center max-w-lg mx-auto mt-8">
        <h3 className="text-2xl font-bold mb-4">Quiz Completed!</h3>
        <div className="text-6xl font-bold mb-2 text-primary">{score}/{questions.length}</div>
        <p className="text-textSecondary mb-8">
          {score === questions.length ? 'Perfect score! Great job!' : 'Good effort! Review the notes and try again.'}
        </p>
        <button 
          onClick={handleRetry}
          className="flex items-center justify-center w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all"
        >
          <RotateCcw className="w-5 h-5 mr-2" />
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="glass-card p-6 md:p-8 max-w-2xl mx-auto mt-8">
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm font-semibold text-primary">Question {currentIdx + 1} of {questions.length}</span>
        <span className="text-sm font-semibold bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">Score: {score}</span>
      </div>
      
      <h3 className="text-xl font-medium mb-6">{question.question}</h3>
      
      <div className="space-y-3 mb-8">
        {question.options.map((option, idx) => {
          let bgColor = "bg-white dark:bg-slate-900 border-borderGlass hover:border-primary/50";
          let icon = null;
          
          if (selectedOption !== null) {
            if (idx === question.correct) {
              bgColor = "bg-success/10 border-success text-success-foreground dark:text-success";
              icon = <CheckCircle2 className="w-5 h-5 text-success" />;
            } else if (idx === selectedOption) {
              bgColor = "bg-danger/10 border-danger text-danger-foreground dark:text-danger";
              icon = <XCircle className="w-5 h-5 text-danger" />;
            } else {
              bgColor = "bg-white dark:bg-slate-900 border-borderGlass opacity-50";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={selectedOption !== null}
              className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${bgColor}`}
            >
              <span>{option}</span>
              {icon}
            </button>
          );
        })}
      </div>

      {selectedOption !== null && (
        <div className="mb-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <p className="text-sm"><strong>Explanation:</strong> {question.explanation}</p>
        </div>
      )}

      <button
        onClick={handleNext}
        disabled={selectedOption === null}
        className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold disabled:opacity-50 hover:bg-primary/90 transition-all"
      >
        {currentIdx === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
      </button>
    </div>
  );
}
