// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg mb-6">
          I am a Backend Developer with a strong focus on building robust, scalable web applications using Python, Django, and modern technologies like Docker and REST APIs.
        </p>
        <p className="text-lg mb-6">
          With hands-on experience in database management, API development, and deployment pipelines, I am passionate about solving complex backend challenges.
        </p>
        <a 
          href="https://drive.google.com/file/d/18DcmTg_A3ogECgDAJ1hk6OYk0xPY-8j3/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          View My Resume
        </a>
      </div>
    </div>
  );
};

export default About;
