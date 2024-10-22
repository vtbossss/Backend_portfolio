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
    <div
      style={{
        backgroundImage: `url(/background.jpg)`, // Reference the image directly
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
      className="text-white flex flex-col justify-center items-center"
    >
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
       Backend Developer | Python | Django | Focused on Efficient Web Solutions | Experienced with REST APIs and Django REST Framework
      </motion.h2>
      <motion.button
        className="bg-blue-500 px-6 py-3 text-lg rounded-full hover:bg-blue-700"
        whileHover={{ scale: 1.1 }}
        onClick={scrollToProjects}
      >
        View My Work
      </motion.button>
    </div>
  );
};

export default Landing;
