import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Clock, Code, Cpu, ExternalLink, FileCode, Layers, ShieldCheck, Sparkles, Terminal } from 'lucide-react';
import { DOCS_SECTIONS } from '../../data/docs';
import CodeViewer from '../ui/CodeViewer';

export default function DocsSection() {
  const [activeDocId, setActiveDocId] = useState(DOCS_SECTIONS[0].id);

  const selectedDoc = DOCS_SECTIONS.find((doc) => doc.id === activeDocId) || DOCS_SECTIONS[0];

  return (
    <section id="docs" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto border-t border-slate-200/80">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-200/80 text-slate-800 border border-slate-300/80 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Technical Documentation & Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            System Design & Engineering Docs
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
            In-depth architectural breakdowns, API specifications, and performance engineering write-ups from real-world production systems.
          </p>
        </div>

        {/* Quick Doc Selector Pills */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-200/70 border border-slate-300/60">
          {DOCS_SECTIONS.map((doc) => {
            const isSelected = activeDocId === doc.id;
            return (
              <button
                key={doc.id}
                onClick={() => setActiveDocId(doc.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-300/50'
                }`}
              >
                {doc.badge}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Documentation Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Summary, Metadata & Architecture Blueprint */}
        <div className="lg:col-span-5 space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDoc.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="tactile-card rounded-3xl p-6 sm:p-7 space-y-5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200">
                  {selectedDoc.badge}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                  <Clock className="w-3 h-3" />
                  {selectedDoc.readTime}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  {selectedDoc.title}
                </h3>
                <p className="text-xs font-semibold text-emerald-700 mt-1">
                  {selectedDoc.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedDoc.summary}
              </p>

              {/* Tag Badges */}
              <div>
                <span className="text-[11px] font-mono text-slate-400 block mb-2">
                  Key Design Patterns & Technologies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedDoc.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture Blueprint Card Preview */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-slate-800">
                  <Cpu className="w-4 h-4 text-slate-700" />
                  <span>Production Reliability Checklist</span>
                </div>
                <ul className="space-y-1.5 text-[11px] text-slate-500 list-disc list-inside">
                  <li>Zero data-loss write guarantees via transactional outbox</li>
                  <li>Multi-region failover tested under chaos engineering</li>
                  <li>End-to-end type safety across backend and client apps</li>
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Code Snippet & Interactive Implementation */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDoc.id + '-code'}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.25 }}
            >
              <CodeViewer
                filename={selectedDoc.codeSnippet.filename}
                language={selectedDoc.codeSnippet.language}
                code={selectedDoc.codeSnippet.code}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
