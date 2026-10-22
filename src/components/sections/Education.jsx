import React, {
    useEffect,
    useRef,
    useState,
} from "react";

import {
    motion,
    AnimatePresence,
    useScroll,
    useTransform,
} from "framer-motion";

import {
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaAward,
} from "react-icons/fa";

import educationData from "../../data/education.json";
import { MdCastForEducation } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa6";

// ============================================================================
// COLOR THEMES
// ============================================================================

const themes = [
    {
        border: "border-blue-100",
        hoverBorder: "hover:border-blue-300",
        gradient: "from-blue-50/80 via-white to-indigo-50/50",
        badge: "bg-blue-50 text-blue-600 border-blue-100",
        accent: "bg-blue-600",
        text: "text-blue-600",
        logoBg: "bg-blue-50",
        logoBorder: "border-blue-200",
        glow: "shadow-blue-100/70",
    },

    {
        border: "border-emerald-100",
        hoverBorder: "hover:border-emerald-300",
        gradient: "from-emerald-50/80 via-white to-teal-50/50",
        badge: "bg-emerald-50 text-emerald-600 border-emerald-100",
        accent: "bg-emerald-600",
        text: "text-emerald-600",
        logoBg: "bg-emerald-50",
        logoBorder: "border-emerald-200",
        glow: "shadow-emerald-100/70",
    },

    {
        border: "border-violet-100",
        hoverBorder: "hover:border-violet-300",
        gradient: "from-violet-50/80 via-white to-purple-50/50",
        badge: "bg-violet-50 text-violet-600 border-violet-100",
        accent: "bg-violet-600",
        text: "text-violet-600",
        logoBg: "bg-violet-50",
        logoBorder: "border-violet-200",
        glow: "shadow-violet-100/70",
    },
];

// ============================================================================
// EDUCATION COMPONENT
// ============================================================================

