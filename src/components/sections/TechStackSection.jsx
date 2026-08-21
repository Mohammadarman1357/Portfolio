import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Cpu, Server, Database, Sparkles, CheckCircle2 } from 'lucide-react';
import { TECH_STACK } from '../../data/techstack';

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto border-t border-slate-200/80">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-200 text-slate-800 border border-slate-300 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Languages, Frameworks & Tooling
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
            Modern, production-grade tools I use to build scalable, fault-tolerant applications.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-200/80 border border-slate-300/60">
          {TECH_STACK.map((category, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {category.category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tech Cards Grid */}
      <div className="tactile-card rounded-3xl p-6 sm:p-8">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-900">
            {TECH_STACK[activeTab].category} Technologies
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Verified production proficiency and daily workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TECH_STACK[activeTab].technologies.map((tech, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-slate-300 transition-all shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-slate-900">
                    {tech.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                    {tech.level}
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  {tech.desc}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400">Proficiency</span>
                <span className="font-bold text-slate-800">{tech.proficiency}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
