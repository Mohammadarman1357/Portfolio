import { useState } from 'react';
import { Mail, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { useLenis } from '../animations/SmoothScrollProvider';

export default function Header() {
  const { scrollTo } = useLenis() || {};
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mohammad.arman.dev@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-header py-3 px-4 sm:px-8 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand / Identity */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-b from-[#2d333b] to-[#1a1f26] flex items-center justify-center text-white shadow-md border border-slate-700/30">
            <Terminal className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900">
                Mohammad Arman
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-medium text-emerald-700 bg-emerald-100/80 rounded-full border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Available for hire
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Senior Full-Stack & AI Systems Engineer
            </p>
          </div>
        </div>

        {/* Action Controls & Links */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200"
          >
            <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200"
          >
            <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          <button
            onClick={handleCopyEmail}
            title="Copy Email Address"
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all active:scale-95"
          >
            <Mail className="w-3.5 h-3.5 text-slate-500" />
            <span>{copied ? 'Copied to clipboard!' : 'Copy Email'}</span>
          </button>

          <button
            onClick={() => scrollTo ? scrollTo('#more') : document.getElementById('more')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-b from-[#343a40] to-[#1e252b] hover:from-[#2b3035] hover:to-[#151a1e] shadow-md transition-all hover:scale-105 active:scale-95 border border-slate-700/40"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Get in Touch</span>
          </button>
        </div>
      </div>
    </header>
  );
}
