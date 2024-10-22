import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

const projects = [
  {
    name: 'How To Fit',
    description: 'Fitness app built with Django and Docker.',
    github: 'https://github.com/vtbossss/htf-fitness-web-application--Django-project',
    live: 'https://vtbossss.pythonanywhere.com',
  },
  {
    name: 'SEENEMA API',
    description: 'REST API for movie watchlists using Django REST Framework.',
    github: 'https://github.com/vtbossss/SEE-NEMA-API',
    live: 'https://seenema.pythonanywhere.com/api/',
  },
  {
    name: 'Security DBMS',
    description: 'Database management system using Python and MySQL.',
    github: 'https://github.com/vtbossss/SecurityManagement',
    live: '#',
  },
];

const Projects = () => {
  return (
    <div id="projects" className="bg-gray-900 text-white py-20"> {/* Add id here */}
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
              <p className="mb-6">{project.description}</p>
              <div className="flex justify-between">
                <a href={project.github} className="text-blue-400" target="_blank" rel="noreferrer">
                  <FaGithub size={24} />
                </a>
                {project.live && project.live !== '#' && ( // Check that live link is not empty or '#'
                  <a href={project.live} className="text-blue-400" target="_blank" rel="noreferrer">
                    <FaLink size={24} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
