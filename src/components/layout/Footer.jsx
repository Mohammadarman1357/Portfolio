import { ArrowUp, Terminal } from 'lucide-react';
import { useLenis } from '../animations/SmoothScrollProvider';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export default function Footer() {
  const { scrollTo } = useLenis() || {};

  const handleScrollTop = () => {
    if (scrollTo) {
      scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full border-t border-slate-200/80 bg-white/70 backdrop-blur-md pt-12 pb-24 px-4 sm:px-8 mt-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-b from-[#343a40] to-[#1e252b] flex items-center justify-center text-white text-xs font-bold shadow-sm">
            <Terminal className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">
              Mohammad Arman Portfolio
            </p>
            <p className="text-xs text-slate-500">
              Senior Full-Stack & AI Systems Engineer
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-medium text-slate-600">
          <a href="#hero" className="hover:text-slate-900 transition-colors">Home</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">About Me</a>
          <a href="#tech-stack" className="hover:text-slate-900 transition-colors">Tech Stack</a>
          <a href="#skills" className="hover:text-slate-900 transition-colors">Skills</a>
          <a href="#qualification" className="hover:text-slate-900 transition-colors">Qualification</a>
          <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact Me</a>
        </div>

        <button
          onClick={handleScrollTop}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200/80 transition-all hover:scale-105 active:scale-95 shadow-sm"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Back to top</span>
        </button>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
        <p>© {new Date().getFullYear()} Mohammad Arman. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-700">
            <GithubIcon className="w-3.5 h-3.5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-700">
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
