import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-gray-200 px-6 md:px-16">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12">
        {/* Right Image */}
        <img
          src="https://i.ibb.co/Kj43jWXH/1000043742.jpg"
          className="max-w-sm w-48 md:w-72 rounded-full shadow-2xl"
          alt="Arnab Biswas"
        />

        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-500">
            Arnab Biswas
          </h1>
          <h2 className="text-2xl md:text-2xl font-semibold  mt-2">
            MERN Stack Developer
          </h2>
          <p className="py-4 text-lg leading-relaxed">
            Hello, I'm from Bangladesh.
            <br />
            Passionate about building full-stack web apps with modern tech.
            <br />
            Always learning, always coding.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center lg:justify-start mt-4 text-2xl text-neutral">
            <a
              href="https://github.com/arnab44444"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-500 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/arnabbiswas44444"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/arnabbiswas444"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-500 transition"
            >
              <FaTwitter />
            </a>
          </div>

          {/* Resume Button */}
          <div className="mt-6">
            <button
              className="rounded-full px-6 btn btn-primary"
              onClick={() =>
                window.open("https://example.com/resume.pdf", "_blank")
              }
            >
              View Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
