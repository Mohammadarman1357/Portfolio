import { useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Radio,
} from "lucide-react";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Alternate image position on large screens
  const isReverse = index % 2 !== 0;

  const descriptionLimit = 160;
  const techLimit = 5;

  // Different pastel color theme for every project
  const themes = [
    {
      background: "bg-[#f7ebe5]",
      border: "#e76f51",
      accent: "text-[#d95d39]",
      button: "bg-[#d95d39]",
      hoverButton: "hover:bg-[#c94f2f]",
      shadow:
        "hover:shadow-[0_20px_60px_rgba(217,93,57,0.25)]",
      techBg: "bg-white/60",
    },
    {
      background: "bg-[#e6f1f7]",
      border: "#4f93b7",
      accent: "text-[#32789e]",
      button: "bg-[#32789e]",
      hoverButton: "hover:bg-[#246785]",
      shadow:
        "hover:shadow-[0_20px_60px_rgba(50,120,158,0.25)]",
      techBg: "bg-white/60",
    },
    {
      background: "bg-[#fff9df]",
      border: "#e0b400",
      accent: "text-[#b98f00]",
      button: "bg-[#b98f00]",
      hoverButton: "hover:bg-[#9f7a00]",
      shadow:
        "hover:shadow-[0_20px_60px_rgba(224,180,0,0.28)]",
      techBg: "bg-white/60",
    },
    {
      background: "bg-[#e8eef7]",
      border: "#527ba8",
      accent: "text-[#3d6692]",
      button: "bg-[#3d6692]",
      hoverButton: "hover:bg-[#2e557e]",
      shadow:
        "hover:shadow-[0_20px_60px_rgba(61,102,146,0.25)]",
      techBg: "bg-white/60",
    },
    {
      background: "bg-[#e3f3f5]",
      border: "#4ba3b5",
      accent: "text-[#318397]",
      button: "bg-[#318397]",
      hoverButton: "hover:bg-[#246f81]",
      shadow:
        "hover:shadow-[0_20px_60px_rgba(49,131,151,0.25)]",
      techBg: "bg-white/60",
    },
    {
      background: "bg-[#e5f0f6]",
      border: "#5b94b7",
      accent: "text-[#3e789b]",
      button: "bg-[#3e789b]",
      hoverButton: "hover:bg-[#2f6687]",
      shadow:
        "hover:shadow-[0_20px_60px_rgba(62,120,155,0.25)]",
      techBg: "bg-white/60",
    },
    {
      background: "bg-[#eeeeee]",
      border: "#6f7478",
      accent: "text-[#454a4f]",
      button: "bg-[#454a4f]",
      hoverButton: "hover:bg-[#2f3438]",
      shadow:
        "hover:shadow-[0_20px_60px_rgba(69,74,79,0.22)]",
      techBg: "bg-white/70",
    },
    {
      background: "bg-[#f1eeee]",
      border: "#737373",
      accent: "text-[#4d4d4d]",
      button: "bg-[#4d4d4d]",
      hoverButton: "hover:bg-[#333333]",
      shadow:
        "hover:shadow-[0_20px_60px_rgba(77,77,77,0.22)]",
      techBg: "bg-white/70",
    },
    {
      background: "bg-[#eaf5e5]",
      border: "#5f9b55",
      accent: "text-[#43763b]",
      button: "bg-[#43763b]",
      hoverButton: "hover:bg-[#345f2e]",
      shadow:
        "hover:shadow-[0_20px_60px_rgba(67,118,59,0.25)]",
      techBg: "bg-white/70",
    },
    {
      background: "bg-[#e8f3e6]",
      border: "#4f8f61",
      accent: "text-[#377545]",
      button: "bg-[#377545]",
      hoverButton: "hover:bg-[#286037]",
      shadow:
        "hover:shadow-[0_20px_60px_rgba(55,117,69,0.25)]",
      techBg: "bg-white/70",
    },
    {
      background: "bg-[#f8e9e7]",
      border: "#b7473d",
      accent: "text-[#92332b]",
      button: "bg-[#92332b]",
      hoverButton: "hover:bg-[#762820]",
      shadow:
        "hover:shadow-[0_20px_60px_rgba(146,51,43,0.25)]",
      techBg: "bg-white/70",
    },
    {
      background: "bg-[#f9eee6]",
      border: "#d86b42",
      accent: "text-[#b94f2d]",
      button: "bg-[#b94f2d]",
      hoverButton: "hover:bg-[#963c1f]",
      shadow:
        "hover:shadow-[0_20px_60px_rgba(185,79,45,0.25)]",
      techBg: "bg-white/70",
    },
  ];

  const theme = themes[index % themes.length];

  const description = project.shortDescription || "";

  const isLongDescription =
    description.length > descriptionLimit;

  const technologies = project.technologies || [];

  const hasMoreTech =
    technologies.length > techLimit;

  const displayedDescription = isExpanded
    ? description
    : description.slice(0, descriptionLimit);

  const displayedTechnologies = isExpanded
    ? technologies
    : technologies.slice(0, techLimit);

  return (
    <article
      className={`
        group
        relative
        overflow-hidden
        rounded-[30px]
        p-[2px]
        transition-all
        duration-500
        hover:-translate-y-1
        ${theme.shadow}
      `}
    >
      {/* Animated Gradient Border Beam */}
      <div
        className="
          absolute
          inset-[-100%]
          animate-[spin_8s_linear_infinite]
        "
        style={{
          background: `
            conic-gradient(
              from 0deg,
              transparent 0deg,
              transparent 110deg,
              ${theme.border} 145deg,
              white 180deg,
              ${theme.border} 215deg,
              transparent 250deg,
              transparent 360deg
            )
          `,
        }}
      />

      {/* Main Card */}
      <div
        className={`
          relative
          overflow-hidden
          rounded-[28px]
          ${theme.background}
        `}
      >
        <div
          className={`
            grid
            grid-cols-1
            lg:grid-cols-2
            ${isReverse ? "lg:[direction:rtl]" : ""}
          `}
        >
          {/* PROJECT IMAGE */}
          <div
            className={`
              relative
              flex
              min-h-[300px]
              items-center
              justify-center
              overflow-hidden
              p-5
              sm:p-7
              lg:min-h-[500px]
              lg:p-8
              ${isReverse ? "lg:[direction:ltr]" : ""}
            `}
          >
            {/* Image Frame */}
            <div
              className="
                relative
                h-full
                w-full
                overflow-hidden
                rounded-[24px]
                border
                border-black/10
                bg-white/30
                shadow-sm
              "
            >
              <img
                src={project.image}
                alt={project.title}
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  group-hover:scale-[1.025]
                "
              />

              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
            </div>

            {/* LIVE BADGE */}

            {/* LIVE BADGE */}
            <div
              className="
    absolute
    right-9
    top-9
    z-10
    flex
    items-center
    gap-2
    rounded-full
    border
    border-violet-400/30
    bg-white/60
    px-4
    py-2
    text-sm
    font-semibold
    text-blue-800
    shadow-sm
    backdrop-blur-md
  "
            >
              {/* Blinking Circle */}
              <span className="relative flex h-2.5 w-2.5">
                {/* Ping animation */}
                <span
                  className="
        absolute
        inline-flex
        h-full
        w-full
        animate-ping
        rounded-full
        bg-red-700
        opacity-75
      "
                />

                {/* Solid circle */}
                <span
                  className="
        relative
        inline-flex
        h-2.5
        w-2.5
        rounded-full
        bg-red-700
      "
                />
              </span>

              LIVE
            </div>
          </div>

          {/* PROJECT CONTENT */}
          <div
            className={`
              flex
              flex-col
              justify-center
              p-6
              sm:p-8
              lg:p-12
              ${isReverse ? "lg:[direction:ltr]" : ""}
            `}
          >
            {/* Project Number */}
            <span
              className={`
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                ${theme.accent}
              `}
            >
              Project{" "}
              {String(project.id).padStart(2, "0")}
            </span>

            {/* Title */}
            <span
              className="
                text-3xl
                font-bold
                tracking-tight
                text-zinc-800
                md:text-4xl
              "
            >
              {project.title}
            </span>

            {/* Description */}
            <span
              className="
                text-base
                text-zinc-600
                sm:text-lg
              "
            >
              {displayedDescription}

              {!isExpanded &&
                isLongDescription &&
                "..."}
            </span>

            {/* Quote / Extra Content */}
            {/* <div
              className="
                mt-6
                border-l-2
                border-black/10
                pl-4
              "
            >
              <p className="text-sm italic leading-7 text-zinc-500">
                Built with modern web technologies,
                responsive design, and a focus on
                user experience.
              </p>
            </div> */}

            {/* TECHNOLOGIES */}
            <div>
              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-zinc-500
                "
              >
                Technologies
              </span>

              <div className="flex flex-wrap gap-2 mt-2">
                {displayedTechnologies.map((tech) => (
                  <div
                    key={tech.name}
                    className={`
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      border
                      border-black/5
                      ${theme.techBg}
                      px-3
                      py-2
                      text-sm
                      font-medium
                      text-zinc-700
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-white/90
                    `}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="
                        h-4
                        w-4
                        object-contain
                      "
                    />

                    <span>
                      {tech.name}
                    </span>
                  </div>
                ))}

                {!isExpanded && hasMoreTech && (
                  <div
                    className={`
                      rounded-xl
                      border
                      border-black/5
                      ${theme.techBg}
                      px-3
                      py-2
                      text-sm
                      font-semibold
                      ${theme.accent}
                    `}
                  >
                    +
                    {technologies.length - techLimit}
                  </div>
                )}
              </div>
            </div>

            {/* BUTTONS */}
            <div
              className="
                mt-4
                flex
                flex-wrap
                items-center
                gap-3
              "
            >
              {/* LIVE LINK */}
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  ${theme.button}
                  ${theme.hoverButton}
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-md
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-lg
                `}
              >
                View Live

                <ArrowUpRight size={17} />
              </a>

              {/* SOURCE CODE */}
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-black/10
                  bg-white/50
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-zinc-700
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-white/90
                "
              >
                <BsGithub size={17} />

                Source Code
              </a>

              {/* READ MORE */}
              {(isLongDescription || hasMoreTech) && (
                <button
                  onClick={() =>
                    setIsExpanded(!isExpanded)
                  }
                  className={`
                    inline-flex
                    items-center
                    gap-2
                    px-3
                    py-2
                    text-sm
                    font-semibold
                    transition-all
                    duration-300
                    ${theme.accent}
                  `}
                >
                  {isExpanded ? (
                    <>
                      Show Less

                      <ChevronUp size={17} />
                    </>
                  ) : (
                    <>
                      Read More

                      <ChevronDown size={17} />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;