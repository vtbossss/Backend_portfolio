// src/components/Landing.js
import React from 'react';
import { motion } from 'framer-motion';

const Landing = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(/background.jpg)`, // Reference the image directly
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
          <div className="space-x-4">
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
        </div>
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
