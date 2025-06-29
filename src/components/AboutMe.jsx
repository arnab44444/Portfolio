const AboutMe = () => {
  return (
    <section className="bg-gradient-to-br from-cyan-50 to-blue-100 py-16 px-4 md:px-10">
      <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-md rounded-2xl p-10 shadow-md border border-blue-200">
        <h2 className="text-4xl font-extrabold text-cyan-500 text-center mb-6">
          About Me
        </h2>

        {/* Friendly Introduction */}
        <p className="text-lg text-gray-800 leading-relaxed mb-6 text-center">
          Hey there! 👋 I’m{" "}
          <span className="font-semibold text-cyan-600">Arnab</span> — a curious
          coder, chai lover, and someone who occasionally has deep conversations
          with bugs. 
        </p>

        {/* Professional Introduction */}
        <p className="text-lg text-gray-800 leading-relaxed text-center">
          I'm a passionate{" "}
          <span className="font-semibold text-cyan-600">
            MERN Stack Developer
          </span>{" "}
          who loves building full-stack web applications using{" "}
          <span className="font-semibold">MongoDB, Express.js, React,</span> and{" "}
          <span className="font-semibold">Node.js</span>. I enjoy solving
          real-world problems with clean and efficient code. I’m constantly
          learning and improving, aiming to contribute to meaningful projects
          and grow as both a developer and a team player.
        </p>
      </div>
    </section>
  );
};
export default AboutMe;
