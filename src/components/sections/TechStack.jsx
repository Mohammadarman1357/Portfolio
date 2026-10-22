import React, { useState } from "react";
import { BsFillHddStackFill, BsHddStackFill } from "react-icons/bs";

/*
|--------------------------------------------------------------------------
| REAL TOOL / BRAND IMAGE ICONS
|--------------------------------------------------------------------------
*/

const Icons = {
  // Office & Design
  MSWord: "https://i.ibb.co/kVkYGqrk/cf49fe8da74ccf842fc7be548e08141f7c2e957279a621a18858ef9a349ad4a3-600.webp",
  MSExcel: "https://i.ibb.co/nNd8XYtB/images.png",
  MSPowerPoint: "https://i.ibb.co/4ZNg5WX1/images.jpg",
  Illustrator: "https://i.ibb.co/mwbpcy3/images.png",
  Photoshop: "https://i.ibb.co/4nRSc86Y/images.png",
  Figma: "https://i.ibb.co/7t9Z14Jm/images.png",

  // Programming Languages & IDEs
  Python: "https://i.ibb.co/gbPJLKK1/images.jpg",
  Java: "https://i.ibb.co/YF0QZBx8/images.png",
  AndroidStudio: "https://i.ibb.co/N2mJDy7v/images.jpg",
  C: "https://i.ibb.co/SDPVbRxm/images.png",
  CPP: "https://i.ibb.co/XrKGJxfW/images.png",
  Kotlin: "https://i.ibb.co/C35M2sxg/images.jpg",

  // Web & Frontend
  HTML: "https://i.ibb.co/RTT23Qb2/images.png",
  CSS: "https://i.ibb.co/cSPjMm7B/images.png",
  JavaScript: "https://i.ibb.co/xtwcSQQW/images.png",
  Tailwind: "https://i.ibb.co/S4Fc69T9/images.png",
  ReactJS: "https://i.ibb.co/XktTNCbQ/images.png",
  NextJS: "https://i.ibb.co/Vpc5X0sg/images.png",

  // Backend & Databases
  NodeJS: "https://i.ibb.co/3ydx89HV/images.png",
  ExpressJS: "https://i.ibb.co/0RHxszyp/images.png",
  MySQL: "https://i.ibb.co/CsBMx3Ys/images.png",
  MongoDB: "https://i.ibb.co/ccY3mJQt/images.png",
  Firebase: "https://i.ibb.co/3wkRrts/images.png",

  // Hosting, Cloud & DevOps
  Netlify: "https://i.ibb.co/wr3p7fBZ/images.png",
  Surge: "https://i.ibb.co/vgcrjLw/images.jpg",
  Cloudflare: "https://i.ibb.co/G4r06f9W/images.png",
  Vercel: "https://i.ibb.co/YTB0fJM0/images.png",
  GitHub: "https://i.ibb.co/P3TB6mW/images.png",
  Git: "https://i.ibb.co/RGnJDzyG/images.png",
  VSCode: "https://i.ibb.co/yFtgb8ws/download.jpg",

  // AI & Services
  ChatGPT: "https://i.ibb.co/kV2206k6/images.png",
  Gemini: "https://i.ibb.co/bR3WkJT0/download.jpg",
  DeepSeek: "https://i.ibb.co/7Jv7CFZS/images.jpg",
  Stitch: "https://i.ibb.co/BHwQzXG4/images.jpg",
  Antigravity: "https://i.ibb.co/nqqvVCSx/images.jpg",
  Stripe: "https://i.ibb.co/5XhC83hn/images.png",
};

