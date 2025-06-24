import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  // Variants for character animation (right-to-left)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1], // ease-in-out
      },
    },
  };

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/06/55/22/27/240_F_655222742_TdJsC5H6jSFGM55tUWjpkjd8sko18Yh9.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto py-24 sm:py-32 space-y-5 text-white">
        {/* Intro */}
        <motion.p
          className="text-base sm:text-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hi there, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold leading-tight text-white"
          style={{ textShadow: "0 1px 6px rgba(0, 0, 0, 0.8)" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Jagannath Deb Gunin
        </motion.h1>

        {/* Animated Title */}
        <motion.h2
          className="text-xl sm:text-2xl font-semibold flex justify-center flex-wrap"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {"Web Developer | JavaScript Enthusiast".split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>

        {/* Bio */}
        <motion.p
          className="text-sm sm:text-base text-gray-200 max-w-lg mx-auto mt-2 px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          I specialize in building responsive, user-friendly web applications using modern
          technologies like React.js, Tailwind CSS, and the MERN stack. Let’s build something great
          together.
        </motion.p>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <a href="#contact">
            <button className="btn btn-primary mt-4 px-6 py-3 text-base sm:text-lg rounded-full shadow-md hover:scale-105 transition-transform duration-300">
              Get in Touch
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
