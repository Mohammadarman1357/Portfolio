import React from "react";
import { motion } from "framer-motion";

const BorderBeam = ({
  duration = 5,
  color = "#38bdf8",
}) => {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 rounded-[inherit]">

      {/* Top */}
      <motion.div
        className="absolute top-0 h-[2px] w-24"
        style={{
          background: `linear-gradient(
            90deg,
            transparent,
            ${color},
            transparent
          )`,
          boxShadow: `0 0 12px ${color}`,
        }}
        animate={{
          left: ["-10%", "110%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Right */}
      <motion.div
        className="absolute right-0 w-[2px] h-24"
        style={{
          background: `linear-gradient(
            180deg,
            transparent,
            ${color},
            transparent
          )`,
          boxShadow: `0 0 12px ${color}`,
        }}
        animate={{
          top: ["-10%", "110%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          delay: duration / 4,
        }}
      />

      {/* Bottom */}
      <motion.div
        className="absolute bottom-0 right-0 h-[2px] w-24"
        style={{
          background: `linear-gradient(
            90deg,
            transparent,
            ${color},
            transparent
          )`,
          boxShadow: `0 0 12px ${color}`,
        }}
        animate={{
          right: ["-10%", "110%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          delay: duration / 2,
        }}
      />

      {/* Left */}
      <motion.div
        className="absolute bottom-0 left-0 w-[2px] h-24"
        style={{
          background: `linear-gradient(
            180deg,
            transparent,
            ${color},
            transparent
          )`,
          boxShadow: `0 0 12px ${color}`,
        }}
        animate={{
          bottom: ["-10%", "110%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          delay: (duration * 3) / 4,
        }}
      />
    </div>
  );
};

export default BorderBeam;