import { motion } from 'framer-motion';
import { ArrowRight, Code2, Cpu, Database, FileText, Layers, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { useLenis } from '../animations/SmoothScrollProvider';

export default function HomeSection() {
  const { scrollTo } = useLenis() || {};

  const stats = [
    { label: 'Years Engineering Experience', value: '6+', suffix: '' },
    { label: 'Calculated Tax Savings Delivered', value: '$14.2M', suffix: '+' },
    { label: 'Telemetry & API Requests / Day', value: '50M', suffix: '+' },
    { label: 'Production Uptime Record', value: '99.98', suffix: '%' },
  ];

  const corePillars = [
    {
      icon: Cpu,
      title: 'AI & Neural Systems',
      desc: 'Building autonomous agents, LLM pipelines, and multimodal document processors.',
      badge: 'GenAI & LangChain',
    },
    {
      icon: Layers,
      title: 'Skeuomorphic & Fluid Frontend',
      desc: 'Crafting 60fps micro-interactions, tactile glassmorphic interfaces, and design systems.',
      badge: 'React 19 & Tailwind',
    },
    {
      icon: Database,
      title: 'Resilient Cloud Backends',
      desc: 'High-throughput microservices, event-driven streaming, and zero-loss financial ledgers.',
      badge: 'Python & Node.js',
    },
  ];

  return (
    <section id="home" className="pt-24 sm:pt-28 pb-20 px-4 sm:px-8 max-w-6xl mx-auto">
      {/* Hero Header Area */}
      <div className="text-center max-w-3xl mx-auto pt-6 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-slate-200/80 shadow-xs text-slate-800 mb-6"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Lead Full-Stack & AI Systems Engineer</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]"
        >
          Architecting High-Impact <br />
          <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-emerald-600 bg-clip-text text-transparent">
            AI & Financial Systems
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
        >
          I design and scale distributed microservices, tactile skeuomorphic interfaces, and autonomous financial platforms like <span className="font-semibold text-slate-800">Tax Genius</span> that process millions of records with mathematical precision.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <button
            onClick={() => scrollTo ? scrollTo('#tax-genius') : document.getElementById('tax-genius')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-b from-[#343a40] to-[#1e2529] hover:from-[#2a2f34] hover:to-[#14171a] shadow-lg shadow-slate-900/10 transition-all hover:scale-105 active:scale-95 border border-slate-700/50"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Explore Tax Genius</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => scrollTo ? scrollTo('#docs') : document.getElementById('docs')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-sm transition-all hover:scale-105 active:scale-95"
          >
            <FileText className="w-4 h-4 text-slate-500" />
            <span>View Architecture Docs</span>
          </button>
        </motion.div>
      </div>

      {/* Metric Counters Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 my-10">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="tactile-card rounded-2xl p-5 sm:p-6 text-center transition-all hover:translate-y-[-2px]"
          >
            <p className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-mono tracking-tight">
              {stat.value}{stat.suffix}
            </p>
            <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Engineering Pillars */}
      <div className="my-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-2">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-700">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Engineered for Resilience & Scale
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-sm">
            Bridging complex algorithms and machine learning with elegant, ergonomic user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {corePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="tactile-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between group hover:border-slate-300 transition-all hover:shadow-md"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#f1f3f5] flex items-center justify-center text-slate-800 mb-5 shadow-inner border border-slate-200/60 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 text-slate-700" />
                  </div>

                  <span className="text-[11px] font-mono font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    {pillar.badge}
                  </span>

                  <h3 className="text-lg font-bold text-slate-900 mt-3 mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
