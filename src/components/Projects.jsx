import React from "react";
import ProjectCard from "../components/ProjectCard";

const projectData = [
  {
    title: "Green Nest",
    description:
      "Plant Tracker Client is the frontend part of a full-stack application that allows users to manage and monitor their personal plant collection. This React-based interface provides an intuitive and visually appealing experience for adding, viewing, and editing plant-related data. It connects to the Plant-Tracker-Server backend to fetch & store data.",
    features: ["Add/Edit Plants", "Watering Date of Plants", "Dashboard Insights"],
    libraries: ["React", "MongoDB", "Express.js", "Firebase", "TailwindCSS", "DaisyUI"],
    images: [
      "https://i.ibb.co/Cs4psMQQ/Screenshot-12.png",
      "https://i.ibb.co/h1F55pj1/Screenshot-13.png",
      "https://i.ibb.co/pj42Bxf9/Screenshot-14.png",
      "https://i.ibb.co/Xx1KZ6rz/Screenshot-15.png",
    ],
    liveLink: "https://plant-tracker-client.web.app/",
    clientLink: "https://github.com/arnab44444/Plant-Tracker-Client.git",
    serverLink: "https://github.com/arnab44444/Plant-Tracker-Server.git",
    detailsLink: "/project-details/plant",
  },
  {
    title: "Book Verse",
    description:
      "The Library Management System is a web-based application built to help users manage a virtual library efficiently. It provides a simple and user-friendly interface to browse, add, borrow, and manage books. This system is ideal for small-scale libraries, educational institutes, or personal collections. React is the main part for this project.",
    features: ["Showing Categorywise Books", "Borrow and Return Tracking", "Search & Filter Books"],
    libraries: ["React", "MongoDB", "Express.js", "Firebase", "TailwindCSS", "DaisyUI"],
    images: [
      "https://i.ibb.co/0bwtb4K/Screenshot-17.png",
      "https://i.ibb.co/679Z6hxv/Screenshot-19.png",
      "https://i.ibb.co/1tfLW4rB/Screenshot-20.png",
      "https://i.ibb.co/203JdrZj/Screenshot-21.png",
      "https://i.ibb.co/rGJzP8Gs/Screenshot-22.png",
    ],
    liveLink: "https://library-client-ccb7c.web.app/",
    clientLink: "https://github.com/arnab44444/Library-Management-System.git",
    serverLink: "https://github.com/arnab44444/Library-Management-System-server.git",
    detailsLink: "/project-details/library",
  },

  {
    title: "Arnab's Kitchen",
    description:
      "This project serves as the client-side counterpart of a full-stack restaurant management system and is structured to easily integrate with backend APIs for dynamic content such as food items, user interactions, and order processing.It reflects the design principles of simplicity, speed, and scalability, making it a solid base for real-world restaurant websites or food service platforms..",
    features: ["Add/Edit Foods", "Beautiful, responsive homepage with modern design", "Display food items with details"],
    libraries: ["React", "MongoDB", "Express.js", "Firebase", "TailwindCSS", "DaisyUI"],
    images: [
      "https://i.ibb.co/KxdQzYKh/Screenshot-23.png",
      "https://i.ibb.co/TDTZjDK3/Screenshot-24.png",
      "https://i.ibb.co/LXgqcqKJ/Screenshot-25.png",
      "https://i.ibb.co/V00Ns5VW/Screenshot-26.png",
      "https://i.ibb.co/N6FZ8Fj2/Screenshot-27.png",
    ],
    liveLink: "",
    clientLink: "https://github.com/arnab44444/restuarent-client.git",
    serverLink: "https://github.com/arnab44444/restuarent-server.git",
    detailsLink: "/project-details/kitchen",
  },
];

const Projects = () => {
  return (
    <section className="relative w-full px-6 py-16 bg-gradient-to-br from-cyan-100 via-white to-blue-100 overflow-hidden">
      {/* Background Glowing Accents */}
      <div className="absolute top-12 left-10 w-44 h-44 bg-cyan-300 opacity-20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-24 right-14 w-56 h-56 bg-blue-300 opacity-20 rounded-full blur-3xl z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl font-bold text-center text-cyan-500 mb-16 tracking-wide drop-shadow-md">
          My Projects
        </h2>

        <div className="space-y-12">
          {projectData.map((project, idx) => (
            <div
              key={idx}
              className="bg-white/50 backdrop-blur-md border border-gray-300 rounded-3xl p-10 shadow-xl transition hover:shadow-2xl"
            >
              {/* You can still use your ProjectCard component here if it supports props nicely,
                  or simply render inside here as needed. For demo, I'll just call ProjectCard */}
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
