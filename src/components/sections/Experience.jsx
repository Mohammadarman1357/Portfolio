import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiArrowUpRight,
  FiCode,
  FiCheckCircle,
} from "react-icons/fi";

import experienceData from "../../data/experience.json";

const Experience = () => {
  const experiences = experienceData?.experience || [];

  const [selectedExperience, setSelectedExperience] = useState(
    experiences[0] || null
  );

  useEffect(() => {
    if (experiences.length > 0 && !selectedExperience) {
      setSelectedExperience(experiences[0]);
    }
  }, [experiences, selectedExperience]);

  if (!experiences.length) {
    return null;
  }

  /* =========================================================
      EXPERIENCE COLOR THEMES
  ========================================================= */
  const experienceThemes = [
    {
      name: "emerald",

      activeCard:
        "border-emerald-200 bg-gradient-to-r from-emerald-50/95 via-white to-white shadow-[0_12px_35px_rgba(16,185,129,0.12)]",

      inactiveCard:
        "border-emerald-100/80 bg-white/80 hover:border-emerald-200 hover:bg-emerald-50/40 hover:shadow-[0_8px_25px_rgba(15,118,110,0.07)]",

      activeLine:
        "bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500",

      activeDot:
        "border-emerald-500 shadow-[0_0_0_5px_rgba(16,185,129,0.10)]",

      inactiveDot:
        "border-emerald-200 group-hover:border-emerald-400",

      activeIcon:
        "border-emerald-200 bg-white text-emerald-600 shadow-sm",

      inactiveIcon:
        "border-emerald-100 bg-emerald-50/70 text-emerald-500 group-hover:border-emerald-200 group-hover:bg-white group-hover:text-emerald-600",

      activeText: "text-slate-900",
      inactiveText: "text-slate-700",

      activeArrow: "text-emerald-500",
      inactiveArrow: "text-slate-300 group-hover:text-emerald-500",

      dateActive: "text-emerald-600",
      dateInactive: "text-slate-400",

      panelBorder: "border-emerald-100",

      panelShadow:
        "shadow-[0_20px_70px_rgba(15,118,110,0.08)]",

      topGradient:
        "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500",

      icon:
        "border-emerald-100 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 text-emerald-600",

      accent: "text-emerald-600",

      activeBadge:
        "border-emerald-200 bg-emerald-50 text-emerald-600",

      pulse: "bg-emerald-500",

      dateBox:
        "border-emerald-100 bg-emerald-50/60",

      dateIcon: "text-emerald-500",

      locationBox:
        "border-teal-100 bg-teal-50/60",

      locationIcon: "text-teal-500",

      divider:
        "bg-gradient-to-r from-emerald-100 via-teal-100 to-transparent",

      sectionIcon: "text-emerald-500",

      bullet:
        "bg-gradient-to-r from-emerald-500 to-teal-500",

      technology:
        "border-emerald-100 bg-emerald-50/60 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600",
    },

    {
      name: "blue",

      activeCard:
        "border-blue-200 bg-gradient-to-r from-blue-50/95 via-white to-white shadow-[0_12px_35px_rgba(59,130,246,0.12)]",

      inactiveCard:
        "border-blue-100/80 bg-white/80 hover:border-blue-200 hover:bg-blue-50/40 hover:shadow-[0_8px_25px_rgba(37,99,235,0.07)]",

      activeLine:
        "bg-gradient-to-b from-blue-500 via-indigo-500 to-cyan-500",

      activeDot:
        "border-blue-500 shadow-[0_0_0_5px_rgba(59,130,246,0.10)]",

      inactiveDot:
        "border-blue-200 group-hover:border-blue-400",

      activeIcon:
        "border-blue-200 bg-white text-blue-600 shadow-sm",

      inactiveIcon:
        "border-blue-100 bg-blue-50/70 text-blue-500 group-hover:border-blue-200 group-hover:bg-white group-hover:text-blue-600",

      activeText: "text-slate-900",
      inactiveText: "text-slate-700",

      activeArrow: "text-blue-500",
      inactiveArrow: "text-slate-300 group-hover:text-blue-500",

      dateActive: "text-blue-600",
      dateInactive: "text-slate-400",

      panelBorder: "border-blue-100",

      panelShadow:
        "shadow-[0_20px_70px_rgba(37,99,235,0.08)]",

      topGradient:
        "bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500",

      icon:
        "border-blue-100 bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 text-blue-600",

      accent: "text-blue-600",

      activeBadge:
        "border-blue-200 bg-blue-50 text-blue-600",

      pulse: "bg-blue-500",

      dateBox:
        "border-blue-100 bg-blue-50/60",

      dateIcon: "text-blue-500",

      locationBox:
        "border-indigo-100 bg-indigo-50/60",

      locationIcon: "text-indigo-500",

      divider:
        "bg-gradient-to-r from-blue-100 via-indigo-100 to-transparent",

      sectionIcon: "text-blue-500",

      bullet:
        "bg-gradient-to-r from-blue-500 to-indigo-500",

      technology:
        "border-blue-100 bg-blue-50/60 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600",
    },

    {
      name: "violet",

      activeCard:
        "border-violet-200 bg-gradient-to-r from-violet-50/95 via-white to-white shadow-[0_12px_35px_rgba(139,92,246,0.12)]",

      inactiveCard:
        "border-violet-100/80 bg-white/80 hover:border-violet-200 hover:bg-violet-50/40 hover:shadow-[0_8px_25px_rgba(124,58,237,0.07)]",

      activeLine:
        "bg-gradient-to-b from-violet-500 via-purple-500 to-fuchsia-500",

      activeDot:
        "border-violet-500 shadow-[0_0_0_5px_rgba(139,92,246,0.10)]",

      inactiveDot:
        "border-violet-200 group-hover:border-violet-400",

      activeIcon:
        "border-violet-200 bg-white text-violet-600 shadow-sm",

      inactiveIcon:
        "border-violet-100 bg-violet-50/70 text-violet-500 group-hover:border-violet-200 group-hover:bg-white group-hover:text-violet-600",

      activeText: "text-slate-900",
      inactiveText: "text-slate-700",

      activeArrow: "text-violet-500",
      inactiveArrow: "text-slate-300 group-hover:text-violet-500",

      dateActive: "text-violet-600",
      dateInactive: "text-slate-400",

      panelBorder: "border-violet-100",

      panelShadow:
        "shadow-[0_20px_70px_rgba(124,58,237,0.08)]",

      topGradient:
        "bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500",

      icon:
        "border-violet-100 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 text-violet-600",

      accent: "text-violet-600",

      activeBadge:
        "border-violet-200 bg-violet-50 text-violet-600",

      pulse: "bg-violet-500",

      dateBox:
        "border-violet-100 bg-violet-50/60",

      dateIcon: "text-violet-500",

      locationBox:
        "border-purple-100 bg-purple-50/60",

      locationIcon: "text-purple-500",

      divider:
        "bg-gradient-to-r from-violet-100 via-purple-100 to-transparent",

      sectionIcon: "text-violet-500",

      bullet:
        "bg-gradient-to-r from-violet-500 to-purple-500",

      technology:
        "border-violet-100 bg-violet-50/60 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600",
    },

    {
      name: "orange",

      activeCard:
        "border-orange-200 bg-gradient-to-r from-orange-50/95 via-white to-white shadow-[0_12px_35px_rgba(249,115,22,0.12)]",

      inactiveCard:
        "border-orange-100/80 bg-white/80 hover:border-orange-200 hover:bg-orange-50/40 hover:shadow-[0_8px_25px_rgba(234,88,12,0.07)]",

      activeLine:
        "bg-gradient-to-b from-orange-500 via-amber-500 to-yellow-500",

      activeDot:
        "border-orange-500 shadow-[0_0_0_5px_rgba(249,115,22,0.10)]",

      inactiveDot:
        "border-orange-200 group-hover:border-orange-400",

      activeIcon:
        "border-orange-200 bg-white text-orange-600 shadow-sm",

      inactiveIcon:
        "border-orange-100 bg-orange-50/70 text-orange-500 group-hover:border-orange-200 group-hover:bg-white group-hover:text-orange-600",

      activeText: "text-slate-900",
      inactiveText: "text-slate-700",

      activeArrow: "text-orange-500",
      inactiveArrow: "text-slate-300 group-hover:text-orange-500",

      dateActive: "text-orange-600",
      dateInactive: "text-slate-400",

      panelBorder: "border-orange-100",

      panelShadow:
        "shadow-[0_20px_70px_rgba(234,88,12,0.08)]",

      topGradient:
        "bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500",

      icon:
        "border-orange-100 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 text-orange-600",

      accent: "text-orange-600",

      activeBadge:
        "border-orange-200 bg-orange-50 text-orange-600",

      pulse: "bg-orange-500",

      dateBox:
        "border-orange-100 bg-orange-50/60",

      dateIcon: "text-orange-500",

      locationBox:
        "border-amber-100 bg-amber-50/60",

      locationIcon: "text-amber-500",

      divider:
        "bg-gradient-to-r from-orange-100 via-amber-100 to-transparent",

      sectionIcon: "text-orange-500",

      bullet:
        "bg-gradient-to-r from-orange-500 to-amber-500",

      technology:
        "border-orange-100 bg-orange-50/60 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600",
    },

    {
      name: "rose",

      activeCard:
        "border-rose-200 bg-gradient-to-r from-rose-50/95 via-white to-white shadow-[0_12px_35px_rgba(244,63,94,0.12)]",

      inactiveCard:
        "border-rose-100/80 bg-white/80 hover:border-rose-200 hover:bg-rose-50/40 hover:shadow-[0_8px_25px_rgba(225,29,72,0.07)]",

      activeLine:
        "bg-gradient-to-b from-rose-500 via-pink-500 to-fuchsia-500",

      activeDot:
        "border-rose-500 shadow-[0_0_0_5px_rgba(244,63,94,0.10)]",

      inactiveDot:
        "border-rose-200 group-hover:border-rose-400",

      activeIcon:
        "border-rose-200 bg-white text-rose-600 shadow-sm",

      inactiveIcon:
        "border-rose-100 bg-rose-50/70 text-rose-500 group-hover:border-rose-200 group-hover:bg-white group-hover:text-rose-600",

      activeText: "text-slate-900",
      inactiveText: "text-slate-700",

      activeArrow: "text-rose-500",
      inactiveArrow: "text-slate-300 group-hover:text-rose-500",

      dateActive: "text-rose-600",
      dateInactive: "text-slate-400",

      panelBorder: "border-rose-100",

      panelShadow:
        "shadow-[0_20px_70px_rgba(225,29,72,0.08)]",

      topGradient:
        "bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500",

      icon:
        "border-rose-100 bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 text-rose-600",

      accent: "text-rose-600",

      activeBadge:
        "border-rose-200 bg-rose-50 text-rose-600",

      pulse: "bg-rose-500",

      dateBox:
        "border-rose-100 bg-rose-50/60",

      dateIcon: "text-rose-500",

      locationBox:
        "border-pink-100 bg-pink-50/60",

      locationIcon: "text-pink-500",

      divider:
        "bg-gradient-to-r from-rose-100 via-pink-100 to-transparent",

      sectionIcon: "text-rose-500",

      bullet:
        "bg-gradient-to-r from-rose-500 to-pink-500",

      technology:
        "border-rose-100 bg-rose-50/60 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600",
    },
  ];

  /* =========================================================
      GET CURRENT THEME
  ========================================================= */
  const selectedIndex = Math.max(
    0,
    experiences.findIndex(
      (experience) => experience.id === selectedExperience?.id
    )
  );

  const currentTheme =
    experienceThemes[selectedIndex % experienceThemes.length];

  return (
    <section
      id="experience"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f5faf8]
        py-10
        py-20
      "
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main soft gradient */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_8%_12%,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_92%_18%,rgba(20,184,166,0.10),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(6,182,212,0.08),transparent_32%)]
          "
        />

        {/* Top-left emerald glow */}
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, 20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[-200px]
            top-[-190px]
            h-[480px]
            w-[480px]
            rounded-full
            bg-emerald-200/25
            blur-[125px]
          "
        />

        {/* Top-right teal glow */}
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-190px]
            top-[-100px]
            h-[450px]
            w-[450px]
            rounded-full
            bg-teal-200/25
            blur-[125px]
          "
        />

        {/* Bottom cyan glow */}
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, -25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-220px]
            left-[35%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-200/20
            blur-[130px]
          "
        />

        {/* Center soft light */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[600px]
            w-[800px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/75
            blur-[120px]
          "
        />

        {/* Subtle dot pattern */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.25]
            [background-image:radial-gradient(#65a88f_0.8px,transparent_0.8px)]
            [background-size:30px_30px]
            [mask-image:radial-gradient(ellipse_at_center,black_0%,black_55%,transparent_100%)]
          "
        />

        {/* Decorative top line */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-px
            w-[75%]
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-emerald-300/50
            to-transparent
          "
        />

        {/* Top fade */}
        <div
          className="
            absolute
            inset-x-0
            top-0
            h-40
            bg-gradient-to-b
            from-white
            via-[#f5faf8]/80
            to-transparent
          "
        />

        {/* Bottom fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-40
            bg-gradient-to-t
            from-white
            via-[#f5faf8]/80
            to-transparent
          "
        />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =======================================================
            SECTION HEADER
        ======================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-center md:mb-10"
        >
          <div className="flex flex-col text-center">
            <span
              className="
                text-[20px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-emerald-600
              "
            >
              My Professional Journey
            </span>

            <span
              className="
                my-4
                text-4xl
                font-bold
                tracking-tight
                text-slate-900
                md:text-5xl
              "
            >
              Working Experience
            </span>
          </div>
        </motion.div>

        {/* =======================================================
            EXPERIENCE LAYOUT
        ======================================================= */}
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1180px]
            grid-cols-1
            gap-6
            lg:grid-cols-[360px_minmax(0,1fr)]
            lg:gap-8
          "
        >
          {/* =====================================================
              LEFT EXPERIENCE LIST
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            {/* Vertical timeline */}
            <div
              className="
                absolute
                bottom-6
                left-[27px]
                top-6
                hidden
                w-px
                bg-gradient-to-b
                from-emerald-200
                via-teal-200
                to-transparent
                sm:block
              "
            />

            <div className="space-y-3">
              {experiences.map((experience, index) => {
                const isActive =
                  selectedExperience?.id === experience.id;

                const theme =
                  experienceThemes[index % experienceThemes.length];

                return (
                  <motion.button
                    key={experience.id}
                    type="button"
                    onClick={() => setSelectedExperience(experience)}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                    whileHover={{ x: 4 }}
                    className={`
                      group
                      relative
                      flex
                      w-full
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      p-4
                      text-left
                      transition-all
                      duration-300
                      sm:p-5

                      ${
                        isActive
                          ? theme.activeCard
                          : theme.inactiveCard
                      }
                    `}
                  >
                    {/* Active indicator */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          layoutId="experience-active-line"
                          className={`
                            absolute
                            bottom-3
                            left-0
                            top-3
                            w-1
                            rounded-r-full
                            ${theme.activeLine}
                          `}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 35,
                          }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Timeline dot */}
                    <div
                      className={`
                        relative
                        z-10
                        hidden
                        h-4
                        w-4
                        shrink-0
                        rounded-full
                        border-4
                        bg-white
                        transition-all
                        duration-300
                        sm:block

                        ${
                          isActive
                            ? theme.activeDot
                            : theme.inactiveDot
                        }
                      `}
                    />

                    {/* Experience icon */}
                    <div
                      className={`
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        transition-all
                        duration-300
                        sm:h-14
                        sm:w-14

                        ${
                          isActive
                            ? theme.activeIcon
                            : theme.inactiveIcon
                        }
                      `}
                    >
                      <FiBriefcase className="text-xl sm:text-2xl" />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <h3
                          className={`
                            line-clamp-2
                            text-sm
                            font-bold
                            leading-5
                            sm:text-base

                            ${
                              isActive
                                ? theme.activeText
                                : theme.inactiveText
                            }
                          `}
                        >
                          {experience.role}
                        </h3>

                        <FiArrowUpRight
                          className={`
                            mt-0.5
                            hidden
                            shrink-0
                            text-lg
                            transition-all
                            duration-300
                            sm:block

                            ${
                              isActive
                                ? theme.activeArrow
                                : theme.inactiveArrow
                            }
                          `}
                        />
                      </div>

                      <p className="mt-1 truncate text-xs font-medium text-slate-500 sm:text-sm">
                        {experience.company}
                      </p>

                      <p
                        className={`
                          mt-1.5
                          text-xs
                          font-medium

                          ${
                            isActive
                              ? theme.dateActive
                              : theme.dateInactive
                          }
                        `}
                      >
                        {experience.startDate} — {experience.endDate}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT DETAILS PANEL
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="relative min-h-[500px]"
          >
            <div
              className={`
                sticky
                top-24
                overflow-hidden
                rounded-3xl
                border
                bg-white
                transition-all
                duration-500
                ${currentTheme.panelBorder}
                ${currentTheme.panelShadow}
              `}
            >
              {/* Top gradient line */}
              <motion.div
                key={`gradient-${selectedExperience?.id}`}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className={`
                  h-1
                  w-full
                  ${currentTheme.topGradient}
                `}
              />

              <AnimatePresence mode="wait">
                {selectedExperience && (
                  <motion.div
                    key={selectedExperience.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 sm:p-8 lg:p-10"
                  >
                    {/* =================================================
                        HEADER
                    ================================================= */}
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex min-w-0 items-start gap-4">
                        {/* Company / role icon */}
                        <motion.div
                          key={`icon-${selectedExperience.id}`}
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className={`
                            flex
                            h-14
                            w-14
                            shrink-0
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            shadow-sm
                            transition-all
                            duration-500
                            sm:h-16
                            sm:w-16
                            ${currentTheme.icon}
                          `}
                        >
                          <FiBriefcase className="text-2xl sm:text-3xl" />
                        </motion.div>

                        <div className="min-w-0">
                          <p
                            className={`
                              mb-1
                              text-xs
                              font-bold
                              uppercase
                              tracking-[0.15em]
                              ${currentTheme.accent}
                            `}
                          >
                            {selectedExperience.type}
                          </p>

                          <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                            {selectedExperience.role}
                          </h3>

                          <p className="mt-1.5 text-sm font-medium text-slate-500 sm:text-base">
                            {selectedExperience.company}
                          </p>
                        </div>
                      </div>

                      {/* Current badge */}
                      {selectedExperience.endDate
                        ?.toLowerCase()
                        .includes("present") && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className={`
                            inline-flex
                            w-fit
                            items-center
                            gap-2
                            rounded-full
                            border
                            px-3
                            py-1.5
                            text-xs
                            font-semibold
                            transition-colors
                            duration-500
                            ${currentTheme.activeBadge}
                          `}
                        >
                          <span
                            className={`
                              h-1.5
                              w-1.5
                              animate-pulse
                              rounded-full
                              ${currentTheme.pulse}
                            `}
                          />
                          Active
                        </motion.span>
                      )}
                    </div>

                    {/* =================================================
                        META
                    ================================================= */}
                    <div className="mt-7 flex flex-wrap gap-3">
                      <div
                        className={`
                          inline-flex
                          items-center
                          gap-2
                          rounded-xl
                          border
                          px-3.5
                          py-2
                          text-xs
                          font-semibold
                          text-slate-600
                          transition-all
                          duration-500
                          sm:text-sm
                          ${currentTheme.dateBox}
                        `}
                      >
                        <FiCalendar
                          className={currentTheme.dateIcon}
                        />

                        <span>
                          {selectedExperience.startDate} —{" "}
                          {selectedExperience.endDate}
                        </span>
                      </div>

                      <div
                        className={`
                          inline-flex
                          items-center
                          gap-2
                          rounded-xl
                          border
                          px-3.5
                          py-2
                          text-xs
                          font-semibold
                          text-slate-600
                          transition-all
                          duration-500
                          sm:text-sm
                          ${currentTheme.locationBox}
                        `}
                      >
                        <FiMapPin
                          className={currentTheme.locationIcon}
                        />

                        <span>{selectedExperience.type}</span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div
                      className={`
                        my-8
                        h-px
                        transition-all
                        duration-500
                        ${currentTheme.divider}
                      `}
                    />

                    {/* =================================================
                        DESCRIPTION
                    ================================================= */}
                    <div>
                      <div className="mb-4 flex items-center gap-2">
                        <FiCode
                          className={`text-lg ${currentTheme.sectionIcon}`}
                        />

                        <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-slate-800">
                          Overview
                        </h4>
                      </div>

                      <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
                        {selectedExperience.description}
                      </p>
                    </div>

                    {/* =================================================
                        RESPONSIBILITIES
                    ================================================= */}
                    {selectedExperience.responsibilities?.length > 0 && (
                      <div className="mt-8">
                        <div className="mb-5 flex items-center gap-2">
                          <FiCheckCircle
                            className={`text-lg ${currentTheme.sectionIcon}`}
                          />

                          <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-slate-800">
                            Key Responsibilities
                          </h4>
                        </div>

                        <div className="space-y-3.5">
                          {selectedExperience.responsibilities.map(
                            (item, index) => (
                              <motion.div
                                key={index}
                                initial={{
                                  opacity: 0,
                                  x: -8,
                                }}
                                animate={{
                                  opacity: 1,
                                  x: 0,
                                }}
                                transition={{
                                  delay: index * 0.05,
                                }}
                                className="flex items-start gap-3"
                              >
                                <span
                                  className={`
                                    mt-2
                                    h-1.5
                                    w-1.5
                                    shrink-0
                                    rounded-full
                                    ${currentTheme.bullet}
                                  `}
                                />

                                <p className="text-sm leading-6 text-slate-600 sm:text-[15px]">
                                  {item}
                                </p>
                              </motion.div>
                            )
                          )}
                        </div>
                      </div>
                    )}

                    {/* =================================================
                        TECHNOLOGIES
                    ================================================= */}
                    {selectedExperience.technologies?.length > 0 && (
                      <div className="mt-8">
                        <div className="mb-4 flex items-center gap-2">
                          <FiCode
                            className={`text-lg ${currentTheme.sectionIcon}`}
                          />

                          <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-slate-800">
                            Technologies
                          </h4>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {selectedExperience.technologies.map(
                            (technology, index) => (
                              <motion.span
                                key={technology}
                                initial={{
                                  opacity: 0,
                                  scale: 0.9,
                                }}
                                animate={{
                                  opacity: 1,
                                  scale: 1,
                                }}
                                transition={{
                                  delay: index * 0.035,
                                }}
                                className={`
                                  rounded-lg
                                  border
                                  px-3
                                  py-1.5
                                  text-xs
                                  font-semibold
                                  text-slate-600
                                  transition-all
                                  duration-200
                                  ${currentTheme.technology}
                                `}
                              >
                                {technology}
                              </motion.span>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;