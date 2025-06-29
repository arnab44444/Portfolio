import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Plants = () => {
  const images = [
    "https://i.ibb.co/Cs4psMQQ/Screenshot-12.png",
    "https://i.ibb.co/h1F55pj1/Screenshot-13.png",
    "https://i.ibb.co/pj42Bxf9/Screenshot-14.png",
    "https://i.ibb.co/Xx1KZ6rz/Screenshot-15.png",
  ];

  return (
    <section >

    <Navbar></Navbar>
      <h2 className="text-3xl mt-20  font-bold text-cyan-500 text-center">
        Green Nest
      </h2>

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
        {/* Screenshots */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Screenshot ${i + 1}`}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
          ))}
        </div>

        {/* Description */}
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-cyan-500">Description</h3>
          <p className="text-gray-700">
            The Plant Tracker is a full‑stack responsive web app that helps
            users log their houseplants, manage watering schedules, and monitor
            growth. It features authentication, role‑based access, a private
            dashboard, and integrates with MongoDB, Express.js, Firebase, React,
            and TailwindCSS.
          </p>
        </div>

        {/* Main Features */}
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-cyan-500">
            Main Features
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>User authentication (Firebase Auth)</li>
            <li>Add/Edit/Delete/update plant entries with images</li>
            <li>View & track next watering date per plant</li>
            <li>Responsive UI with Tailwind CSS & DaisyUI</li>
            
            <li>Private routes secured via React Router </li>
          </ul>
        </div>

        {/* Challenges */}
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-cyan-500">
            Challenges I Faced
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Securing private routes</li>
            <li>Designing a fully responsive UI across diverse devices</li>
            <li>State management for plant data consistency across pages</li>
          </ul>
        </div>

        {/* Solutions */}
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-cyan-500">
            How I Solved Them
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              Implemented <code>&lt;PrivateRoute&gt;</code> with user
              validation to guard authenticated views.
            </li>
            <li>
              Utilized Tailwind’s responsive utilities and mobile-first layouts,
              tested across screen sizes.
            </li>
            <li>
              Centralized data flow using context or hooks to keep plant state
              consistent.
            </li>
          </ul>
        </div>

        {/* Future Plans */}
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-cyan-500">
            Future Improvement Plan
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Add calendar view with reminders and notifications</li>
            <li>
              Enable users to upload time-lapse images and track growth history
            </li>
            <li>Add push notifications via service workers</li>
          </ul>
        </div>


      </div>

      <Footer></Footer>
    </section>
  );
};

export default Plants;
