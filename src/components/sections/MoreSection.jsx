import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, Download, Layers, Mail, MapPin, MessageSquare, Send, Sparkles, UserCheck } from 'lucide-react';
import { EXPERIENCES, TESTIMONIALS } from '../../data/experience';
import { SKILL_CATEGORIES } from '../../data/skills';
import confetti from 'canvas-confetti';

export default function MoreSection() {
  const [activeSkillCategory, setActiveSkillCategory] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'ai-system',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 70,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {}
    }, 600);
  };

  return (
    <section id="more" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto border-t border-slate-200/80">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-slate-200 text-slate-800 border border-slate-300 shadow-xs mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Experience, Skills & Collaboration</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Background & Technical Mastery
        </h2>

        <p className="text-sm sm:text-base text-slate-600 mt-2">
          A track record of engineering leadership, deep domain expertise, and satisfied engineering partners.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="mb-20">
        <div className="flex items-center gap-2 mb-8">
          <Briefcase className="w-5 h-5 text-slate-700" />
          <h3 className="text-2xl font-bold text-slate-900">
            Career Timeline & Impact
          </h3>
        </div>

        <div className="space-y-6">
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
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
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
        </div>
      </div>

      {/* Skills Matrix */}
      <div className="mb-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-slate-700" />
              <h3 className="text-2xl font-bold text-slate-900">
                Skills & Tech Stack Matrix
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Select a domain to inspect verified competencies and years of production experience.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-200/80 border border-slate-300/60">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSkillCategory(idx)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeSkillCategory === idx
                    ? 'bg-slate-900 text-white shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.category.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="tactile-card rounded-3xl p-6 sm:p-8">
          <div className="mb-6">
            <h4 className="text-lg font-bold text-slate-900">
              {SKILL_CATEGORIES[activeSkillCategory].category}
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              {SKILL_CATEGORIES[activeSkillCategory].description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SKILL_CATEGORIES[activeSkillCategory].skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-slate-300 transition-all shadow-2xs flex flex-col justify-between"
              >
                <span className="text-sm font-semibold text-slate-800">
                  {skill.name}
                </span>
                <div className="flex items-center justify-between mt-3 text-[11px] font-mono">
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                    {skill.level}
                  </span>
                  <span className="text-slate-400">
                    {skill.years}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-20">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h3 className="text-2xl font-bold text-slate-900">
            Endorsements & Testimonials
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            What leaders and engineering peers say about working with Mohammad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="tactile-card rounded-3xl p-6 flex flex-col justify-between"
            >
              <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-100">
                <div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shadow-xs">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{t.author}</h4>
                  <p className="text-[11px] text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact & Consultation Form */}
      <div className="tactile-card rounded-3xl p-6 sm:p-10 relative overflow-hidden border border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-700">
              Let's Build Something Exceptional
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Initiate a Project or Consultation
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Whether you need to architect an autonomous AI financial system, scale an existing distributed backend, or engineer a high-fidelity frontend, I am available for select high-impact advisory and engineering contracts.
            </p>

            <div className="pt-4 space-y-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>NDA & Confidentiality Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Fast 24-Hour Response Time</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-emerald-900">Message Received!</h4>
                <p className="text-xs text-emerald-700 max-w-sm mx-auto">
                  Thank you for reaching out. I have received your message and will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-white text-emerald-800 border border-emerald-300 hover:bg-emerald-100 transition-colors"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Project Domain
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  >
                    <option value="ai-system">AI & Autonomous System Architecture</option>
                    <option value="fintech">FinTech / Tax Intelligence System</option>
                    <option value="fullstack">Full-Stack React & Cloud Platform</option>
                    <option value="consultation">Technical Advisory / Code Review</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Project Details / Scope
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your goals, timeline, and technical constraints..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-b from-[#343a40] to-[#1e2529] hover:from-[#2a2f34] hover:to-[#14171a] shadow-md transition-all active:scale-98 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Transmitting...' : 'Send Project Inquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
