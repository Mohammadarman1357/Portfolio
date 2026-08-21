import { useState } from 'react';
import { Check, Copy, FileCode } from 'lucide-react';

export default function CodeViewer({ filename, language, code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.trim().split('\n');

  return (
    <div className="rounded-2xl overflow-hidden border border-slate-700/60 bg-[#0d1117] shadow-xl text-slate-200">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]/90"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/90"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]/90"></div>
          </div>
          <FileCode className="w-4 h-4 text-slate-400" />
          <span className="font-mono text-xs font-medium text-slate-300">
            {filename}
          </span>
          <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
            {language}
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700/50 transition-all active:scale-95"
          title="Copy Code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Body */}
      <div className="p-4 overflow-x-auto font-mono text-xs leading-relaxed max-h-[380px] scrollbar-thin">
        <table className="w-full border-collapse">
          <tbody>
            {lines.map((line, idx) => (
              <tr key={idx} className="hover:bg-white/[0.03] transition-colors">
                <td className="pr-4 py-0.5 select-none text-slate-600 text-right w-8">
                  {idx + 1}
                </td>
                <td className="py-0.5 whitespace-pre font-mono text-slate-200">
                  {/* Basic syntax coloring highlights */}
                  {line.includes('//') ? (
                    <span className="text-slate-500 italic">{line}</span>
                  ) : line.includes('import') || line.includes('export') || line.includes('class') || line.includes('constructor') || line.includes('async') || line.includes('return') || line.includes('const') || line.includes('private') ? (
                    <span>
                      {line.split(' ').map((word, wIdx) => {
                        const keywords = ['import', 'from', 'export', 'class', 'constructor', 'async', 'return', 'const', 'private', 'readonly', 'function', 'new', 'Promise'];
                        if (keywords.includes(word)) {
                          return <span key={wIdx} className="text-purple-400 font-semibold">{word} </span>;
                        }
                        if (word.startsWith('"') || word.startsWith("'") || word.startsWith('`')) {
                          return <span key={wIdx} className="text-emerald-300">{word} </span>;
                        }
                        if (word.includes('(') || word.includes(')')) {
                          return <span key={wIdx} className="text-sky-300">{word} </span>;
                        }
                        return <span key={wIdx}>{word} </span>;
                      })}
                    </span>
                  ) : (
                    <span>{line}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
