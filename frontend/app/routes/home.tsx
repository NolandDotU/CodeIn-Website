import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

import React from 'react';
import Navbar from '../welcome/Navbar';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-center min-h-[70vh] bg-white px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#002C38] mb-4 text-center">
          Welcome to CodeIn
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 text-center max-w-2xl">
          CodeIn is your trusted partner for modern software solutions. We specialize in web development, cloud integration, and digital transformation to help your business grow and succeed in the digital era.
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#00C2CB] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-[#009ba1] transition-colors duration-200"
        >
          Get Started
        </a>
      </section>
    </>
  );
};

export default Home;
