import { motion } from "framer-motion";
import {
  FaMapMarkedAlt,
  FaBuilding,
  FaLaptopCode,
  FaTrophy,
  FaInfoCircle,
} from "react-icons/fa";

/* =========================================================
   STATISTICS DATA
========================================================= */

const stats = [
  {
    icon: FaMapMarkedAlt,
    value: "৬০+",
    label: "দেশ",
    color: "#2388c4",
  },
  {
    icon: FaBuilding,
    value: "৩০০০+",
    label: "গ্লোবাল জব প্লেসমেন্ট",
    color: "#4b8dbc",
  },
  {
    icon: FaLaptopCode,
    value: "২০০০+",
    label: "রিমোট জব",
    color: "#e58b3d",
  },
  {
    icon: FaTrophy,
    value: "৮৫-৯০%",
    label: "জব সাকসেস রেট",
    color: "#8e3ec4",
    info: true,
  },
];

/* =========================================================
   BORDER BEAM

   The SVG itself fills the exact card size.
   The rect follows the actual rounded rectangle border.
========================================================= */

function BorderBeam() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="border-beam-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="45%" stopColor="#fb7185" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>

        {/* STATIC LIGHT BORDER */}

        <rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx="30"
          fill="none"
          stroke="#d1d5db"
          strokeWidth="1"
        />

        {/* MOVING BEAM */}

        <motion.rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx="30"
          fill="none"
          stroke="url(#border-beam-gradient)"
          strokeWidth="4"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray="28 72"
          initial={{
            strokeDashoffset: 100,
          }}
          animate={{
            strokeDashoffset: 0,
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function BorderBeamStats() {
  return (
    <section className="w-full bg-[#f5f5f5] px-4 py-12 md:py-20">
      <div
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-[32px]
          bg-[#f7f8fa]
        "
      >
        {/* MOVING BORDER BEAM */}

        <BorderBeam />

        {/* CARD CONTENT */}

        <div
          className="
            relative
            z-10
            px-5
            py-12
            sm:px-8
            sm:py-14
            md:px-12
            md:py-16
          "
        >
          {/* HEADING */}

          <motion.h2
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
              ease: "easeOut",
            }}
            className="
              mx-auto
              max-w-5xl
              text-center
              text-2xl
              font-bold
              leading-tight
              text-[#17202a]
              sm:text-3xl
              md:text-4xl
            "
          >
            আমাদের{" "}
            <span className="bg-gradient-to-r from-[#7c4dcc] via-[#8b5cf6] to-[#a855f7] bg-clip-text text-transparent">
              বিদেশের
            </span>{" "}
            ক্যারিয়ারে প্রোগ্রামিং দিয়ে হোক নতুন শুরু
          </motion.h2>

          {/* STATISTICS */}

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{
                    opacity: 0,
                    y: 30,
                    opacity: 0,
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
                    duration: 0.5,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                  className={`
                    relative
                    flex
                    flex-col
                    items-center
                    justify-center
                    px-6
                    py-8
                    ${
                      index !== 0
                        ? "lg:border-l lg:border-slate-300"
                        : ""
                    }
                  `}
                >
                  {/* ICON */}

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      y: -3,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 18,
                    }}
                    className="
                      mb-5
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      sm:h-20
                      sm:w-20
                    "
                  >
                    <Icon
                      className="h-full w-full"
                      style={{
                        color: item.color,
                      }}
                    />
                  </motion.div>

                  {/* VALUE */}

                  <h3
                    className="
                      text-3xl
                      font-extrabold
                      tracking-wide
                      sm:text-4xl
                    "
                    style={{
                      color: item.color,
                    }}
                  >
                    {item.value}
                  </h3>

                  {/* LABEL */}

                  <div className="mt-3 flex items-center gap-1">
                    <p className="text-center text-sm font-semibold text-slate-700 sm:text-base">
                      {item.label}
                    </p>

                    {item.info && (
                      <FaInfoCircle className="h-4 w-4 text-slate-400" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      
      </div>
    </section>
  );
}