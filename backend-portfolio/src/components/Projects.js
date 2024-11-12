import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

const projects = [
  {
    name: 'How To Fit',
    description: 'How To Fit is a fitness app that helps users track their fitness through various calculators, including BMI, macro, and calorie calculators. The app offers personalized diet plans to help users achieve their fitness goals. User authentication is implemented to ensure secure access to personalized features. The application is containerized using Docker for seamless deployment and scalability. It is deployed on PythonAnywhere for easy accessibility and maintainability.',
    github: 'https://github.com/vtbossss/htf-fitness-web-application--Django-project',
    live: 'https://vtbossss.pythonanywhere.com',
    image: '/how_to_fit.png', // Path to the image
    techStack: ['Django', 'Docker', 'Sqlite', 'Bootstrap'], // Added tech stack
  },
  {
    name: 'SEENEMA API',
    description: 'SEENEMA API is a RESTful API designed for managing movie watchlists, built with Django REST Framework. It features JWT token authentication for secure access and is documented using DRF Spectacular and Swagger, ensuring comprehensive integration. Users can easily add, remove, and manage their movie lists, making it a valuable tool for film enthusiasts. This API is deployed on PythonAnywhere.',
    github: 'https://github.com/vtbossss/SEE-NEMA-API',
    live: 'https://seenema.pythonanywhere.com/api/',
    image: '/seenema_api.png', // Path to the image
    techStack: ['Django','Django REST Framework', 'JWT', 'DRF Spectacular', 'Swagger'], // Added tech stack
  },
  {
    name: 'Security DBMS',
    description: 'Security DBMS is a database management system built with Python and MySQL Connector, designed for the efficient management of security-related records and data. Users can perform CRUD operations easily without typing extensive SQL queries in the terminal, thanks to its user-friendly interface. This application prioritizes accessibility for non-technical staff and is deployed on PythonAnywhere for convenient and reliable use for the users.',
    github: 'https://github.com/vtbossss/SecurityManagement',
    image: '/security_dbms.png', // Path to the image
    techStack: ['Python', 'MySQL', 'Python-MySql Connector(ODBC)'], // Added tech stack
  },
  {
    name: 'Rule Engine API',
    description: 'The Rule Engine API is a robust 3-tier application designed to determine user eligibility based on attributes such as age, department, income, and spending patterns. Built with Django REST Framework, it utilizes an Abstract Syntax Tree (AST) structure for dynamic rule creation and evaluation. This flexibility enables organizations to implement complex eligibility criteria that adapt to changing requirements. Additionally, the API supports efficient rule management, facilitating integration into existing systems. With its modular design and powerful capabilities, the Rule Engine API is an invaluable tool for automating decision-making processes.',
    github: 'https://github.com/vtbossss/ZeotapA1', // Update with the actual GitHub link if available
    image: '/rule_engine.png', // Path to the image
    techStack: ['Django REST Framework', 'JWT', 'AST',], // Added tech stack
  },
  {
    name: 'Realtime Weather Monitoring',
    description: 'This Weather Monitoring system processes real-time weather data using the OpenWeatherMap API and provides insights through daily summaries and visualizations. The application allows users to set customizable alerts for various metrics and view data trends. Built with Django and Celery for background task processing, it supports data rollups and aggregations, making it valuable for tracking weather patterns over time. Additionally, the weather data is updated every minute using server-side events, ensuring that users receive the latest information without the need to reload the application.',
    github: 'https://github.com/vtbossss/ZeotapA2', // Update with the actual GitHub link if available
    image: '/weather_monitoring.png', // Path to the image
    techStack: ['Django', 'Celery', 'Redis','SSE','Docker'], // Added tech stack
  },
  {
    name: 'TRIV (Under Development)',
    description: 'TRIV (Trends and Real-Time Interactive Visualization) is a Django-based web platform focused on agriculture that provides real-time data insights into soil and vegetation health to support precision farming. By integrating APIs like Agromonitoring, it streams soil and weather data while using Kafka and WebSockets to enable live updates. TRIV’s unique 3D visualizations, created with 3.js, allow users to monitor and analyze indices like NDVI in an interactive format, helping farmers make data-driven decisions. The project is also designed to allow future features like custom polygon data input for personalized area monitoring.',
    github: 'https://github.com/vtbossss/TRIV', // Update with the actual GitHub link if available
    image: '/triv.png', // Path to the image
    techStack: ['Websockets', 'Kafka', 'Redis','Django','Docker'], // Added tech stack
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
