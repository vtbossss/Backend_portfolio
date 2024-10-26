// src/components/Landing.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Landing = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close the menu after navigation
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(/background.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
      className="text-white flex flex-col justify-center items-center w-full h-screen"
    >
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full bg-gray-800 bg-opacity-70 backdrop-blur-lg py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <span className="text-2xl font-bold">My Portfolio</span>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <button onClick={() => scrollToSection('About')} className="hover:text-blue-400">
              About
            </button>
            <button onClick={() => scrollToSection('Techstacks')} className="hover:text-blue-400">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400">
              Projects
            </button>
            <button onClick={() => scrollToSection('Certifications')} className="hover:text-blue-400">
              Certifications
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-800 bg-opacity-90 text-center py-4 space-y-2">
            <button onClick={() => scrollToSection('About')} className="block hover:text-blue-400">
              About
            </button>
            <button onClick={() => scrollToSection('Techstacks')} className="block hover:text-blue-400">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="block hover:text-blue-400">
              Projects
            </button>
            <button onClick={() => scrollToSection('Certifications')} className="block hover:text-blue-400">
              Certifications
            </button>
            <button onClick={() => scrollToSection('contact')} className="block hover:text-blue-400">
              Contact
            </button>
          </div>
        )}
      </nav>

      <motion.h1
        className="text-5xl sm:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Vaibhav Tiwari
      </motion.h1>
      <motion.h2
        className="text-lg sm:text-2xl mb-6 text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Backend Developer | Python | Django | Focused on Efficient Web Solutions | Experienced with REST APIs and Django REST Framework
      </motion.h2>
      <motion.button
        className="bg-blue-500 px-4 sm:px-6 py-2 sm:py-3 text-lg rounded-full hover:bg-blue-700"
        whileHover={{ scale: 1.1 }}
        onClick={() => scrollToSection('projects')}
      >
        View My Work
      </motion.button>
    </div>
  );
};

export default Landing;
