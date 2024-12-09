import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-800 text-white py-10 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-screen-lg">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-base sm:text-lg mb-6">
          I am a Backend Developer with a strong focus on building robust, scalable web applications using Python, Django, and modern technologies like Docker and REST APIs.
        </p>
        <p className="text-base sm:text-lg mb-6">
          With hands-on experience in database management, API development, and deployment pipelines, I am passionate about solving complex backend challenges.
        </p>
        <div className="flex flex-wrap items-center space-x-0 space-y-4 sm:space-x-4 sm:space-y-0">
          <a 
            href="https://drive.google.com/file/d/18DcmTg_A3ogECgDAJ1hk6OYk0xPY-8j3/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            View My Resume
          </a>
          <a 
            href="https://www.linkedin.com/in/vtbossss/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/vtbossss" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
          >
            GitHub
          </a>
          <a 
            href="https://leetcode.com/u/vtboss/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
          >
            LeetCode
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
