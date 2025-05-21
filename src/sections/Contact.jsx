import React from "react";
import { FaLinkedin, FaEnvelope, FaGithub,FaTwitter } from "react-icons/fa"; // Importing icons from react-icons

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
        href="https://www.linkedin.com/in/jagannath-deb-gunin-598326287/"
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition-all duration-300 hover:scale-125 hover:space-x-8"
      >
        <FaLinkedin className="text-5xl text-blue-600 mb-4 hover:text-blue-500 transition duration-300" />
      </a>

      {/* Contact Information 3: GitHub */}
      <a
        href="https://github.com/jagannathcoding?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition-all duration-300 hover:scale-125 hover:space-x-8"
      >
        <FaGithub className="text-5xl text-gray-800 mb-4 hover:text-gray-700 transition duration-300" />
      </a>


      <a
        href="https://x.com/itsmejagannath"
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition-all duration-300 hover:scale-125 hover:space-x-8"
        >
          <FaTwitter className="text-5xl text-blue-400 mb-4 hover:text-blue-300 transition duration-300" />
      </a>






    </div>

    {/* Say Hello Button */}
    
  </section>
);

export default Contact;
