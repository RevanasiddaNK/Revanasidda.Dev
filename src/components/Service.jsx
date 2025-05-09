import React from "react";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces using modern frameworks like React, Vue, or Angular.",
    technologies: "HTML, CSS, JavaScript, React, Vue",
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases using Node.js, Express, and various database technologies.",
    technologies: "Node.js, Express, MongoDB, SQL",
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills to deliver complete web applications.",
    technologies: "React, Node.js, Express, MongoDB",
  },
];

const Service = () => {
  return (
    <div className="bg-gray-900 text-white py-20" id="service">
        
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <p className="mt-2 text-gray-400"><strong>Technologies:</strong> {service.technologies}</p>
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;