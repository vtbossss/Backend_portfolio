// src/components/Contact.js
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg mb-6">Feel free to reach out for collaborations or job opportunities!</p>
        <div className="flex space-x-4">
          <a href="https://github.com/vtbossss" target="_blank" rel="noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/vtbossss" target="_blank" rel="noreferrer">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
