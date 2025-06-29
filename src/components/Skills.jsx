import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiFirebase,
  SiDaisyui,
  SiVite,
} from "react-icons/si";

const skill = [
  { name: "C", icon: <SiC className="text-xl sm:text-2xl md:text-3xl" color="#A8B9CC" /> },
  { name: "C++", icon: <SiCplusplus className="text-xl sm:text-2xl md:text-3xl" color="#00599C" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-xl sm:text-2xl md:text-3xl" color="#F7DF1E" /> },
  { name: "HTML", icon: <SiHtml5 className="text-xl sm:text-2xl md:text-3xl" color="#E34F26" /> },
  { name: "CSS", icon: <SiCss3 className="text-xl sm:text-2xl md:text-3xl" color="#1572B6" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-xl sm:text-2xl md:text-3xl" color="#47A248" /> },
  { name: "React", icon: <SiReact className="text-xl sm:text-2xl md:text-3xl" color="#61DAFB" /> },
  { name: "Express.js", icon: <SiExpress className="text-xl sm:text-2xl md:text-3xl" color="#000000" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-xl sm:text-2xl md:text-3xl" color="#339933" /> },
  { name: "Firebase", icon: <SiFirebase className="text-xl sm:text-2xl md:text-3xl" color="#FFCA28" /> },
  { name: "DaisyUI", icon: <SiDaisyui className="text-xl sm:text-2xl md:text-3xl" color="#FF69B4" /> },
  { name: "Vite", icon: <SiVite className="text-xl sm:text-2xl md:text-3xl" color="#646CFF" /> },
];

const Skills = () => {
  return (
    <div className="relative w-full bg-gradient-to-br from-cyan-50 via-white to-blue-100 py-16 px-4 md:px-10 overflow-hidden">
      {/* Glowing circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-300 opacity-20 rounded-full blur-3xl animate-pulse-fast"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-300 opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>

      <h2 className="text-4xl font-extrabold text-center text-cyan-500 mb-12 drop-shadow-lg">
        Skills
      </h2>

      <div className="overflow-hidden rounded-3xl border-4 border-dashed border-cyan-400 shadow-xl">
        <div className="animate-marquee flex gap-6 py-8 px-6 whitespace-nowrap w-max">
          {[...skill, ...skill, ...skill].map((skill, index) => (
            <div
              key={index}
              className="min-w-[90px] sm:min-w-[100px] md:min-w-[120px] h-24 sm:h-28 md:h-32 bg-white/60 backdrop-blur-md border border-gray-300 rounded-xl shadow-md hover:shadow-xl transition hover:scale-105 flex flex-col items-center justify-center"
            >
              <div className="mb-2">{skill.icon}</div>
              <p className="text-xs sm:text-sm font-semibold text-gray-700">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes scroll-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            animation: scroll-marquee 20s linear infinite;
          }

          @keyframes pulseFast {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.1); }
          }

          .animate-pulse-fast {
            animation: pulseFast 7s infinite;
          }

          @keyframes pulseSlow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.05); }
          }

          .animate-pulse-slow {
            animation: pulseSlow 12s infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Skills;
