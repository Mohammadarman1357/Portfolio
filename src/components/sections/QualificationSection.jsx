import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Award, CheckCircle2, Calendar } from 'lucide-react';
import { EXPERIENCES, EDUCATION } from '../../data/qualification';

export default function QualificationSection() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="qualification" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto border-t border-slate-200/80">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-200 text-slate-800 border border-slate-300 shadow-xs mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Qualifications & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Experience & Education
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Proven track record of engineering leadership, academic excellence, and continuous growth.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex p-1.5 rounded-2xl bg-slate-200/80 border border-slate-300/60">
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'experience'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work Experience</span>
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'education'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education & Certs</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'experience' ? (
          <motion.div
            key="experience"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={idx}
                className="tactile-card rounded-3xl p-6 sm:p-8 relative overflow-hidden transition-all hover:border-slate-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-slate-900">
                        {exp.role}
                      </span>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                        {exp.company}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                      <span className="mx-1">•</span>
                      <span>{exp.type}</span>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-xl self-start sm:self-auto border border-emerald-200">
                    {exp.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 my-4 leading-relaxed font-normal">
                  {exp.desc}
                </p>

                <div className="space-y-2">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="education"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className="tactile-card rounded-3xl p-6 sm:p-8 relative overflow-hidden transition-all hover:border-slate-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-slate-900">
                        {edu.degree}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold mt-1">
                      <Award className="w-3.5 h-3.5" />
                      <span>{edu.institution}</span>
                      <span className="mx-1 text-slate-300">•</span>
                      <span className="text-slate-500 font-normal">{edu.location}</span>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-xl self-start sm:self-auto border border-slate-200">
                    {edu.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 my-4 leading-relaxed font-normal">
                  {edu.desc}
                </p>

                <div className="space-y-2">
                  {edu.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
