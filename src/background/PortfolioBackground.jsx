import React from 'react';

const PortfolioBackground = ({ children }) => {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100 p-5 md:pl-10 md:pr-10 md:pt-10 border-2 rounded-[10px] md:rounded-3xl">
      {/* 1. SVG Grid Pattern (Guaranteed render across all Tailwind setups) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* 2. Static Ambient Glowing Orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-3xl" />

      {/* 3. Radial Mask Layer (Focuses light toward center) */}
      <div className="pointer-events-none absolute inset-0 bg-slate-950/60 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* 4. Main Content Wrapper */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PortfolioBackground;