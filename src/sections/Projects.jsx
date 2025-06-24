import React from "react";
import { useThemeStore } from "../store/useThemeStore";
import { THEMES } from "../constants";
import projectImage from "../assets/store.png";
import resumeImage from "../assets/Resume.png";
import chatvidImage from "../assets/chatvid.png";
import simonImage from "../assets/Simon.png";



const Projects = () => {
  const { theme } = useThemeStore();
  const currentTheme = THEMES.find((t) => t.name === theme);
  const [primaryColor, secondaryColor, accentColor] = currentTheme.colors;

  return (
    <section className="py-16 px-8 mt-24">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold leading-tight text-white">
          My Projects
        </h2>
        <p className="text-lg mt-4 text-white">
          Check out some of the amazing projects I’ve worked on. Built with the latest technologies.
        </p>
      </div>


 
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
{/* ChatVidConnect */}
<div
  className="card shadow-xl rounded-xl transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
  style={{
    backgroundImage: `url(${chatvidImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
  }}
>
  <div
    className="card-body text-center p-6 flex flex-col justify-center"
    style={{
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      backdropFilter: "blur(2px)",
      minHeight: "100%",
    }}
  >
    <h3 className="text-3xl font-semibold mb-4" style={{ color: accentColor }}>
      ChatVidConnect
    </h3>
    <p className="text-lg mb-4 text-white">
      A real-time chat and video calling app using MERN, Stream API, TanStack Query, and JWT auth.
    </p>
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      <a
        href="https://chat-vid-application.onrender.com/login"
        target="_blank"
        rel="noopener noreferrer"
        className="py-2 px-4 sm:px-6 rounded-full shadow-lg hover:scale-110"
        style={{ backgroundColor: primaryColor, color: accentColor }}
      >
        Live Demo
      </a>
      <a
        href="https://github.com/jagannathcoding/CHAT_VID_APPLICATION"
        target="_blank"
        rel="noopener noreferrer"
        className="py-2 px-4 rounded-full shadow-md hover:scale-110"
        style={{ backgroundColor: primaryColor, color: accentColor }}
      >
        Source Code
      </a>
    </div>
  </div>
</div>




    
        {/* Product Store */}
        <div
          className="card shadow-xl rounded-xl transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
          style={{
            backgroundImage: `url(${projectImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
          }}
        >
          <div
            className="card-body text-center p-6 flex flex-col justify-center"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(2px)",
              minHeight: "100%",
            }}
          >
            <h3 className="text-3xl font-semibold mb-4" style={{ color: accentColor }}>
              Product Store
            </h3>
            <p className="text-lg mb-4 text-white">
              A dynamic product app built with the PERN stack for efficient product handling.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <a
                href="https://store-project-1.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 sm:px-6 rounded-full shadow-lg hover:scale-110"
                style={{ backgroundColor: primaryColor, color: accentColor }}
              >
                Live Demo
              </a>
              <a
                href="https://github.com/jagannathcoding/STORE-PROJECT"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 rounded-full shadow-md hover:scale-110"
                style={{ backgroundColor: primaryColor, color: accentColor }}
              >
                Source Code
              </a>
            </div>
          </div>
        </div>


        

        {/* CV Generator */}
        <div
          className="card shadow-xl rounded-xl transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
          style={{
            backgroundImage: `url(${resumeImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
          }}
        >
          <div
            className="card-body text-center p-6 flex flex-col justify-center"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(2px)",
              minHeight: "100%",
            }}
          >
            <h3 className="text-3xl font-semibold mb-4" style={{ color: accentColor }}>
              CV Generator
            </h3>
            <p className="text-lg mb-4 text-white">
              A resume builder made using HTML, CSS, JavaScript, and React.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <a
                href="https://jagannathcoding.github.io/Resume/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 rounded-full shadow-md hover:scale-110"
                style={{ backgroundColor: primaryColor, color: accentColor }}
              >
                Live Demo
              </a>
              <a
                href="https://github.com/jagannathcoding/Resume"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 rounded-full shadow-md hover:scale-110"
                style={{ backgroundColor: primaryColor, color: accentColor }}
              >
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Simon Game */}
        {/* Simon Game */}
<div
  className="card shadow-xl rounded-xl transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
  style={{
    backgroundImage: `url(${simonImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
  }}
>
  <div
    className="card-body text-center p-6 flex flex-col justify-center"
    style={{
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      backdropFilter: "blur(2px)",
      minHeight: "100%",
    }}
  >
    <h3 className="text-3xl font-semibold mb-4" style={{ color: accentColor }}>
      Simon Game
    </h3>
    <p className="text-lg mb-4 text-white">
      A fun and interactive memory game made with pure HTML, CSS, and JavaScript.
    </p>
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      <a
        href="https://jagannathcoding.github.io/SimonGame/"
        target="_blank"
        rel="noopener noreferrer"
        className="py-2 px-4 rounded-full shadow-md hover:scale-110"
        style={{ backgroundColor: primaryColor, color: accentColor }}
      >
        Live Demo
      </a>
      <a
        href="https://github.com/jagannathcoding/SimonGame"
        target="_blank"
        rel="noopener noreferrer"
        className="py-2 px-4 rounded-full shadow-md hover:scale-110"
        style={{ backgroundColor: primaryColor, color: accentColor }}
      >
        Source Code
      </a>
    </div>
  </div>
</div>


        {/* Shopping Website */}
        <div
          className="card shadow-xl rounded-xl transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
          style={{
            background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor}, ${accentColor})`,
          }}
        >
          <div className="card-body text-center p-6">
            <h3 className="text-3xl font-semibold mb-4" style={{ color: accentColor }}>
              Shopping Website
            </h3>
            <p className="text-lg mb-4 text-white">
              Full MERN stack e-commerce site with authentication and dynamic product management.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://drive.google.com/drive/folders/1-1fcdMuYpRQO7SfYxb7-JDs1OqwomYf8?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 rounded-full shadow-md hover:scale-110"
                style={{ backgroundColor: primaryColor, color: accentColor }}
              >
                Source Code
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
