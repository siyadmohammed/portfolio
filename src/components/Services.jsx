import React from "react";

const services = [
  {
    id: 1,
    title: "Web Design",
    description: " Creating visually appealing and user firendly web design",
  },
  {
    id: 2,
    title: "Flutter Mobile App Development",
    description: "Building responsive and feature-rich mobile applications using Flutter."
  },
  {
    id: 3,
    title: "UI/UX Designing",
    description: "Crafting intuitive and visually engaging user experiences for websites and mobile apps."
  },
  {
    id: 4,
    title: "Video Editing and Photography",
    description: "Creating professional videos and stunning photography to enhance visual storytelling."
  },
  {
    id: 5,
    title: "Desktop App Development",
    description: "Developing efficient and scalable desktop applications with a focus on performance."
  },
  {
    id: 6,
    title: "Backend Operations of a Website",
    description: "Implementing and managing robust backend systems to ensure smooth website functionality."
  },
];

const Services = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg 
              transform transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3
                className="mt-2 text-2xl font-bold text-transparen bg-clip-text
                bg-gradient-to-r from-green-400 to-blue-500"
              >
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
