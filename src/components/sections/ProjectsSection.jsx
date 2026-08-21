import { motion } from 'framer-motion';
import { Folder, ExternalLink, Lightbulb, Sparkles, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import { FEATURED_PROJECT, OTHER_PROJECTS } from '../../data/projects';
import TaxCalculator from '../ui/TaxCalculator';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto border-t border-slate-200/80">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-100/90 text-emerald-800 border border-emerald-200 shadow-xs mb-3">
          <Folder className="w-3.5 h-3.5 text-emerald-600" />
          <span>Featured Portfolio Projects</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Selected Engineering Work
        </h2>

        <p className="text-sm sm:text-base text-slate-600 mt-2">
          Production systems, AI platforms, and high-throughput architectures built from the ground up.
        </p>
      </div>

      {/* Flagship Showcase: Tax Genius */}
      <div className="mb-16">
        <div className="tactile-card rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-white to-slate-50/70 border border-slate-200 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                  {FEATURED_PROJECT.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {FEATURED_PROJECT.category}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {FEATURED_PROJECT.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {FEATURED_PROJECT.tagline}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={FEATURED_PROJECT.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs transition-all active:scale-95"
              >
                <span>GitHub Repo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 my-6 leading-relaxed">
            {FEATURED_PROJECT.overview}
          </p>

          {/* Interactive Calculator Demo */}
          <TaxCalculator />
        </div>
      </div>

      {/* Additional Projects Grid */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Other Production Systems & Open Source
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Observability, node-based studios, and DeFi protocols
            </p>
          </div>
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