export default function TechStackOrbit() {
  const [hoveredOrbit, setHoveredOrbit] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  /*
  |--------------------------------------------------------------------------
  | Orbit Datasets
  |--------------------------------------------------------------------------
  */

  const orbit1Data = [
    { name: "HTML", icon: Icons.HTML, color: "#E34F26" },
    { name: "CSS", icon: Icons.CSS, color: "#1572B6" },
    { name: "JavaScript", icon: Icons.JavaScript, color: "#F7DF1E" },
    { name: "Tailwind CSS", icon: Icons.Tailwind, color: "#06B6D4" },
    { name: "React.js", icon: Icons.ReactJS, color: "#61DAFB" },
    { name: "Next.js", icon: Icons.NextJS, color: "#000000" },
    { name: "Figma", icon: Icons.Figma, color: "#F24E1E" },
    { name: "Git", icon: Icons.Git, color: "#F05032" },
  ];

  const orbit2Data = [
    { name: "Python", icon: Icons.Python, color: "#3776AB" },
    { name: "Java", icon: Icons.Java, color: "#ED8B00" },
    { name: "C Language", icon: Icons.C, color: "#A8B9CC" },
    { name: "C++", icon: Icons.CPP, color: "#00599C" },
    { name: "Kotlin", icon: Icons.Kotlin, color: "#7F52FF" },
    { name: "Node.js", icon: Icons.NodeJS, color: "#339933" },
    { name: "Express.js", icon: Icons.ExpressJS, color: "#000000" },
    { name: "MySQL", icon: Icons.MySQL, color: "#00758F" },
    { name: "MongoDB", icon: Icons.MongoDB, color: "#47A248" },
  ];

  const orbit3Data = [
    { name: "MS Word", icon: Icons.MSWord, color: "#2B579A" },
    { name: "MS Excel", icon: Icons.MSExcel, color: "#217346" },
    { name: "MS PowerPoint", icon: Icons.MSPowerPoint, color: "#D24726" },
    { name: "Adobe Illustrator", icon: Icons.Illustrator, color: "#FF9A00" },
    { name: "Adobe Photoshop", icon: Icons.Photoshop, color: "#31A8FF" },
    { name: "Android Studio", icon: Icons.AndroidStudio, color: "#3DDC84" },
    { name: "Firebase", icon: Icons.Firebase, color: "#FFCA28" },
    { name: "GitHub", icon: Icons.GitHub, color: "#181717" },
    { name: "VS Code", icon: Icons.VSCode, color: "#007ACC" },
    { name: "Stripe", icon: Icons.Stripe, color: "#635BFF" },
  ];

  const orbit4Data = [
    { name: "Netlify", icon: Icons.Netlify, color: "#00C7B7" },
    { name: "Surge", icon: Icons.Surge, color: "#CB3837" },
    { name: "Cloudflare", icon: Icons.Cloudflare, color: "#F38020" },
    { name: "Vercel", icon: Icons.Vercel, color: "#000000" },
    { name: "ChatGPT", icon: Icons.ChatGPT, color: "#10A37F" },
    { name: "Gemini", icon: Icons.Gemini, color: "#8E75B2" },
    { name: "DeepSeek", icon: Icons.DeepSeek, color: "#1C64F2" },
    { name: "Stitch", icon: Icons.Stitch, color: "#8B5CF6" },
    { name: "Antigravity", icon: Icons.Antigravity, color: "#222222" },
  ];

  /*
  |--------------------------------------------------------------------------
  | Render Orbit Component
  |--------------------------------------------------------------------------
  */

  const renderOrbit = (data, radiusPercent, duration, isClockwise, orbitIndex) => {
    const isHovered = hoveredOrbit === orbitIndex;
    const directionClass = isClockwise ? "animate-orbit-cw" : "animate-orbit-ccw";
    const counterDirectionClass = isClockwise ? "animate-orbit-ccw" : "animate-orbit-cw";

    return (
      <div
        className="absolute rounded-full border pointer-events-auto transition-all duration-500"
        style={{
          width: `${radiusPercent * 2}%`,
          height: `${radiusPercent * 2}%`,
          borderColor: isHovered ? "rgba(6, 182, 212, 0.85)" : "rgba(148, 163, 184, 0.35)",
          boxShadow: isHovered
            ? `0 0 15px rgba(6,182,212,0.5), inset 0 0 15px rgba(6,182,212,0.15)`
            : "none",
        }}
        onMouseEnter={() => setHoveredOrbit(orbitIndex)}
        onMouseLeave={() => setHoveredOrbit(null)}
      >
        <div
          className={`relative w-full h-full ${directionClass}`}
          style={{ animationDuration: `${duration}s` }}
        >
          {data.map((item, index) => {
            const angle = (index / data.length) * 360;
            const angleRad = (angle * Math.PI) / 180;

            // Positioning dynamically based on percentage inside container
            const left = 50 + radiusPercent * Math.cos(angleRad) * (50 / radiusPercent);
            const top = 50 + radiusPercent * Math.sin(angleRad) * (50 / radiusPercent);

            const iconId = `${orbitIndex}-${index}`;
            const isIconHovered = hoveredIcon === iconId;

            return (
              <div
                key={item.name}
                className="absolute"
                style={{
                  top: `${top}%`,
                  left: `${left}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div
                  className={counterDirectionClass}
                  style={{ animationDuration: `${duration}s` }}
                >
                  <div
                    className="group relative flex items-center justify-center cursor-pointer"
                    onMouseEnter={() => setHoveredIcon(iconId)}
                    onMouseLeave={() => setHoveredIcon(null)}
                  >
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-[100] whitespace-nowrap">
                      <div className="bg-yellow-300 text-black text-[10px] sm:text-xs font-medium px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg shadow-xl ">
                        {item.name}
                      </div>
                    </div>

                    {/* Icon Container with responsive sizes */}
                    <div
                      className="relative w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/95 backdrop-blur-md border border-gray-200 flex items-center justify-center transition-transform duration-300 z-10"
                      style={{
                        transform: isIconHovered ? "scale(1.25)" : "scale(1)",
                        borderColor: isIconHovered ? item.color : "rgba(229,231,235,1)",
                        boxShadow: isIconHovered
                          ? `0 0 12px ${item.color}`
                          : "0 2px 6px rgba(0,0,0,0.08)",
                      }}
                    >
                      <img
                        src={item.icon}
                        alt={item.name}
                        draggable="false"
                        className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain select-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (

    <div className="bg-gradient-to-br from-sky-50 via-blue-50 to-violet-100  p-4">

      {/* Header */}
      <div className="flex gap-2 items-center my-5 ml-5">

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
        <BsHddStackFill className="text-[#4200b4] text-2xl md:text-4xl" ></BsHddStackFill>

        <div
          className="
                                font-bold
                                text-2xl
                                md:text-4xl
                                text-black
                                text-left
                            "
        >
          Tech Stack
        </div>

      </div>


      <div className="w-full h-1/2 md:min-h-screen flex items-center justify-center  overflow-hidden">

        <style>
          {`
          @keyframes orbitCw {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes orbitCcw {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          .animate-orbit-cw { animation: orbitCw linear infinite; }
          .animate-orbit-ccw { animation: orbitCcw linear infinite; }
        `}
        </style>

        {/* Main Responsive Wrapper (Pure CSS Aspect Ratio) */}
        <div className="w-full max-w-[340px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[800px] aspect-square flex items-center justify-center relative">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Orbits (Radius in Percentage of outer wrapper) */}
            {renderOrbit(orbit4Data, 44, 60, false, 4)}
            {renderOrbit(orbit3Data, 34, 48, true, 3)}
            {renderOrbit(orbit2Data, 24, 36, false, 2)}
            {renderOrbit(orbit1Data, 14, 24, true, 1)}

            {/* Center Badge */}
            <div className="absolute z-20 w-16 h-16 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 shadow-xl flex flex-col items-center justify-center text-center p-1 pointer-events-none">
              <span className="text-sm sm:text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight">
                36+
              </span>
              <span className="text-[7px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">
                Tools & Tech
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>


  );
}