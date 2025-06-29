import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Kitchen = () => {
  const images = [
    "https://i.ibb.co/KxdQzYKh/Screenshot-23.png",
    "https://i.ibb.co/TDTZjDK3/Screenshot-24.png",
    "https://i.ibb.co/LXgqcqKJ/Screenshot-25.png",
    "https://i.ibb.co/V00Ns5VW/Screenshot-26.png",
    "https://i.ibb.co/N6FZ8Fj2/Screenshot-27.png",
  ];

  return (
    <section>
      <Navbar />

      <h2 className="text-3xl mt-20  font-bold text-cyan-500 text-center">
        Arnab's Kitchen
      </h2>

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
        {/* Screenshots */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Kitchen Screenshot ${idx + 1}`}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
          ))}
        </div>

        {/* Description */}
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-cyan-500">Description</h3>
          <p className="text-gray-700">
            Kitchen App is a responsive restaurant ordering front-end built with React and
            TailwindCSS. Users can browse menus, view dish details, add items to cart, and
            customize orders. It supports authentication via Firebase and responsive design for
            mobile and desktop.
          </p>
        </div>

        {/* Main Features */}
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-cyan-500">Main Features</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Menu listing with categories (Appetizers, Main, Desserts)</li>
            <li>Dish detail views with descriptions and images</li>
            <li>Cart management: add, remove, update quantity</li>
            <li>User login/signup via Firebase Authentication</li>
            <li>Responsive UI using TailwindCSS</li>
          </ul>
        </div>

        {/* Challenges */}
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-cyan-500">Challenges I Faced</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Managing cart state across components</li>
            <li>Fetching and displaying menu data dynamically</li>
            <li>Ensuring seamless responsive layouts for various devices</li>
          </ul>
        </div>

        {/* Solutions */}
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-cyan-500">How I Solved Them</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Used React Context + custom hooks to centralize cart state</li>
            <li>Fetched data from REST API endpoints with loading & error states</li>
            <li>Applied mobile-first design and Tailwind’s responsive utilities</li>
          </ul>
        </div>

        {/* Future Improvement Plan */}
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-cyan-500">Future Improvement Plan</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Add order checkout flow with payment integration</li>
            <li>Enable user order history and reviews</li>
            <li>Add restaurant admin portal to manage menu items</li>
            <li>Push notifications for order status updates</li>
          </ul>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Kitchen;
