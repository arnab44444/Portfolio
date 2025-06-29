import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Library = () => {
  const images = [
    "https://i.ibb.co/0bwtb4K/Screenshot-17.png",
    "https://i.ibb.co/679Z6hxv/Screenshot-19.png",
    "https://i.ibb.co/1tfLW4rB/Screenshot-20.png",
    "https://i.ibb.co/203JdrZj/Screenshot-21.png",
    "https://i.ibb.co/rGJzP8Gs/Screenshot-22.png",
  ];

  return (
    <section>
      <Navbar />

      <h2 className="text-3xl mt-20 font-bold text-cyan-500 text-center">
        Book Verse
      </h2>

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
        {/* Screenshots */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Library Screenshot ${i + 1}`}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
          ))}
        </div>

        {/* Description */}
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-cyan-500">Description</h3>
          <p className="text-gray-700">
            A full-stack Library Management System where users can browse books,
            reserve them, and use borrow/return features. Admins can add,
            update, and manage books. It is built with the MERN stack (MongoDB,
            Express.js, React.js, Node.js) and uses Firebase Authentication.{" "}
          </p>
        </div>

        {/* Main Features */}
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-cyan-500">
            Main Features
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>User authentication with Firebase</li>
            <li>Book CRUD: add, update, delete books</li>
            <li>Reserve, borrow, and return with status tracking</li>
            <li>Responsive UI with TailwindCSS & DaisyUI</li>
            <li>Private routes secured via React Router and JWT</li>
          </ul>
        </div>

        {/* Challenges */}
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-cyan-500">
            Challenges I Faced
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Securing API endpoints with JWT and role validation</li>
            <li>Handling reservation concurrency</li>
            <li>Keeping UI consistent and responsive</li>
            <li>Synchronizing real-time status across users and admin</li>
          </ul>
        </div>

        {/* Solutions */}
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-cyan-500">
            How I Solved Them
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              Secured private API routes with JWT validation and role-check
              middleware.
            </li>
            <li>
              Used optimistic UI updates and re-fetch to handle concurrent
              reservations.
            </li>
            <li>
              Leveraged Tailwind’s utility classes with mobile-first responsive
              design.
            </li>
            <li>
              Updated book availability via backend logic and front-end state
              sync.
            </li>
          </ul>
        </div>

        {/* Future Plans */}
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-cyan-500">
            Future Improvement Plan
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              Implement email notifications for due dates and reservations
            </li>
            <li>Add advanced search: by author, genre, ISBN</li>
            <li>Add review & rating system for books</li>
            <li>Push notifications via service-worker for due reminders</li>
          </ul>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Library;
