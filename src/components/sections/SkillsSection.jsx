import React from "react";
import skills from "../../data/skills.json";

/*
|--------------------------------------------------------------------------
| Skill Card Colors
|--------------------------------------------------------------------------
*/

const colors = [
  {
    bg: "#cffafe",
    border: "#67e8f9",
    glow: "rgba(6, 182, 212, 0.45)",
  },
  {
    bg: "#f3e8ff",
    border: "#d8b4fe",
    glow: "rgba(168, 85, 247, 0.45)",
  },
  {
    bg: "#ffedd5",
    border: "#fdba74",
    glow: "rgba(249, 115, 22, 0.45)",
  },
  {
    bg: "#d1fae5",
    border: "#6ee7b7",
    glow: "rgba(16, 185, 129, 0.45)",
  },
  {
    bg: "#dbeafe",
    border: "#93c5fd",
    glow: "rgba(59, 130, 246, 0.45)",
  },
  {
    bg: "#fce7f3",
    border: "#f9a8d4",
    glow: "rgba(236, 72, 153, 0.45)",
  },
  {
    bg: "#ede9fe",
    border: "#c4b5fd",
    glow: "rgba(139, 92, 246, 0.45)",
  },
  {
    bg: "#fef3c7",
    border: "#fcd34d",
    glow: "rgba(234, 179, 8, 0.45)",
  },
  {
    bg: "#ccfbf1",
    border: "#5eead4",
    glow: "rgba(20, 184, 166, 0.45)",
  },
  {
    bg: "#fee2e2",
    border: "#fca5a5",
    glow: "rgba(239, 68, 68, 0.45)",
  },
  {
    bg: "#e0e7ff",
    border: "#a5b4fc",
    glow: "rgba(99, 102, 241, 0.45)",
  },
  {
    bg: "#ecfccb",
    border: "#bef264",
    glow: "rgba(132, 204, 22, 0.45)",
  },
];

/*
|--------------------------------------------------------------------------
| Skill Card
|--------------------------------------------------------------------------
*/

const SkillCard = ({ skill, index }) => {
  const color = colors[index % colors.length];

  return (
    <div
      className="
        skill-card
        group
        relative
        flex
        h-[100px]
        w-[270px]
        shrink-0
        items-center
        justify-center
        gap-5
        overflow-visible
        rounded-2xl
        border
        px-6
        py-4
        backdrop-blur-sm
        transition-all
        duration-500
        hover:-translate-y-1.5
        hover:scale-[1.035]

        /* Mobile */
        max-[640px]:h-[78px]
        max-[640px]:w-[210px]
        max-[640px]:gap-3
        max-[640px]:rounded-xl
        max-[640px]:px-3.5
        max-[640px]:py-3
      "
      style={{
        backgroundColor: color.bg,
        borderColor: color.border,
        "--card-glow": color.glow,
      }}
    >
      {/* Inner Border */}
      <span
        className="
          pointer-events-none
          absolute
          inset-[1px]
          rounded-2xl
          border
          border-white/70
          max-[640px]:rounded-xl
        "
      />

      {/* Top Highlight */}
      <span
        className="
          pointer-events-none
          absolute
          left-[10%]
          right-[10%]
          top-0
          h-px
          rounded-full
          bg-white
          opacity-80
          blur-[1px]
        "
      />

      {/* Icon */}
      <div
        className="
          relative
          z-10
          flex
          h-16
          w-16
          shrink-0
          items-center
          justify-center
          overflow-hidden
          rounded-xl
          p-1
          transition-all
          duration-500
          group-hover:scale-110

          /* Mobile Icon */
          max-[640px]:h-12
          max-[640px]:w-12
          max-[640px]:rounded-lg
          max-[640px]:p-0.5
        "
      >
        <img
          src={skill.image}
          alt={skill.name}
          loading="lazy"
          draggable="false"
          className="
            h-full
            w-full
            object-contain
            transition-transform
            duration-500
            group-hover:scale-105
          "
          onError={(e) => {
            e.currentTarget.style.opacity = "0.25";
          }}
        />
      </div>

      {/* Skill Name */}
      <span
        className="
          relative
          z-10
          whitespace-nowrap
          text-xl
          font-extrabold
          tracking-wide
          text-slate-800
          transition-colors
          duration-300
          group-hover:text-slate-950

          /* Mobile Text */
          max-[640px]:text-[14px]
          max-[640px]:tracking-wide
        "
      >
        {skill.name}
      </span>
    </div>
  );
};

