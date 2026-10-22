import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { useLenis } from "../animations/SmoothScrollProvider";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import { useEffect, useState } from "react";
import DownloadCVButton from "../../pages/DownloadCv/DownloadCVButton";
import ViewButton from "../../pages/DownloadCv/ViewButton";
import FallingTechIcons from "../../pages/FallingTechIcons";

const ROLES = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "React Developer",
  "Frontend Developer",
  "Android App Developer",
  "Python Programmer",
  "Java Developer",
  "Data Science & ML Learner",
  "Graphics Designer",
  "T-Shirt Designer",
  "Diploma Engineer",
];

function OrbitIcon({
  angle = 0,
  duration = 38,
  src,
  alt,
  className = "",
}) {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ rotate: angle }}
      animate={{ rotate: angle + 360 }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        transformOrigin: "center center",
      }}
    >
      <motion.div
        className="
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          -translate-y-1/2
          flex
          items-center
          justify-center
        "
        initial={{ rotate: -angle }}
        animate={{ rotate: -(angle + 360) }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <img
          src={src}
          alt={alt}
          draggable="false"
          className={`
            object-contain
            select-none
            pointer-events-none
            ${className}
          `}
        />
      </motion.div>
    </motion.div>
  );
}


export default function HeroSection() {
  const { scrollTo } = useLenis() || {};

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = ROLES[roleIndex];
    if (typing) {
      if (charIndex < current.length) {
        const t = setTimeout(() => {
          setDisplayed((p) => p + current[charIndex]);
          setCharIndex((c) => c + 1);
        }, 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (charIndex > 0) {
        const t = setTimeout(() => {
          setDisplayed((p) => p.slice(0, -1));
          setCharIndex((c) => c - 1);
        }, 35);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setRoleIndex((i) => (i + 1) % ROLES.length);
          setTyping(true);
        }, 500);
        return () => clearTimeout(t);
      }
    }
  }, [charIndex, typing, roleIndex]);

  return (

    // parent 
    <section
      id="hero"
      className="
        pt-24
        sm:pt-28
        pb-16
        px-4
        sm:px-8
        items-center
        justify-center
        flex
        flex-col-reverse
        lg:flex-row
        gap-5
        lg:gap-10
        bg-gradient-to-t from-[#E3F2FD] via-[#d7dcf07b] to-white
        
        relative
        "
    >

      {/* Falling Background Icons */}
      <FallingTechIcons />

      {/* left side */}

      {/* HERO TEXT */}
      <div className="text-left w-full lg:w-1/2 space-y-2 relative z-10">
        {/* STATUS BADGE */}

        <div className="flex justify-center md:justify-start">
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
      inline-flex
      items-center
      gap-2
      px-5
      py-2
      rounded-[999px]
      font-semibold
      bg-white
      border-x-2
      border-y-0
      border-sky-400
      shadow-[0_4px_12px_rgba(56,189,248,0.15)]
      text-black
    "
          >
            <span className="flex h-2 w-2 relative">
              <span
                className="
          animate-ping
          absolute
          inline-flex
          h-full
          w-full
          rounded-full
          bg-[#00a9df]
          opacity-75
        "
              />

              <span
                className="
          relative
          inline-flex
          rounded-full
          h-2
          w-2
          bg-[#00a9df]
        "
              />
            </span>

            <span className="font-bold text-sm">
              Available for Opportunities
            </span>
          </motion.div>
        </div>

        {/* HEADING */}

        <div className="mt-5 ">

          <motion.h1
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
              delay: 0.1,
            }}
            className="
            text-3xl
            sm:text-5xl
            md:text-6xl
            font-extrabold
            tracking-tight
            text-black
            leading-[1.15]
            text-center
            md:text-left
          "
          >

            <p className="font-normal mb-2 text-gray-700 text-[18px] text-center md:text-left">👋 Hello, I'm</p>

            <span className="text-black">MOHAMMAD</span>

            <br />

            <span
              className="
            text-[#0D47A1]
            "
            >
              ARMAN
            </span>
          </motion.h1>

        </div>

        {/* Typewriter */}
        <div className="flex items-center justify-center md:justify-start gap-2 h-8 md:h-10">
          <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-600 font-mono tracking-wide">
            {displayed}
          </span>
          <span className="w-[2px] h-5 md:h-6 lg:h-7 bg-cyan-600 rounded-full animate-pulse" />
        </div>

        {/* DESCRIPTION */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
            delay: 0.2,
          }}
          className="
            text-[16px]
            sm:text-base
            text-black
            leading-relaxed
            font-normal
            text-center
            md:text-left
          "
        >
          I'm a Full Stack Web Developer passionate about building modern, responsive, and scalable digital experiences. I specialize in the MERN Stack—working with React.js, Node.js, Express.js, and MongoDB to build complete applications from clean, intuitive user interfaces to robust backend systems.
          My expertise includes RESTful APIs, authentication, database integration, deployment, and responsive web design.

          {/* Buttons */}
          <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">

            {/* View Projects */}
            <ViewButton></ViewButton>

            {/* Download CV */}

            <DownloadCVButton></DownloadCVButton>


          </div>

        </motion.p>
      </div>

      {/* right side */}
      <div>
        {/* HERO ORBIT CONTAINER */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="
          relative
          w-[340px]
          h-[340px]

          sm:w-[500px]
          sm:h-[500px]

          md:w-[620px]
          md:h-[620px]

          lg:w-[450px]
          lg:h-[450px]

          my-6
          flex
          items-center
          justify-center
        "
        >
          {/* LIGHT BLUE BACKGROUND CIRCLE */}

          <div
            className="
            absolute
            z-[1]

            w-[62%]
            aspect-square

            rounded-full

            bg-[radial-gradient(circle_at_50%_35%,#dcecf7_0%,#c9deeb_55%,#b8d0df_100%)]
          "
          />

          {/* PERFECT FULL DOTTED CIRCLE */}

          <div
            className="
            absolute
            z-[5]

            w-full
            h-full

            rounded-full

            border-[5px]
            border-dotted
            border-slate-300/70
          "
          >
            {/* 9 ICONS --> 360° / 9 = 40° EQUAL SPACING */}

            {/* 1. FIREBASE */}

            <OrbitIcon
              angle={-90}
              duration={38}
              src="/icons/nextjs.png"
              alt="Firebase"
              className="
              w-11
              h-11

              sm:w-16
              sm:h-16

              md:w-[72px]
              md:h-[72px]

              drop-shadow-[0_8px_12px_rgba(0,0,0,0.25)]

            "
            />

            {/* 2. TAILWIND */}

            <OrbitIcon
              angle={-50}
              duration={38}
              src="/icons/tailwind.png"
              alt="Tailwind CSS"
              className="
              w-11
              h-11

              sm:w-16
              sm:h-16

              md:w-[72px]
              md:h-[72px]
              
              drop-shadow-[0_8px_12px_rgba(0,0,0,0.25)]
            "
            />

            {/* 3. REACT */}

            <OrbitIcon
              angle={-10}
              duration={38}
              src="/icons/react.png"
              alt="React"
              className="
              w-11
              h-11

              sm:w-16
              sm:h-16

              md:w-[72px]
              md:h-[72px]

              drop-shadow-[0_8px_12px_rgba(0,0,0,0.25)]

            "
            />

            {/* 4. JAVASCRIPT */}

            <OrbitIcon
              angle={30}
              duration={38}
              src="/icons/javascript.png"
              alt="JavaScript"
              className="
              w-11
              h-11

              sm:w-16
              sm:h-16

              md:w-[72px]
              md:h-[72px]

              drop-shadow-[0_8px_12px_rgba(0,0,0,0.25)]

            "
            />

            {/* 5. HTML */}

            <OrbitIcon
              angle={70}
              duration={38}
              src="/icons/html.png"
              alt="HTML5"
              className="
              w-11
              h-11

              sm:w-16
              sm:h-16

              md:w-[72px]
              md:h-[72px]

              drop-shadow-[0_8px_12px_rgba(0,0,0,0.25)]

            "
            />

            {/* 6. CSS */}

            <OrbitIcon
              angle={110}
              duration={38}
              src="/icons/css.png"
              alt="CSS3"
              className="
              w-11
              h-11

              sm:w-16
              sm:h-16

              md:w-[72px]
              md:h-[72px]

              drop-shadow-[0_8px_12px_rgba(0,0,0,0.25)]
              
            "
            />

            {/* 7. NODE.JS */}

            <OrbitIcon
              angle={150}
              duration={38}
              src="/icons/nodejs.png"
              alt="Node.js"
              className="
              w-11
              h-11

              sm:w-16
              sm:h-16

              md:w-[72px]
              md:h-[72px]

              drop-shadow-[0_8px_12px_rgba(0,0,0,0.25)]

            "
            />

            {/* 8. MONGODB */}

            <OrbitIcon
              angle={190}
              duration={38}
              src="/icons/mongodb.png"
              alt="MongoDB"
              className="
              w-11
              h-11

              sm:w-16
              sm:h-16

              md:w-[72px]
              md:h-[72px]

              drop-shadow-[0_8px_12px_rgba(0,0,0,0.25)]

            "
            />

            {/* 9. EXPRESS */}

            <OrbitIcon
              angle={230}
              duration={38}
              src="/icons/express.png"
              alt="Express.js"
              className="
             w-11
              h-11

              sm:w-16
              sm:h-16

              md:w-[72px]
              md:h-[72px]
              
              drop-shadow-[0_8px_12px_rgba(0,0,0,0.25)]

            "
            />
          </div>

          {/* CENTRAL PROFILE IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.45,
              ease: "easeOut",
            }}
            className="
            absolute
            z-10

            lg:w-[75%]
            w-[80%]
            aspect-square

            rounded-full
            overflow-hidden

            border-[7px]
            border-white/80

            shadow-[0_20px_60px_rgba(15,23,42,0.08)]
          "
          >
            <img
              src="/profile.png"
              alt="Mohammad Arman"
              draggable="false"
              className="
              w-full
              h-full

              object-cover
              object-top

              select-none
            "
            />
          </motion.div>
        </motion.div>

      </div>

    </section>
  );
}