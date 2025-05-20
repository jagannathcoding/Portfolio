import React from "react";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa"; // Importing icons from react-icons

const Contact = () => (
  <section className="py-16 px-8 bg-base-200">
    <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="100">
      <h2 className="text-4xl font-extrabold text-primary">
        Contact
      </h2>
      <p className="text-lg text-gray-600 mt-4">
        Let's connect! Feel free to reach out to me through any of the following:
      </p>
    </div>

    <div className="flex justify-center space-x-12 transition-all duration-300">
      {/* Contact Information 1: Email */}
      <a
        href="mailto:jagannathdebgunin@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition-all duration-300 hover:scale-125 hover:space-x-8"
      >
        <FaEnvelope className="text-5xl text-primary mb-4 hover:text-primary-focus transition duration-300" />
      </a>

      {/* Contact Information 2: LinkedIn */}
      <a
        href="https://www.linkedin.com/in/jagannathdebgunin"
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition-all duration-300 hover:scale-125 hover:space-x-8"
      >
        <FaLinkedin className="text-5xl text-blue-600 mb-4 hover:text-blue-500 transition duration-300" />
      </a>

      {/* Contact Information 3: GitHub */}
      <a
        href="https://github.com/jagannathdebgunin"
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition-all duration-300 hover:scale-125 hover:space-x-8"
      >
        <FaGithub className="text-5xl text-gray-800 mb-4 hover:text-gray-700 transition duration-300" />
      </a>
    </div>

    {/* Say Hello Button */}
    <div className="text-center mt-8">
      <button
        className="btn btn-primary text-white py-2 px-6 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
        data-aos="fade-up"
        data-aos-delay="900"
      >
        Say Hello
      </button>
    </div>
  </section>
);

export default Contact;
