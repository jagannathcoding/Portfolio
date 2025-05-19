import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4 sm:px-6 lg:px-8 py-20 text-center overflow-x-hidden">
      <div className="max-w-3xl w-full">
        <h2 className="text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-8 break-words">
          About Me
        </h2>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed tracking-wide mb-12 font-medium break-words">
          I am a passionate developer focused on building elegant and user-centric interfaces.
          I’m a self-taught and constantly evolving front-end engineer/designer.
          <br /><br />
          I build software with HTML, CSS, and JavaScript — currently diving deep into React.js.
          <br /><br />
          I aim to make the web more open, accessible, and delightful.
          <br /><br />
          Graduated in 2023 with a degree in Computer Science Engineering from Future Institute of Technology, West Bengal.
          <br /><br />
          Open to exciting opportunities and ready to start immediately.
        </p>

        <button
          className="
            btn btn-primary
            inline-flex items-center justify-center
            text-lg px-8 py-3
            shadow-lg shadow-primary/50
            hover:shadow-primary/70 hover:scale-105
            transition-transform duration-300
            mx-auto block max-w-max
          "
          aria-label="Get in Touch"
        >
          <FaPaperPlane className="text-white mr-2" size={18} /> Get in Touch
        </button>
      </div>
    </div>
  );
};

export default About;