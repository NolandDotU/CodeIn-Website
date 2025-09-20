import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

import React from "react";
import Navbar from "../welcome/Navbar";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="w-full flex flex-col items-center justify-center min-h-[70vh] bg-[#fffedd] px-4 py-16 text-center">
        <p className="w-[40%] text-md font-medium tracking-wider text-[#002C38] mb-4 text-center">
          Software Development Team.
        </p>
        <h1 className="w-[40%] text-6xl font-extrabold text-[#006986] mb-4 text-center tracking-wide">
          Design and develop websites, apps, and AI-powered systems that take
          your business to the next level.
        </h1>
        <p className="w-[60%] text-lg md:text-xl text-gray-700 mb-8 text-center">
          CodeIn isn’t another agency with polished slides and endless calls.
          We’re builders. We specialize in web development, cloud integration,
          and digital transformation that actually helps your business grow—not
          six months from now, but today.
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
