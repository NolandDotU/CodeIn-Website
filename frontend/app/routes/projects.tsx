import React, { useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    description: "A scalable e-commerce platform with payment integration and admin dashboard.",
  },
  {
    title: "Startup Landing Page",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    description: "Modern, animated landing page for a SaaS startup.",
  },
  {
    title: "AI Chatbot",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description: "Conversational AI chatbot for customer support.",
  },
];

const Projects: React.FC = () => {
  const [modal, setModal] = useState<number|null>(null);
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 transition-transform" onClick={() => setModal(idx)}>
            <img src={project.image} alt={project.title} className="rounded-md mb-4 w-full h-48 object-cover" />
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      {modal !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={() => setModal(null)}>
          <div className="bg-white rounded-lg p-6 max-w-lg w-full relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-2xl" onClick={() => setModal(null)}>&times;</button>
            <img src={projects[modal].image} alt={projects[modal].title} className="rounded-md mb-4 w-full h-64 object-cover" />
            <h2 className="text-2xl font-bold mb-2">{projects[modal].title}</h2>
            <p>{projects[modal].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
