import React from "react";

const Blog: React.FC = () => (
  <div className="container mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-6">Blog</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-2">How to Choose a Software House</h2>
        <p className="text-gray-600 mb-2">Sept 2025 • 5 min read</p>
        <p>Choosing the right software house is crucial for your business. Here are some tips to help you decide...</p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-2">Why React is Great for Startups</h2>
        <p className="text-gray-600 mb-2">Sept 2025 • 4 min read</p>
        <p>React offers flexibility, speed, and a huge ecosystem. Learn why it’s a top choice for modern web apps.</p>
      </div>
    </div>
  </div>
);

export default Blog;
