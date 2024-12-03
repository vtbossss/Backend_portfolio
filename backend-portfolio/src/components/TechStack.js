import React from 'react';

const techStack = [
  {
    category: 'API Skills',
    skills: ['RESTful APIs', 'JWT Authentication', 'Documentation', 'Swagger'],
  },
  {
    category: 'Back-end',
    skills: ['Django', 'Django REST Framework', 'ORM'],
  },
  {
    category: 'Languages',
    skills: ['Python', 'C++', 'Java'],
  },
  {
    category: 'Tools',
    skills: ['Docker', 'ODBC', 'SQLAlchemy', 'Postman', 'Redis','Kafka','NGINX'],
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'SQLite'],
  },
  {
    category: 'Version Control',
    skills: ['Git', 'GitHub'],
  },
  {
    category: 'Front-end',
    skills: ['HTML', 'CSS', 'Bootstrap'],
  },
];

const TechStack = () => {
  return (
    <div id="techstack" className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-light-blue-400 mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techStack.map((item, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-light-blue-300 mb-4">{item.category}</h3>
              <ul className="list-disc ml-5">
                {item.skills.map((skill, index) => (
                  <li key={index} className="text-lg">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
