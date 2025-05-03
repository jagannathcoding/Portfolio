import React from "react";
import { FaJava, FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";

const Skills = () => (
  <section className="about-section skills-section">
    <h1 className="skills-title" data-aos="fade-up" data-aos-delay="100">
      Skills
    </h1>

    <div className="skills-grid">
      <div className="skill-card" data-aos="fade-up" data-aos-delay="200">
        <FaJava className="skill-icon" />
        <p>Java</p>
      </div>
      <div className="skill-card" data-aos="fade-up" data-aos-delay="280">
        <FaReact className="skill-icon" />
        <p>React</p>
      </div>
      <div className="skill-card" data-aos="fade-up" data-aos-delay="340">
        <FaNodeJs className="skill-icon" />
        <p>Node.js</p>
      </div>
      <div className="skill-card" data-aos="fade-up" data-aos-delay="380">
        <FaHtml5 className="skill-icon" />
        <p>HTML5</p>
      </div>
      <div className="skill-card" data-aos="fade-up" data-aos-delay="380">
        <FaCss3Alt className="skill-icon" />
        <p>CSS3</p>
      </div>
      {/* Add more skill cards as needed */}
    </div>


    
  </section>
);

export default Skills;
