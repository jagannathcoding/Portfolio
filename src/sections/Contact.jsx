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

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Contact Information 1: Email */}
      <div
        className="card bg-white shadow-xl rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="card-body text-center">
          <FaEnvelope className="text-5xl text-primary mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800">Email</h3>
          <p className="text-gray-600 mt-2">jagannathdebgunin@gmail.com</p>
        </div>
      </div>

      {/* Contact Information 2: LinkedIn */}
      <div
        className="card bg-white shadow-xl rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="card-body text-center">
          <FaLinkedin className="text-5xl text-blue-600 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800">LinkedIn</h3>
          <p className="text-gray-600 mt-2">
            <a href="https://www.linkedin.com/in/jagannathdebgunin" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Visit my LinkedIn
            </a>
          </p>
        </div>
      </div>

      {/* Contact Information 3: GitHub */}
      <div
        className="card bg-white shadow-xl rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <div className="card-body text-center">
          <FaGithub className="text-5xl text-gray-800 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800">GitHub</h3>
          <p className="text-gray-600 mt-2">
            <a href="https://github.com/jagannathdebgunin" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:underline">
              Visit my GitHub
            </a>
          </p>
        </div>
      </div>

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
