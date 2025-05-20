import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1510674485131-dc88d96369b4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto py-24 sm:py-32 space-y-5 text-white">
        {/* Intro */}
        <p className="text-base sm:text-lg" data-aos="fade-up" data-aos-delay="100">
          Hi there, I'm
        </p>

        {/* Name */}
        <h1
          className="text-4xl sm:text-5xl font-extrabold leading-tight text-primary-content"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Jagannath Deb Gunin
        </h1>

        {/* Title */}
        <h2
          className="text-xl sm:text-2xl font-semibold"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Front-End Developer | JavaScript Enthusiast
        </h2>

        {/* Bio */}
        <p
          className="text-sm sm:text-base text-gray-200 max-w-lg mx-auto mt-2 px-2"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          I specialize in building responsive, user-friendly web applications using modern
          technologies like React.js, Tailwind CSS, and the MERN stack. Let’s build something great
          together.
        </p>

        {/* Call to Action */}
        <div data-aos="fade-up" data-aos-delay="500">
          <a href="#contact">
            <button className="btn btn-primary mt-4 px-6 py-3 text-base sm:text-lg rounded-full shadow-md hover:scale-105 transition-transform duration-300">
              Get in Touch
            </button>
          </a>
        </div>

        {/* Social Icons */}
        <div
          className="flex justify-center gap-6 mt-6"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <a
            href="https://github.com/jagannathdebgunin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/jagannathdebgunin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:jagannathdebgunin@gmail.com"
            className="hover:text-primary transition-colors"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
