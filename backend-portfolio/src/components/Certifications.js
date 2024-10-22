import React from 'react';

const certifications = [
  {
    name: 'ServiceNow Certified Application Developer',
    link: 'https://drive.google.com/file/d/1gRZfnvsyFU2K-lICWomZP8Yt6gyzGaLm/view?usp=sharing', // Update with the specific link
  },
  {
    name: 'ServiceNow Certified System Administrator',
    link: 'https://drive.google.com/file/d/1zFgrjSuLZTlbjfeyOwKAz5ZvYdynLxcv/view?usp=sharing', // Update with the specific link
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
            <li key={index} className="flex items-center justify-between">
              <a 
                href={certification.link} 
                className="text-blue-400 hover:underline"
                target="_blank" 
                rel="noreferrer"
              >
                {certification.name}
              </a>
              <a 
                href={certification.link} 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 ml-4"
                target="_blank" 
                rel="noreferrer"
              >
                View Certificate
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Certifications;
