import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

const projects = [
  {
    name: 'Shelvify',
    description: 'Shelvify is a Django-based Inventory Management System designed for secure and scalable inventory tracking. It features JWT-based authentication and RBAC to ensure role-specific access for Admins, Managers, and Staff. Key functionalities include task assignment, real-time inventory updates, and analytics. The application is containerized with Docker and deployed on PythonAnywhere with HTTPS.',
    github: 'https://github.com/vtbossss/Shelvify',
    live: 'https://shelvify.pythonanywhere.com',
    image: '/shelvify.png',
    techStack: ['Django', 'JWT', 'RBAC', 'Docker', 'PythonAnywhere'],
  },
  {
    name: 'TRIV',
    description: 'TRIV (Trends and Real-Time Interactive Visualization) is a Django web platform providing real-time insights into soil and vegetation health for precision farming. By integrating APIs like Agromonitoring, it streams live weather data using Kafka and WebSockets. The app includes 3D visualizations with 3.js for analyzing indices like NDVI, helping farmers make data-driven decisions.',
    github: 'https://github.com/vtbossss/TRIV',
    live: null,
    image: '/triv.png',
    techStack: ['WebSockets', 'Kafka', 'Redis', 'Django', 'Docker'],
  },
  {
    name: 'SEENEMA API',
    description: 'SEENEMA API is a RESTful API for managing movie watchlists, built with Django REST Framework. It features secure JWT-based authentication and API documentation using Swagger. Users can create, update, and manage watchlists easily. The API is deployed on PythonAnywhere for global accessibility.',
    github: 'https://github.com/vtbossss/SEE-NEMA-API',
    live: 'https://seenema.pythonanywhere.com/api/',
    image: '/seenema_api.png',
    techStack: ['Django REST Framework', 'JWT', 'Swagger', 'PythonAnywhere'],
  },
  {
    name: 'Rule Engine API',
    description: 'The Rule Engine API determines user eligibility dynamically using rules based on attributes like age and income. Built with Django REST Framework, it uses an Abstract Syntax Tree (AST) for dynamic rule evaluation. This API is designed for flexible rule creation and management, enabling seamless integration into enterprise systems.',
    github: 'https://github.com/vtbossss/ZeotapA1',
    live: null,
    image: '/rule_engine.png',
    techStack: ['Django REST Framework', 'JWT', 'AST'],
  },
  {
    name: 'Realtime Weather Monitoring',
    description: 'This system processes real-time weather data using OpenWeatherMap API and provides visual insights with daily summaries. Built with Django and Celery for background tasks, it features real-time updates using server-side events (SSE). Users can set custom alerts and track weather patterns effortlessly.',
    github: 'https://github.com/vtbossss/ZeotapA2',
    live: null,
    image: '/weather_monitoring.png',
    techStack: ['Django', 'Celery', 'Redis', 'SSE', 'Docker'],
  },
  {
    name: 'How To Fit',
    description: 'How To Fit is a fitness app featuring calculators for BMI, macros, and calories. It provides personalized diet plans and secure user authentication. Built with Django and Bootstrap, the app is containerized using Docker and deployed on PythonAnywhere for seamless accessibility.',
    github: 'https://github.com/vtbossss/htf-fitness-web-application--Django-project',
    live: 'https://vtbossss.pythonanywhere.com',
    image: '/how_to_fit.png',
    techStack: ['Django', 'Docker', 'SQLite', 'Bootstrap'],
  },
  {
    name: 'Security DBMS',
    description: 'Security DBMS is a user-friendly database management system for security records, built with Python and MySQL Connector. It enables easy CRUD operations without requiring SQL expertise. The system is deployed on PythonAnywhere for reliable and accessible use.',
    github: 'https://github.com/vtbossss/SecurityManagement',
    live: null,
    image: '/security_dbms.png',
    techStack: ['Python', 'MySQL', 'MySQL Connector (ODBC)'],
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
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.name}</h3>

              {/* Tech Stack Display */}
              <div className="text-sm mb-4 text-yellow-400"> {/* Changed color to yellow */}
                <strong>Tech Stack:</strong> {project.techStack.join(', ')} {/* Displays tech stack */}
              </div>

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
