import React from "react";
import { useThemeStore } from "../store/useThemeStore"; // Import the theme store to get the current theme
import { THEMES } from "../constants"; // Import the themes

const Projects = () => {
  const { theme } = useThemeStore(); // Get the current theme from store

  // Find the current theme's colors
  const currentTheme = THEMES.find((t) => t.name === theme); // Get the active theme
  const [primaryColor, secondaryColor, accentColor] = currentTheme.colors; // Get the color palette

  return (
    <section className="py-16 px-8">
      <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-5xl font-extrabold text-white leading-tight">My Projects</h2>
        <p className="text-lg text-white mt-4">
          Check out some of the amazing projects I’ve worked on. Built with the latest technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div
          className={`card shadow-xl rounded-xl transition-all transform bg-${primaryColor} hover:bg-${secondaryColor} hover:scale-105 hover:shadow-2xl`}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="card-body text-center p-6">
            <h3 className={`text-3xl font-semibold text-${accentColor} mb-4`}>To-do App</h3>
            <p className={`text-lg text-${accentColor} mb-4`}>
              A dynamic to-do app built with the MERN stack for efficient task management.
            </p>
            <a
              href="#"
              className={`py-3 px-6 rounded-full bg-${primaryColor} text-${accentColor} hover:bg-${secondaryColor} hover:text-white transition-all duration-300 ease-in-out`}
            >
              View Project
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div
          className={`card shadow-xl rounded-xl transition-all transform bg-${primaryColor} hover:bg-${secondaryColor} hover:scale-105 hover:shadow-2xl`}
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="card-body text-center p-6">
            <h3 className={`text-3xl font-semibold text-${accentColor} mb-4`}>Shopping Website</h3>
            <p className={`text-lg text-${accentColor} mb-4`}>
              A complete e-commerce platform built with MERN, featuring user authentication and shopping cart functionality.
            </p>
            <a
              href="#"
              className={`py-3 px-6 rounded-full bg-${primaryColor} text-${accentColor} hover:bg-${secondaryColor} hover:text-white transition-all duration-300 ease-in-out`}
            >
              View Project
            </a>
          </div>
        </div>

        {/* Add more projects here as needed */}
      </div>
    </section>
  );
};

export default Projects;
