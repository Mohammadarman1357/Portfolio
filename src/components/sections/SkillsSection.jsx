import { motion } from 'framer-motion';
import { Code, Cpu, Database, Layers, ShieldCheck, Sparkles, Zap, Terminal } from 'lucide-react';
import { CORE_SKILLS } from '../../data/techstack';

export default function SkillsSection() {
  const iconMap = [Cpu, Layers, Zap, ShieldCheck];

  return (
    <section id="skills" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto border-t border-slate-200/80">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-slate-200 text-slate-800 border border-slate-300 shadow-xs mb-3">
          <Code className="w-3.5 h-3.5" />
          <span>Core Engineering Skills</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Technical Mastery & Architecture
        </h2>

        <p className="text-sm sm:text-base text-slate-600 mt-2">
          Specialized skills developed over years of building high-scale financial and enterprise systems.
        </p>
      </div>

      {/* Grid of Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CORE_SKILLS.map((skill, idx) => {
          const Icon = iconMap[idx % iconMap.length];
          return (
            <div
              key={idx}
              className="tactile-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-all hover:shadow-md"
            >
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#f1f3f5] flex items-center justify-center text-slate-800 mb-5 shadow-inner border border-slate-200/60">
                  <Icon className="w-5 h-5 text-slate-700" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {skill.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-[11px] font-mono text-slate-400 block mb-2">
                  Specializations:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {skill.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 text-slate-700 border border-slate-200/80 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
