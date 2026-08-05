import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export function CodeBlock({ node, inline, className, children, ...props }) {
  const [copied, setCopied] = useState(false);
  const match = /language-(\w+)/.exec(className || '');
  
  const handleCopy = () => {
    navigator.clipboard.writeText(String(children).replace(/\n$/, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!inline && match) {
    return (
      <div className="relative group rounded-lg overflow-hidden my-4 border border-borderGlass bg-[#1E293B]">
        <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-borderGlass">
          <span className="text-xs font-mono text-slate-400">{match[1]}</span>
          <button
            onClick={handleCopy}
            className="text-slate-400 hover:text-white transition-colors"
            title="Copy code"
          >
            {copied ? <Check className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
        <div className="p-4 overflow-x-auto text-sm font-mono text-slate-50">
          <pre {...props}>
            <code className={className}>
              {children}
            </code>
          </pre>
        </div>
      </div>
    );
  }

  return (
    <code className="bg-slate-100 dark:bg-slate-800 text-primary dark:text-accent px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
      {children}
    </code>
  );
}
