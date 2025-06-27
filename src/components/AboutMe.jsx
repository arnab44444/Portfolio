const AboutMe = () => {
  return (
    <div className="bg-gray-200 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-500 mb-6">About Me</h2>

        {/* Casual intro */}
        <p className="text-lg text-base-content leading-relaxed mb-6">
          Hey there! 👋 I'm Arnab — a curious human who loves chai, late-night coding, 
          and occasionally talking to my bugs like they're teammates. 😅
        </p>

        {/* Professional intro */}
        <p className="text-lg text-base-content leading-relaxed">
          I'm a passionate <span className="font-semibold text-secondary">MERN Stack Developer </span> 
           with strong skills in building full-stack web applications using 
          <span className="font-semibold"> MongoDB, Express.js, React, and Node.js</span>. I enjoy 
          solving real-world problems through clean, efficient code and continuously 
          learning new technologies. My goal is to contribute to projects that make an 
          impact and grow both as a developer and a team player.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
