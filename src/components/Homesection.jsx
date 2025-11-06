import React from "react";
import { ArrowDown } from "lucide-react";
import heroImage from "../assets/b3.jpg"; // adjust path as needed

const Hero = () => {
  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
            P Nikhil Pavan
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8">
         Pursuing MCA | Tech Enthusiast |  
        </p>

        <p className="text-lg text-gray-500 mb-12">
        Enthusiastic developer skilled in C, C++, Python, and modern web tech, driven to craft innovative, scalable, and impactful solutions
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => scrollToSection("#about")}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-md hover:opacity-90 transition-transform transform hover:scale-105"
          >
            View My Work
          </button>

          <button
            onClick={() => scrollToSection("#contact")}
            className="px-6 py-3 rounded-lg border-2 border-indigo-500 text-indigo-600 font-semibold hover:bg-indigo-500 hover:text-white shadow-md transition-transform transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-indigo-500" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