/*
|--------------------------------------------------------------------------
| Skill Row
|--------------------------------------------------------------------------
*/

const SkillRow = ({
  items,
  direction = "left",
  duration = 32,
}) => {
  /*
   * Duplicate items for seamless marquee animation.
   */
  const duplicatedItems = [...items, ...items];

  return (
    <div
      className="
        skill-row
        relative
        w-full
        overflow-x-hidden
        overflow-y-visible
        py-3
      "
    >
      {/* Left Fade */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-20
          h-full
          w-14
          bg-gradient-to-r
          from-[#eeeeee]
          to-transparent
          md:w-24
        "
      />

      {/* Right Fade */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          z-20
          h-full
          w-14
          bg-gradient-to-l
          from-[#eeeeee]
          to-transparent
          md:w-24
        "
      />

      {/* Moving Track */}
      <div
        className={`skill-track ${direction === "left"
            ? "skill-scroll-left"
            : "skill-scroll-right"
          }`}
        style={{
          "--skill-duration": `${duration}s`,
        }}
      >
        {duplicatedItems.map((skill, index) => (
          <SkillCard
            key={`${skill.name}-${direction}-${index}`}
            skill={skill}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

/*
|--------------------------------------------------------------------------
| Main Skills Section
|--------------------------------------------------------------------------
*/

const SkillsSection = () => {
  /*
   * Convert all categories into one array.
   */
  const allSkills = Object.values(skills).flat();

  /*
   * Divide skills into 3 rows.
   */
  const row1 = allSkills.filter(
    (_, index) => index % 3 === 0
  );

  const row2 = allSkills.filter(
    (_, index) => index % 3 === 1
  );

  const row3 = allSkills.filter(
    (_, index) => index % 3 === 2
  );

  return (
    <section
      id="skills"
      className="
        skills-section
        relative
        isolate
        block
        w-full
        min-w-0
        max-w-full
        overflow-x-hidden
        overflow-y-visible
        bg-[#eeeeee]
        py-16
        md:py-20
      "
    >
      {/* ================================================================
          GRID BACKGROUND
      ================================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          h-full
          w-full
          overflow-hidden
          opacity-80
        "
        style={{
          backgroundImage: `
            linear-gradient(
              #d4d4d4 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              #d4d4d4 1px,
              transparent 1px
            )
          `,
          backgroundSize: "45px 45px",
        }}
      />

      {/* Soft Overlay */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          h-full
          w-full
          overflow-hidden
          bg-white/10
        "
      />

      {/* ================================================================
          CONTENT
      ================================================================= */}

      <div
        className="
          relative
          z-10
          block
          w-full
          min-w-0
          max-w-full
          overflow-hidden
        "
      >
        {/* ==============================================================
            SECTION TITLE
        ============================================================== */}

        {/* SECTION HEADER */}
        <div className="mb-10 md:mb-14 text-center flex flex-col">
          <span
            className="
              text-[20px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-violet-600
            "
          >
            My Expertise
          </span>

          <span
            className="
              my-4
              text-4xl
              font-bold
              tracking-tight
              text-black
              md:text-5xl
            "
          >
           Skills & Technologies
          </span>

        </div>


        {/* ==============================================================
            ROW 1 — LEFT
        ============================================================== */}

        <SkillRow
          items={row1}
          direction="left"
          duration={32}
        />

        {/* ==============================================================
            ROW 2 — RIGHT
        ============================================================== */}

        <SkillRow
          items={row2}
          direction="right"
          duration={35}
        />

        {/* ==============================================================
            ROW 3 — LEFT
        ============================================================== */}

        <SkillRow
          items={row3}
          direction="left"
          duration={38}
        />
      </div>

      {/* ================================================================
          ANIMATION + HOVER STYLES
      ================================================================= */}

      <style>{`

        /* ==============================================================
           GLOBAL WIDTH PROTECTION
        ============================================================== */

        .skills-section,
        .skills-section * {
          box-sizing: border-box;
        }

        .skills-section {
          width: 100%;
          max-width: 100%;
          min-width: 0;
          overflow-x: hidden;
        }

        .skill-row {
          position: relative;
          width: 100%;
          max-width: 100%;
          min-width: 0;
          overflow-x: hidden;
          overflow-y: visible;
        }

        /* ==============================================================
           MOVING TRACK
        ============================================================== */

        .skill-track {
          display: flex;
          width: max-content;
          max-width: none;
          min-width: max-content;
          gap: 28px;
          flex-shrink: 0;
          will-change: transform;
          backface-visibility: hidden;
          transform: translateZ(0);
        }

        /* ==============================================================
           LEFT ANIMATION
        ============================================================== */

        @keyframes skillScrollLeft {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        /* ==============================================================
           RIGHT ANIMATION
        ============================================================== */

        @keyframes skillScrollRight {
          from {
            transform: translate3d(-50%, 0, 0);
          }

          to {
            transform: translate3d(0, 0, 0);
          }
        }

        /* ==============================================================
           APPLY ANIMATION
        ============================================================== */

        .skill-scroll-left {
          animation:
            skillScrollLeft
            var(--skill-duration)
            linear
            infinite;
        }

        .skill-scroll-right {
          animation:
            skillScrollRight
            var(--skill-duration)
            linear
            infinite;
        }

        /* ==============================================================
           NORMAL CARD SHADOW
        ============================================================== */

        .skill-card {
          box-shadow:
            0 8px 22px rgba(0, 0, 0, 0.12);
        }

        /* ==============================================================
           CARD HOVER
        ============================================================== */

        .skill-card:hover {
          box-shadow:
            0 10px 25px rgba(0, 0, 0, 0.14),
            0 0 12px var(--card-glow),
            0 0 28px var(--card-glow);
        }

        /* ==============================================================
           PAUSE ROW WHEN HOVERING
        ============================================================== */

        .skill-track:hover {
          animation-play-state: paused;
        }

        /* ==============================================================
           DESKTOP
        ============================================================== */

        @media (min-width: 1024px) {
          .skill-track {
            gap: 34px;
          }
        }

        /* ==============================================================
           TABLET
        ============================================================== */

        @media (min-width: 641px) and (max-width: 1023px) {
          .skill-track {
            gap: 24px;
          }
        }

        /* ==============================================================
           MOBILE
        ============================================================== */

        @media (max-width: 640px) {

          .skill-track {
            gap: 14px;
          }

          .skill-scroll-left {
            animation-duration: 26s;
          }

          .skill-scroll-right {
            animation-duration: 28s;
          }

          .skill-card:hover {
            transform: translateY(-3px) scale(1.02);
          }
        }

        /* ==============================================================
           VERY SMALL MOBILE
        ============================================================== */

        @media (max-width: 380px) {

          .skill-card {
            width: 195px;
            height: 74px;
            gap: 10px;
            padding-left: 12px;
            padding-right: 12px;
          }

          .skill-card span:last-child {
            font-size: 13px;
          }

          .skill-card > div {
            width: 44px;
            height: 44px;
          }

          .skill-track {
            gap: 12px;
          }
        }

        /* ==============================================================
           REDUCED MOTION
        ============================================================== */

        @media (prefers-reduced-motion: reduce) {

          .skill-scroll-left,
          .skill-scroll-right {
            animation: none;
            transform: translate3d(0, 0, 0);
          }

        }

      `}</style>
    </section>
  );
};

export default SkillsSection;