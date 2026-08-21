import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiPython,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiVite,
  SiFigma,
  SiHtml5,
  SiCss,
} from "react-icons/si";

const techIcons = [
  {
    Icon: SiReact,
    color: "#61DAFB",
    size: 70,
  },
  {
    Icon: SiJavascript,
    color: "#F7DF1E",
    size: 70,
  },
  {
    Icon: SiTypescript,
    color: "#3178C6",
    size: 70,
  },
  {
    Icon: SiNodedotjs,
    color: "#5FA04E",
    size: 70,
  },
  {
    Icon: SiGit,
    color: "#F05032",
    size: 70,
  },
  {
    Icon: SiGithub,
    color: "#181717",
    size: 70,
  },
  {
    Icon: SiPython,
    color: "#3776AB",
    size: 70,
  },
  {
    Icon: SiTailwindcss,
    color: "#38BDF8",
    size: 70,
  },
  {
    Icon: SiNextdotjs,
    color: "#111111",
    size: 70,
  },
  {
    Icon: SiMongodb,
    color: "#47A248",
    size: 70,
  },
  {
    Icon: SiExpress,
    color: "#ffffff",
    size: 70,
  },
  {
    Icon: SiVite,
    color: "#646CFF",
    size: 70,
  },
  {
    Icon: SiFigma,
    color: "#F24E1E",
    size: 70,
  },
  {
    Icon: SiHtml5,
    color: "#E34F26",
    size: 70,
  },
  {
    Icon: SiCss,
    color: "#1572B6",
    size: 70,
  },
];

const positions = [
  { left: "3%", delay: 0, duration: 11 },
  { left: "10%", delay: 4, duration: 14 },
  { left: "18%", delay: 8, duration: 12 },
  { left: "27%", delay: 2, duration: 15 },
  { left: "35%", delay: 10, duration: 13 },
  { left: "43%", delay: 6, duration: 14 },
  { left: "52%", delay: 12, duration: 13 },
  { left: "61%", delay: 3, duration: 16 },
  { left: "70%", delay: 9, duration: 12 },
  { left: "78%", delay: 5, duration: 14 },
  { left: "86%", delay: 11, duration: 12 },
  { left: "92%", delay: 7, duration: 15 },
  { left: "15%", delay: 14, duration: 14 },
  { left: "48%", delay: 16, duration: 13 },
  { left: "75%", delay: 13, duration: 16 },
];

export default function FallingTechIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {techIcons.map((item, index) => {
        const { Icon, color, size } = item;

        const position = positions[index % positions.length];

        const randomRotate = (index % 2 === 0 ? 1 : -1) * (15 + index * 3);

        const moveX =
          index % 3 === 0
            ? [0, 40, -30, 20]
            : index % 3 === 1
              ? [0, -40, 30, -20]
              : [0, 25, -25, 15];

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: position.left,
              top: "-150px",
            }}
            initial={{
              opacity: 0,
              y: -200,
              rotate: randomRotate,
              scale: 0.7,
            }}
            animate={{
              opacity: [0, 0.55, 0.55, 0],
              y: ["0vh", "35vh", "70vh", "115vh"],
              x: moveX,
              rotate: [
                randomRotate,
                randomRotate + 25,
                randomRotate - 20,
                randomRotate + 40,
              ],
              scale: [0.7, 1, 1, 0.8],
            }}
            transition={{
              duration: position.duration,
              delay: position.delay,
              repeat: Infinity,
              repeatDelay: 0,
              ease: "linear",
            }}
          >
            {/* Glass Icon Card */}
            <div
              className="
                flex
                h-28
                w-28
                items-center
                justify-center
                rounded-[28px]
                border
                border-white/40
                bg-white/20
                shadow-2xl
                backdrop-blur-md
              "
              style={{
                boxShadow:
                  "0 20px 50px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)",
              }}
            >
              <Icon
                size={size}
                color={color}
                className="drop-shadow-lg"
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}