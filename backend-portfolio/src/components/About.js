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
        <div className="flex items-center space-x-4">
          <a 
            href="https://drive.google.com/file/d/18DcmTg_A3ogECgDAJ1hk6OYk0xPY-8j3/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            View My Resume
          </a>
          <a 
            href="https://www.linkedin.com/in/vtbossss/" // Replace with your LinkedIn profile URL
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/vtbossss" // Replace with your GitHub profile URL
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
          >
            GitHub
          </a>
          <a 
            href="https://leetcode.com/u/vtboss/" // Replace with your LeetCode profile URL
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
