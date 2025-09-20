import React from "react";

const Services: React.FC = () => (
  <div className="container mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-6">Our Services</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-2">Web Development</h2>
        <p>Custom websites, React landing pages, and fullstack solutions for your business.</p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-2">Mobile Apps</h2>
        <p>Cross-platform mobile applications for iOS and Android using React Native and Flutter.</p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-2">AI & Data Solutions</h2>
        <p>Machine learning, data analytics, and automation to power your business growth.</p>
      </div>
    </div>
  </div>
);

export default Services;
