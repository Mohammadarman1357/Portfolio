import { motion } from "framer-motion";
import {
  HiHome,
  HiBriefcase,
  HiFolder,
  HiEnvelope,
} from "react-icons/hi2";

import { useLenis } from "../animations/SmoothScrollProvider";
import { NAV_ITEMS } from "../../data/navigation";
import { FaCircleUser, FaCode } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";

/* =========================================================
   ICON MAP
========================================================= */

const ICON_MAP = {
  house: HiHome,
  user: FaCircleUser,
  code: FaCode,
  briefcase: HiBriefcase,
  folder: HiFolder,
  mail: HiEnvelope,
  github: BsGithub,
};

/* =========================================================
   FLOATING NAVBAR
========================================================= */

export default function FloatingNavBar({
  activeTab,
  setActiveTab,
}) {
  const { scrollTo } = useLenis() || {};

  const handleNavClick = (e, item) => {
    // External links like GitHub
    if (item.href.startsWith("http")) {
      return;
    }

    e.preventDefault();

    setActiveTab(item.id);

    if (scrollTo) {
      scrollTo(`#${item.id}`);
    } else {
      const element = document.getElementById(item.id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <motion.aside
      initial={{
        y: -25,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        fixed
        top-2
        sm:top-3
        left-0
        right-0
        z-50

        flex
        justify-center

        px-2
        sm:px-3

        pointer-events-none
      "
    >
      <nav
        aria-label="Main Navigation"
        className="
          pointer-events-auto

          max-w-full

          rounded-full

          border
          border-white/60

          bg-white/75
          backdrop-blur-xl

          shadow-[0_8px_30px_rgba(0,0,0,0.08)]

          p-[3px]

          transition-all
          duration-300
        "
      >
        <ul
          role="menubar"
          className="
            relative

            flex
            items-center
            justify-center

            gap-[2px]
            sm:gap-1

            rounded-full

            p-[2px]
          "
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;

            const Icon =
              ICON_MAP[item.iconType] || HiEnvelope;

            return (
              <li
                key={item.id}
                role="none"
                className="relative shrink-0"
              >
                <a
                  href={item.href}
                  role="menuitem"
                  aria-label={item.label}
                  title={item.label}
                  aria-current={
                    isActive ? "page" : undefined
                  }
                  onClick={(e) =>
                    handleNavClick(e, item)
                  }
                  className={`
                    relative
                    z-10

                    flex
                    items-center
                    justify-center

                    gap-1.5
                    sm:gap-1.5

                    /* MOBILE */
                    h-[36px]
                    w-[36px]

                    /* TABLET */
                    sm:h-[38px]
                    sm:w-[44px]

                    /* DESKTOP */
                    md:w-auto
                    md:h-[40px]
                    md:px-4

                    lg:px-5

                    rounded-full

                    transition-all
                    duration-300

                    active:scale-95

                    ${
                      isActive
                        ? "text-white"
                        : "text-[#6e6e73] hover:text-[#1d1d1f]"
                    }
                  `}
                >
                  {/* =================================================
                      ACTIVE SLIDING PILL
                  ================================================= */}

                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="
                        absolute
                        inset-0
                        -z-10
                        rounded-full

                        bg-[linear-gradient(30deg,#0400ff,#4ce3f7)]
                        bg-[length:100%_100%]

                        will-change-transform
                      "
                      transition={{
                        layout: {
                          type: "spring",
                          stiffness: 280,
                          damping: 30,
                          mass: 0.7,
                        },
                      }}
                    />
                  )}

                  {/* =================================================
                      ICON
                  ================================================= */}

                  <motion.div
                    animate={{
                      scale: isActive ? 1 : 0.95,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Icon
                      className={`
                        h-[17px]
                        w-[17px]

                        sm:h-[18px]
                        sm:w-[18px]

                        transition-colors
                        duration-300

                        ${
                          isActive
                            ? "text-white"
                            : "text-black"
                        }
                      `}
                    />
                  </motion.div>

                  {/* =================================================
                      LABEL
                  ================================================= */}

                  <span
                    className={`
                      hidden
                      md:block

                      text-[12px]
                      lg:text-[14px]

                      leading-none
                      tracking-tight
                      whitespace-nowrap

                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "font-semibold"
                          : "font-medium"
                      }
                    `}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.aside>
  );
}