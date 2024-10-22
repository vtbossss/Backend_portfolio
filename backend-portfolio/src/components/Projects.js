import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

const projects = [
  {
    name: 'How To Fit',
    description: 'How To Fit is a fitness app that helps users track their fitness through various calculators, including BMI, macro, and calorie calculators. The app offers personalized diet plans to help users achieve their fitness goals. User authentication is implemented to ensure secure access to personalized features. The application is containerized using Docker for seamless deployment and scalability. It is deployed on PythonAnywhere for easy accessibility.',
    github: 'https://github.com/vtbossss/htf-fitness-web-application--Django-project',
    live: 'https://vtbossss.pythonanywhere.com',
    image: '/how_to_fit.png', // Path to the image
  },
  {
    name: 'SEENEMA API',
    description: 'SEENEMA API is a RESTful API designed for managing movie watchlists, built with Django REST Framework. It features JWT token authentication for secure user access and is documented using both DRF Spectacular and Swagger, ensuring comprehensive integration and usage. Users can seamlessly add, remove, and manage their movie lists, making it a valuable tool for film enthusiasts. This API is deployed on PythonAnywhere.',
    github: 'https://github.com/vtbossss/SEE-NEMA-API',
    live: 'https://seenema.pythonanywhere.com/api/schema/docs/',
    image: '/seenema_api.png', // Path to the image
  },
  {
    name: 'Security DBMS',
    description: 'Security DBMS is a database management system built with Python and MySQL Connector, designed for efficient management of security-related records. Users can perform CRUD operations easily without typing extensive SQL queries in the terminal, thanks to its user-friendly interface. This application prioritizes accessibility for non-technical staff and is deployed on PythonAnywhere for convenient use.',
    github: 'https://github.com/vtbossss/SecurityManagement',
    image: '/security_dbms.png', // Path to the image
  },
];

const Projects = () => {
  return (
    <div id="projects" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <a href={project.live || project.github} target="_blank" rel="noreferrer">
                <div className="h-40 sm:h-48 overflow-hidden mb-4">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-contain" 
                  />
                </div>
              </a>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">{project.name}</h3>
              <p className="text-sm sm:text-base mb-6">{project.description}</p>
              <div className="flex justify-between">
                <a href={project.github} className="text-blue-400" target="_blank" rel="noreferrer">
                  <FaGithub size={24} />
                </a>
                {project.live && project.live !== '#' && (
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
