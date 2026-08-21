import React from "react";
import { FaArrowDown } from "react-icons/fa6";

export default function ViewButton() {
  const handleClick = () => {
    const element = document.getElementById("projects");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="
        group
        relative
        px-4
        py-3
        font-bold
        text-white
        uppercase
        tracking-wider
        rounded-2xl

        bg-[#0437ba]
        border-b-[8px]
        border-[#001136]

        active:border-b-[0px]
        active:translate-y-[8px]

        transition-all
        duration-100

        shadow-[0_15px_25px_-10px_rgba(4,55,186,0.8)]

        focus:outline-none
        focus:ring-4
        focus:ring-blue-400/50
      "
    >
      {/* Gradient Overlay */}
      <span
        className="
          absolute
          inset-0
          w-full
          h-full
          rounded-2xl
          bg-gradient-to-t
          from-black/20
          to-transparent
          pointer-events-none
        "
      />

      {/* Gloss */}
      <span
        className="
          absolute
          top-2
          left-3
          w-6
          h-3
          rounded-full
          bg-white/40
          blur-[2px]
          pointer-events-none
        "
      />

      {/* Content */}
      <span
        className="
          relative
          flex
          items-center
          justify-center
          gap-2
          drop-shadow-md
        "
      >
        View Projects
      </span>
    </button>
  );
}