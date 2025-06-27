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

// List of skills with icons and colors
const skills = [
  { name: "C", icon: <SiC color="#A8B9CC" size={32} /> },
  { name: "C++", icon: <SiCplusplus color="#00599C" size={32} /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" size={32} /> },
  { name: "HTML", icon: <SiHtml5 color="#E34F26" size={32} /> },
  { name: "CSS", icon: <SiCss3 color="#1572B6" size={32} /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" size={32} /> },
  { name: "React", icon: <SiReact color="#61DAFB" size={32} /> },
  { name: "Express.js", icon: <SiExpress color="#000000" size={32} /> },
  { name: "Node.js", icon: <SiNodedotjs color="#339933" size={32} /> },
  { name: "Firebase", icon: <SiFirebase color="#FFCA28" size={32} /> },
  { name: "DaisyUI", icon: <SiDaisyui color="#FF69B4" size={32} /> },
  { name: "Vite", icon: <SiVite color="#646CFF" size={32} /> },
];

const Skills = () => {
  return (
    <div className="bg-gray-200 py-8 px-4 md:px-10 overflow-hidden relative">
      <h2 className="text-4xl font-bold text-center text-cyan-500 mb-10">
        Skills
      </h2>

      {/* Marquee Container */}
      <div className="overflow-hidden border-4 border-dashed border-neutral rounded-2xl">
        <div className="flex gap-6 px-6 py-8 whitespace-nowrap animate-marquee">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className=" bg-white border border-gray-200 text-neutral rounded-xl shadow-md hover:shadow-xl flex flex-col justify-center items-center transition hover:scale-105"
            >
              <div className="mb-2 w-28 h-20 flex items-center justify-center">
                {skill.icon}
              </div>
              <p className="text-xs font-semibold text-center pb-5">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Keyframe animation */}
      <style>
        {`
          @keyframes scroll-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            display: flex;
            animation: scroll-marquee 10s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Skills;
