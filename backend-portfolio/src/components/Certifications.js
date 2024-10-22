import React from 'react';

const certifications = [
  {
    name: 'ServiceNow Certified Application Developer',
    link: 'https://www.servicenow.com/',
  },
  // Add more certifications as needed
];

const Certifications = () => {
  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Certifications</h2>
        <ul className="list-disc list-inside space-y-4">
          {certifications.map((certification, index) => (
            <li key={index}>
              <a 
                href={certification.link} 
                className="text-blue-400 hover:underline"
                target="_blank" 
                rel="noreferrer"
              >
                {certification.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Certifications;
