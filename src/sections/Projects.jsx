import React from "react";
import { useThemeStore } from "../store/useThemeStore";
import { THEMES } from "../constants";

const Projects = () => {
  const { theme } = useThemeStore();
  const currentTheme = THEMES.find((t) => t.name === theme);
  const [primaryColor, secondaryColor, accentColor] = currentTheme.colors;

  return (
    <section className="py-16 px-8 mt-24">
      <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-5xl font-extrabold leading-tight" style={{ color: "white" }}>
          My Projects
        </h2>
        <p className="text-lg mt-4" style={{ color: "white" }}>
          Check out some of the amazing projects I’ve worked on. Built with the latest technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Product App */}
        <div
          className={`card shadow-xl rounded-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-2`}
          data-aos="fade-up"
          data-aos-delay="300"
          style={{ background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor}, ${accentColor})` }} // ✅ changed
        >
          <div className="card-body text-center p-6">
            <h3 className="text-3xl font-semibold mb-4" style={{ color: accentColor }}> {/* ✅ changed */}
              Product Store
            </h3>
            <p className="text-lg mb-4" style={{ color: "white" }}>
              A dynamic Product app built with the PERN stack for efficient adding products.
            </p>
            <div className="flex justify-center gap-4 mt-4 overflow-x-auto">
              <a
                href="https://store-project-1.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-6 rounded-full transition-all duration-300 ease-in-out shadow-lg"
                style={{
                  backgroundColor: primaryColor, // ✅ changed
                  color: accentColor,
                }}
              >
                Live Demo
              </a>
              <a
                href="https://github.com/jagannathcoding/STORE-PROJECT"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 rounded-full transition-all duration-300 shadow-md"
                style={{
                  backgroundColor: primaryColor, // ✅ changed
                  color: accentColor,
                }}
              >
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* CV Generator */}
        <div
          className="card shadow-xl rounded-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-2"
          data-aos="fade-up"
          data-aos-delay="700"
          style={{ background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor}, ${accentColor})` }} // ✅ changed
        >
          <div className="card-body text-center p-6">
            <h3 className="text-3xl font-semibold mb-4" style={{ color: accentColor }}> {/* ✅ changed */}
              CV Generator
            </h3>
            <p className="text-lg mb-4" style={{ color: "white" }}>
              A resume generator built using HTML, CSS, JavaScript, and React that lets users create and download custom CVs.
            </p>
            <div className="flex justify-center gap-4 mt-4 flex-wrap">
              <a
                href="https://jagannathcoding.github.io/Resume/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 rounded-full transition-all duration-300 shadow-md"
                style={{
                  backgroundColor: primaryColor, // ✅ changed
                  color: accentColor,
                }}
              >
                Live Demo
              </a>
              <a
                href="https://github.com/jagannathcoding/Resume"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 rounded-full transition-all duration-300 shadow-md"
                style={{
                  backgroundColor: primaryColor, // ✅ changed
                  color: accentColor,
                }}
              >
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Simon Game */}
        <div
          className="card shadow-xl rounded-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-2"
          data-aos="fade-up"
          data-aos-delay="900"
          style={{ background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor}, ${accentColor})` }} // 
        >
          <div className="card-body text-center p-6">
            <h3 className="text-3xl font-semibold mb-4" style={{ color: accentColor }}> 
              Simon Game
            </h3>
            <p className="text-lg mb-4" style={{ color: "white" }}>
              A fun and interactive memory game made with pure HTML, CSS, and JavaScript. Test your memory and speed!
            </p>
            <div className="flex justify-center gap-4 mt-4 flex-wrap">
              <a
                href="https://jagannathcoding.github.io/SimonGame/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 rounded-full transition-all duration-300 shadow-md"
                style={{
                  backgroundColor: primaryColor, // 
                  color: accentColor,
                }}
              >
                Live Demo
              </a>
              <a
                href="https://github.com/jagannathcoding/SimonGame"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 rounded-full transition-all duration-300 shadow-md"
                style={{
                  backgroundColor: primaryColor, // 
                  color: accentColor,
                }}
              >
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Shopping Website */}
        <div
          className="card shadow-xl rounded-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-2"
          data-aos="fade-up"
          data-aos-delay="500"
          style={{ background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor}, ${accentColor})` }} // ✅ changed
        >
          <div className="card-body text-center p-6">
            <h3 className="text-3xl font-semibold mb-4" style={{ color: accentColor }}> {/* ✅ changed */}
              Shopping Website
            </h3>
            <p className="text-lg mb-4" style={{ color: "white" }}>
              A complete e-commerce platform built with MERN, featuring user authentication and shopping cart functionality.
            </p>
            <a
              href="https://drive.google.com/drive/folders/1-1fcdMuYpRQO7SfYxb7-JDs1OqwomYf8?usp=sharing"
              className="py-3 px-6 rounded-full transition-all duration-300 ease-in-out shadow-lg"
              style={{
                backgroundColor: primaryColor, // ✅ changed
                color: accentColor,
              }}
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
