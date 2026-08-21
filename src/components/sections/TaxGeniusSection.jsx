import { motion } from 'framer-motion';
import { ArrowRight, Bot, Cpu, DollarSign, ExternalLink, FileSpreadsheet, Layers, Lightbulb, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { FEATURED_PROJECT, OTHER_PROJECTS } from '../../data/projects';
import TaxCalculator from '../ui/TaxCalculator';

export default function TaxGeniusSection() {
  return (
    <section id="tax-genius" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto border-t border-slate-200/80">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-100/90 text-emerald-800 border border-emerald-200 shadow-xs mb-4">
          <Lightbulb className="w-3.5 h-3.5 text-emerald-600" />
          <span>Flagship Engineering Showcase</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Tax Genius Platform
        </h2>

        <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
          An autonomous AI financial optimization engine designed to analyze millions of transactions, discover latent deductions, and generate IRS-compliant audit defense dossiers in sub-second speeds.
        </p>
      </div>

      {/* Flagship Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {FEATURED_PROJECT.metrics.map((metric, idx) => (
          <div
            key={idx}
            className="tactile-card rounded-2xl p-5 border border-slate-200/80 transition-all hover:translate-y-[-2px]"
          >
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tracking-tight block">
              {metric.value}
            </span>
            <span className="text-xs font-semibold text-slate-700 block mt-1">
              {metric.label}
            </span>
            <span className="text-[11px] text-emerald-600 font-medium block mt-0.5">
              {metric.change}
            </span>
          </div>
        ))}
      </div>

      {/* Interactive Simulator Widget */}
      <div className="my-10">
        <TaxCalculator />
      </div>

      {/* Deep Dive Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        {FEATURED_PROJECT.keyFeatures.map((feat, idx) => (
          <div
            key={idx}
            className="tactile-card rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-slate-300 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                0{idx + 1}
              </div>
              <h3 className="text-base font-bold text-slate-900">{feat.title}</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {feat.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Tech Stack & Architecture Highlights */}
      <div className="tactile-card rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-white to-slate-50 border border-slate-200">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 block mb-1">
              Technology Stack & Architecture
            </span>
            <h4 className="text-xl font-bold text-slate-900">
              Built with Next.js 15, FastAPI, LangChain & PyTorch
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl">
              {FEATURED_PROJECT.architectureHighlight}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 max-w-md">
            {FEATURED_PROJECT.techStack.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-3 py-1 rounded-xl text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Other Projects / Portfolio Showcase */}
      <div className="mt-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-700">
              Additional Engineering Work
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              Production Systems & Open Source
            </h3>
          </div>
          <p className="text-xs text-slate-500">
            Selected distributed systems, DevOps pipelines & Web3 protocols
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OTHER_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="tactile-card rounded-3xl p-6 flex flex-col justify-between hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                    {proj.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    ★ {proj.stars}
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {proj.title}
                </h4>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {proj.desc}
                </p>

                <p className="text-[11px] font-mono text-emerald-700 mt-3 font-medium">
                  {proj.metrics}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {proj.tech.slice(0, 3).map((t, idx) => (
                    <span key={idx} className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  aria-label={`View ${proj.title} on GitHub`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
