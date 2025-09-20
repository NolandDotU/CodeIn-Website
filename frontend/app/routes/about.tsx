import React from "react";

const About: React.FC = () => (
  <div className="container mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-6">About Us</h1>
    <p className="text-lg mb-4">We are a passionate software house specializing in web, mobile, and AI solutions. Our team delivers high-quality products for startups and enterprises worldwide.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
      <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
        <h2 className="text-xl font-semibold">John Doe</h2>
        <p className="text-gray-500">CEO & Founder</p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
        <h2 className="text-xl font-semibold">Jane Smith</h2>
        <p className="text-gray-500">Lead Developer</p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
        <h2 className="text-xl font-semibold">Alex Lee</h2>
        <p className="text-gray-500">UI/UX Designer</p>
      </div>
    </div>
  </div>
);

export default About;
