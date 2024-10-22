// src/components/Landing.js
import React from 'react';
import { motion } from 'framer-motion';

const Landing = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center">
      <motion.h1
        className="text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Vaibhav Tiwari
      </motion.h1>
      <motion.h2
        className="text-2xl mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Backend Developer | Python | Django
      </motion.h2>
      <motion.button
        className="bg-blue-500 px-6 py-3 text-lg rounded-full hover:bg-blue-700"
        whileHover={{ scale: 1.1 }}
        onClick={scrollToProjects} // Add the click handler
      >
        View My Work
      </motion.button>
    </div>
  );
};

export default Landing;
