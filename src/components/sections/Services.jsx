import React from "react";
import { motion } from "motion/react";

import {
  FiArrowUpRight,
  FiCheck,
  FiCode,
  FiDatabase,
  FiMonitor,
  FiPenTool,
  FiServer,
  FiSmartphone,
} from "react-icons/fi";

import servicesData from "../../data/services.json";

/* =========================================================
   ICON MAP
========================================================= */

const iconMap = {
  "Web Development": FiCode,
  "MERN Stack Development": FiServer,
  "Frontend Development": FiMonitor,
  "Android App Development": FiSmartphone,
  "UI & Graphic Design": FiPenTool,
  "Database & Backend": FiDatabase,
};

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({ service, index }) {
  const Icon = iconMap[service.title] || FiCode;

  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      whileHover={{
        y: -7,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200/70
        bg-white/80
        p-6
        backdrop-blur-xl
        shadow-[0_20px_60px_rgba(15,23,42,0.06)]

        dark:border-white/[0.07]
        dark:bg-white/[0.025]
        dark:shadow-none

        hover:border-blue-400/30
      "
    >
      {/* =====================================================
          HOVER GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-44
          w-44
          rounded-full
          bg-blue-500/0
          blur-3xl
          transition-all
          duration-700
          group-hover:bg-blue-500/10
        "
      />

      {/* =====================================================
          TOP
      ===================================================== */}

      <div
        className="
          relative
          z-10
          flex
          items-start
          justify-between
        "
      >
        {/* Icon */}

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-blue-500/[0.08]
            text-blue-500
            transition-all
            duration-500

            group-hover:scale-110
            group-hover:bg-blue-500
            group-hover:text-white

            dark:text-blue-400
          "
        >
          <Icon
            size={25}
            strokeWidth={1.8}
          />
        </div>

        {/* Number */}

        <span
          className="
            text-sm
            font-semibold
            tracking-[0.2em]
            text-slate-300
            dark:text-white/10
          "
        >
          {number}
        </span>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mt-7">
        <h3
          className="
            text-xl
            font-bold
            text-slate-900
            transition-colors

            group-hover:text-blue-500

            dark:text-white
            dark:group-hover:text-blue-400
          "
        >
          {service.title}
        </h3>

        <p
          className="
            mt-3
            text-sm
            leading-6
            text-slate-500
            dark:text-slate-400
          "
        >
          {service.description}
        </p>
      </div>

      {/* =====================================================
          FEATURES
      ===================================================== */}

      {service.features?.length > 0 && (
        <div
          className="
            relative
            z-10
            mt-6
            space-y-2.5
          "
        >
          {service.features.map((feature) => (
            <div
              key={feature}
              className="
                flex
                items-center
                gap-2.5
                text-sm
                text-slate-600
                dark:text-slate-400
              "
            >
              <span
                className="
                  flex
                  h-5
                  w-5
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-500/10
                  text-blue-500
                "
              >
                <FiCheck
                  size={11}
                  strokeWidth={3}
                />
              </span>

              {feature}
            </div>
          ))}
        </div>
      )}

      {/* =====================================================
          TECHNOLOGIES
      ===================================================== */}

      {service.technologies?.length > 0 && (
        <div
          className="
            relative
            z-10
            mt-7
            flex
            flex-wrap
            gap-2
          "
        >
          {service.technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-lg
                border
                border-slate-200
                bg-slate-50
                px-2.5
                py-1
                text-[11px]
                font-medium
                text-slate-500

                dark:border-white/[0.06]
                dark:bg-white/[0.025]
                dark:text-slate-500
              "
            >
              {technology}
            </span>
          ))}
        </div>
      )}

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mt-7
          flex
          items-center
          justify-between
          border-t
          border-slate-200/70
          pt-5
          dark:border-white/[0.06]
        "
      >
        <span
          className="
            text-xs
            text-slate-400
          "
        >
          Explore service
        </span>

        <span
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-slate-200
            text-slate-400
            transition-all
            duration-300

            group-hover:border-blue-500
            group-hover:bg-blue-500
            group-hover:text-white

            dark:border-white/10
          "
        >
          <FiArrowUpRight size={17} />
        </span>
      </div>

      {/* =====================================================
          BOTTOM LINE
      ===================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-[2px]
          w-0
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-cyan-400
          to-transparent
          opacity-0
          transition-all
          duration-500

          group-hover:w-2/3
          group-hover:opacity-100
        "
      />
    </motion.article>
  );
}

/* =========================================================
   MAIN SERVICES
========================================================= */

export default function Services() {
  /*
    services.json structure:

    {
      "services": [
        {
          "title": "...",
          "description": "...",
          "features": [],
          "technologies": []
        }
      ]
    }

    If your JSON is directly an array, this also works.
  */

  const services = Array.isArray(servicesData)
    ? servicesData
    : servicesData.services || [];

  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-slate-50
        py-10
        md:py-20
        dark:bg-[#020617]
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >
        {/* Top glow */}

        <div
          className="
            absolute
            left-1/2
            top-[-200px]
            h-[450px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-blue-500/[0.035]
            blur-[130px]
            dark:bg-blue-500/[0.06]
          "
        />

        {/* Left glow */}

        <div
          className="
            absolute
            left-[-200px]
            top-[40%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-cyan-500/[0.025]
            blur-[120px]
          "
        />

        {/* Right glow */}

        <div
          className="
            absolute
            right-[-200px]
            bottom-[10%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-purple-500/[0.025]
            blur-[120px]
          "
        />
      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* ===================================================
            SECTION HEADER
        =================================================== */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >


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
            What I Do
          </span>

          <span
            className="
              my-4
              text-4xl
              font-bold
              tracking-tight
              text-black
              dark:text-white
              md:text-5xl
            "
          >
            Services I <span className="text-violet-600">Provide</span>
          </span>

          <span
            className="
              text-zinc-700
              dark:text-[#a4a4a4]
              text-[14px]
              md:text-xl
            "
          >
           Building modern digital experiences
           with thoughtful design, clean
           development and scalable technologies.
          </span>
        </div>

         
        </motion.div>

        {/* ===================================================
            SERVICES GRID
        =================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          variants={{
            hidden: {},

            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="
            mt-14
            grid
            grid-cols-1
            gap-5

            sm:mt-16
            sm:grid-cols-2

            lg:grid-cols-3
            lg:gap-6
          "
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id || service.title || index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 35,
                },

                visible: {
                  opacity: 1,
                  y: 0,

                  transition: {
                    duration: 0.65,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <ServiceCard
                service={service}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* ===================================================
            CTA
        =================================================== */}

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
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mt-16
            flex
            flex-col
            items-center
            justify-between
            gap-5
            rounded-3xl
            border
            border-slate-200/70
            bg-white/70
            p-6
            backdrop-blur-xl

            sm:flex-row
            sm:px-8

            dark:border-white/[0.07]
            dark:bg-white/[0.025]
          "
        >
          {/* CTA Text */}

          <div>
            <h3
              className="
                text-lg
                font-semibold
                text-slate-900
                dark:text-white
              "
            >
              Have a project in mind?
            </h3>

            <p
              className="
                mt-1
                text-sm
                text-slate-500
                dark:text-slate-400
              "
            >
              Let's build something meaningful
              together.
            </p>
          </div>

          {/* CTA Button */}

          <a
            href="#contact"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-slate-900
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-blue-600

              dark:bg-white
              dark:text-slate-900
              dark:hover:bg-blue-500
              dark:hover:text-white
            "
          >
            Let's Talk

            <FiArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}