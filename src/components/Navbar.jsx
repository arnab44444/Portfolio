import React, { useState } from "react";
import { NavLink } from "react-router"; // use react-router-dom, not 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-screen z-50 bg-gradient-to-r from-cyan-600 to-cyan-700 shadow">
      <div className="flex justify-between items-center px-4 md:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <p className="text-white text-xl font-bold">Arnab</p>
        </div>
        
        {/* Hamburger button for small screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {/* Desktop Nav Links */}
        <div className="hidden md:flex">
          <ul className="flex gap-6 text-white font-medium">
            <li>
              <NavLink to="/" className="hover:text-gray-300">
                Home
              </NavLink>
            </li>
            <li>
              <a href="#about" className="hover:text-black transition">
                About Me
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-black transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#education" className="hover:text-black transition">
                Education
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-black transition">
                My Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-black transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Resume Button */}
        <div className="hidden md:block">
          <a
            href="/your-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm bg-white text-cyan-700 font-semibold hover:bg-gray-100"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-3 text-white font-medium">
            <li>
              <NavLink
                to="/"
                className="hover:text-gray-300"
                onClick={toggleMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-black"
                onClick={toggleMobileMenu}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-black"
                onClick={toggleMobileMenu}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="hover:text-black"
                onClick={toggleMobileMenu}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-black"
                onClick={toggleMobileMenu}
              >
                My Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-black"
                onClick={toggleMobileMenu}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/your-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-cyan-700 px-4 py-2 rounded-md text-center"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