const Education = () => {
    const sectionRef = useRef(null);

    // --------------------------------------------------------------------------
    // Active education index
    // --------------------------------------------------------------------------

    const [activeIndex, setActiveIndex] = useState(0);

    // --------------------------------------------------------------------------
    // Refs for every education card
    // --------------------------------------------------------------------------

    const itemRefs = useRef([]);

    // --------------------------------------------------------------------------
    // Scroll progress
    // --------------------------------------------------------------------------

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    // --------------------------------------------------------------------------
    // Timeline active line
    // --------------------------------------------------------------------------

    const progressHeight = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", "100%"]
    );

    // --------------------------------------------------------------------------
    // Moving logo position
    // --------------------------------------------------------------------------

    const iconPosition = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", "100%"]
    );

    // ==========================================================================
    // DETECT WHICH EDUCATION IS CURRENTLY IN THE VIEWPORT
    // ==========================================================================

    useEffect(() => {
        const observers = [];

        itemRefs.current.forEach((item, index) => {
            if (!item) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveIndex(index);
                        }
                    });
                },
                {
                    threshold: 0.45,
                    rootMargin: "-15% 0px -35% 0px",
                }
            );

            observer.observe(item);
            observers.push(observer);
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, []);

    // ==========================================================================
    // ACTIVE EDUCATION
    // ==========================================================================

    const activeEducation =
        educationData[activeIndex] || educationData[0];

    const activeTheme =
        themes[activeIndex % themes.length];

    return (
        <section
            ref={sectionRef}
            id="qualification"
            className="
        relative
        w-full
        overflow-hidden
        pb-20
        sm:pb-24
        lg:pb-28
      "
            style={{
                backgroundColor: "#fbfcfe",
                backgroundImage: `
                    linear-gradient(rgba(15, 23, 42, 0.025) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(15, 23, 42, 0.025) 1px, transparent 1px),

                    linear-gradient(rgba(59, 130, 246, 0.018) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(59, 130, 246, 0.018) 1px, transparent 1px),

                    radial-gradient(circle at 15% 20%, rgba(59, 130, 246, 0.055) 0, transparent 18%),
                    radial-gradient(circle at 82% 35%, rgba(16, 185, 129, 0.045) 0, transparent 20%),
                    radial-gradient(circle at 65% 80%, rgba(139, 92, 246, 0.05) 0, transparent 22%),

                    radial-gradient(circle at 8% 12%, rgba(71, 85, 105, 0.12) 0 1px, transparent 1.5px),
                    radial-gradient(circle at 25% 45%, rgba(71, 85, 105, 0.1) 0 1px, transparent 1.5px),
                    radial-gradient(circle at 72% 18%, rgba(71, 85, 105, 0.1) 0 1px, transparent 1.5px),
                    radial-gradient(circle at 91% 68%, rgba(71, 85, 105, 0.1) 0 1px, transparent 1.5px)
                `,
                backgroundSize: `
                    48px 48px,
                    48px 48px,

                    144px 144px,
                    144px 144px,

                    100% 100%,
                    100% 100%,
                    100% 100%,

                    180px 180px,
                    230px 230px,
                    210px 210px,
                    260px 260px
                `,
                backgroundPosition: `
                    0 0,
                    0 0,

                    0 0,
                    0 0,

                    0 0,
                    0 0,
                    0 0,

                    0 0,
                    0 0,
                    0 0,
                    0 0
                `,
            }}
        >
            {/* ======================================================================
          HEADER
      ====================================================================== */}

            <div
                className="
          mx-auto
          mb-16
          max-w-7xl
          px-5
          sm:mb-20
          sm:px-8
          lg:px-10
        "
            >
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="max-w-3xl text-left"
                >
                    {/* Main title */}

                    {/* Header */}
                    <div className="flex gap-2 items-center mt-10 mb-5 ml-5">

                        {/* <div
                    className="
                                      w-2
                                      md:w-2
                                      h-9
                                      md:h-11
                                      bg-[#4d04de]
                                      rounded-r-[10px]
                                      shrink-0
                                      "
                  /> */}

                        <FaUserGraduate
                            className="text-[#4200b4] text-2xl md:text-4xl"
                        />

                        <div
                            className="
                                          font-bold
                                          text-2xl
                                          md:text-4xl
                                          text-black
                                          text-left
                                      "
                        >
                            Education
                        </div>
                    </div>

                </motion.div>
            </div>

            {/* ======================================================================
          TIMELINE
      ====================================================================== */}

            <div
                className="
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
          lg:px-10
        "
            >
                <div className="relative">

                    {/* ==================================================================
              STATIC TIMELINE
          ================================================================== */}

                    <div
                        className="
              absolute
              left-[15px]
              top-0
              h-full
              w-[2px]
              rounded-full
              bg-gray-200
              sm:left-[23px]
            "
                    />

                    {/* ==================================================================
              ACTIVE TIMELINE
          ================================================================== */}

                    <motion.div
                        style={{
                            height: progressHeight,
                        }}
                        className="
              absolute
              left-[15px]
              top-0
              z-[1]
              w-[2px]
              origin-top
              rounded-full
              bg-gradient-to-b
              from-blue-500
              via-emerald-500
              to-violet-500
              sm:left-[23px]
            "
                    />

                    {/* ==================================================================
              MOVING INSTITUTION LOGO
          ================================================================== */}

                    <motion.div
                        style={{
                            top: iconPosition,
                        }}
                        className="
              absolute
              left-[-6px]
              z-50
              flex
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white
              bg-white
              p-[3px]
              shadow-[0_0_0_5px_rgba(255,255,255,0.95),0_6px_25px_rgba(15,23,42,0.15)]
              transition-all
              duration-300
              sm:left-[2px]
              sm:h-12
              sm:w-12
            "
                    >

                        {/* Logo Circle */}

                        <div
                            className={`
                flex
                h-full
                w-full
                items-center
                justify-center
                overflow-hidden
                rounded-full
                ${activeTheme.logoBg}
                transition-colors
                duration-500
              `}
                        >

                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeEducation.image}
                                    src={activeEducation.image}
                                    alt={activeEducation.institution}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.5,
                                        rotate: -15,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        rotate: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.5,
                                        rotate: 15,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeOut",
                                    }}
                                    className="
                    h-full
                    w-full
                    rounded-full
                    object-contain
                    p-1
                  "
                                />
                            </AnimatePresence>

                        </div>
                    </motion.div>

                    {/* ==================================================================
              EDUCATION ITEMS
          ================================================================== */}

                    <div
                        className="
              space-y-16
              pl-12
              sm:space-y-20
              sm:pl-16
              lg:space-y-24
            "
                    >

                        {educationData.map((education, index) => {
                            const theme = themes[index % themes.length];

                            return (
                                <motion.article
                                    key={`${education.degree}-${index}`}
                                    ref={(element) => {
                                        itemRefs.current[index] = element;
                                    }}
                                    initial={{
                                        opacity: 0,
                                        y: 50,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.18,
                                    }}
                                    transition={{
                                        duration: 0.65,
                                        delay: index * 0.08,
                                        ease: "easeOut",
                                    }}
                                    className="group relative text-left"
                                >

                                    {/* ==========================================================
                      SMALL TIMELINE DOT
                  ========================================================== */}

                                    <div
                                        className="
                      absolute
                      -left-[45px]
                      top-8
                      z-20
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-gray-200
                      bg-white
                      shadow-sm
                      transition-all
                      duration-300
                      group-hover:scale-110
                      sm:-left-[51px]
                    "
                                    >

                                        <div
                                            className={`
                        h-2.5
                        w-2.5
                        rounded-full
                        ${theme.accent}
                        transition-all
                        duration-300
                        group-hover:scale-125
                      `}
                                        />

                                    </div>

                                    {/* ==========================================================
                      CARD
                  ========================================================== */}

                                    <div
                                        className={`
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      bg-gradient-to-br
                      ${theme.gradient}
                      ${theme.border}
                      ${theme.hoverBorder}
                      p-5
                      text-left
                      shadow-sm
                      transition-all
                      duration-500
                      hover:-translate-y-1
                      hover:shadow-xl
                      ${theme.glow}
                      sm:p-6
                      lg:p-7
                    `}
                                    >

                                        {/* Decorative glow */}

                                        <div
                                            className={`
                        pointer-events-none
                        absolute
                        -right-20
                        -top-20
                        h-44
                        w-44
                        rounded-full
                        opacity-40
                        blur-3xl
                        transition-transform
                        duration-700
                        group-hover:scale-125
                        ${theme.logoBg}
                      `}
                                        />

                                        {/* ========================================================
                        CARD HEADER
                    ======================================================== */}

                                        <div
                                            className="
                        relative
                        z-10
                        flex
                        flex-col
                        gap-4
                        text-left
                        sm:flex-row
                        sm:items-start
                        sm:justify-between
                      "
                                        >

                                            {/* LEFT CONTENT */}

                                            <div className="min-w-0 text-left">

                                                {/* Degree */}

                                                <h3
                                                    className="
                            max-w-3xl
                            text-left
                            text-lg
                            font-bold
                            leading-tight
                            tracking-tight
                            text-gray-900
                            sm:text-xl
                            lg:text-2xl
                          "
                                                >
                                                    {education.degree}
                                                </h3>

                                                {/* Institution */}

                                                <p
                                                    className="
                            mt-2
                            max-w-3xl
                            text-left
                            text-sm
                            font-semibold
                            leading-6
                            text-gray-700
                            sm:text-[15px]
                          "
                                                >
                                                    {education.institution}
                                                </p>

                                            </div>

                                            {/* ======================================================
                          YEAR — RIGHT SIDE
                      ====================================================== */}

                                            <div
                                                className={`
                          inline-flex
                          w-fit
                          shrink-0
                          items-center
                          justify-start
                          gap-2
                          rounded-full
                          border
                          px-3
                          py-1.5
                          text-left
                          text-[10px]
                          font-bold
                          ${theme.badge}
                          sm:ml-4
                          sm:text-xs
                        `}
                                            >

                                                <FaCalendarAlt size={10} />

                                                <span className="text-left">
                                                    {education.year}
                                                </span>

                                            </div>

                                        </div>

                                        {/* ========================================================
                        DIVIDER
                    ======================================================== */}

                                        <div
                                            className="
                        relative
                        z-10
                        my-5
                        h-px
                        w-full
                        bg-gray-200/80
                      "
                                        />

                                        {/* ========================================================
                        LOCATION
                    ======================================================== */}

                                        <div
                                            className="
                        relative
                        z-10
                        flex
                        items-center
                        justify-start
                        gap-2
                        text-left
                        text-xs
                        text-gray-500
                        sm:text-sm
                      "
                                        >

                                            <div
                                                className={`
                          flex
                          h-7
                          w-7
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          ${theme.logoBg}
                          ${theme.text}
                        `}
                                            >
                                                <FaMapMarkerAlt size={11} />
                                            </div>

                                            <span className="text-left">
                                                {education.location}
                                            </span>

                                        </div>

                                        {/* ========================================================
                        DESCRIPTION
                    ======================================================== */}

                                        <p
                                            className="
                        relative
                        z-10
                        mt-4
                        max-w-3xl
                        text-left
                        text-sm
                        leading-7
                        text-gray-600
                        sm:text-[15px]
                      "
                                        >
                                            {education.description}
                                        </p>

                                        {/* ========================================================
                        BOTTOM
                    ======================================================== */}

                                        <div
                                            className="
                        relative
                        z-10
                        mt-5
                        flex
                        items-center
                        justify-between
                        gap-3
                      "
                                        >

                                            {/* Result */}

                                            <div
                                                className={`
                          inline-flex
                          items-center
                          justify-start
                          gap-2
                          rounded-lg
                          border
                          px-3
                          py-2
                          text-left
                          text-[11px]
                          font-semibold
                          ${theme.badge}
                          sm:text-xs
                        `}
                                            >

                                                <FaAward size={11} />

                                                <span className="text-left">
                                                    {education.result}
                                                </span>

                                            </div>

                                            {/* Active indicator */}

                                            <motion.div
                                                animate={{
                                                    opacity:
                                                        activeIndex === index
                                                            ? 1
                                                            : 0.35,

                                                    scale:
                                                        activeIndex === index
                                                            ? 1
                                                            : 0.9,
                                                }}
                                                transition={{
                                                    duration: 0.3,
                                                }}
                                                className={`
                          hidden
                          h-2
                          w-2
                          rounded-full
                          ${theme.accent}
                          sm:block
                        `}
                                            />

                                        </div>

                                        {/* ========================================================
                        BOTTOM HOVER LINE
                    ======================================================== */}

                                        <div
                                            className={`
                        absolute
                        bottom-0
                        left-0
                        h-[3px]
                        w-0
                        ${theme.accent}
                        transition-all
                        duration-500
                        group-hover:w-full
                      `}
                                        />

                                    </div>

                                </motion.article>
                            );
                        })}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;