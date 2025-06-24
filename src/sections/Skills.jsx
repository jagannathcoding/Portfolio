import React, { useEffect } from "react";
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaCode,
  FaGitAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  { icon: <FaJava className="text-5xl text-orange-600" />, name: "Java" },
  { icon: <FaReact className="text-5xl text-cyan-500" />, name: "React" },
  { icon: <FaNodeJs className="text-5xl text-green-600" />, name: "Node.js" },
  { icon: <FaCode className="text-5xl text-gray-600" />, name: "Express.js" },
  { icon: <FaHtml5 className="text-5xl text-orange-500" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-5xl text-blue-500" />, name: "CSS3" },
  { icon: <FaGitAlt className="text-5xl text-red-500" />, name: "Git" },
];

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className="py-10 bg-base-100 min-h-screen mt-24 mb-10 pt-24"
      id="skills"
      style={{ scrollMarginTop: "80px" }}
    >
      <div
        className="text-center mb-10"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h1 className="text-4xl font-bold text-primary">Skills</h1>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl px-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center p-6"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <div className="relative flex justify-center items-center p-6 rounded-full bg-base-200 shadow-lg transition-all duration-500 ease-in-out hover:scale-150 hover:shadow-xl">
                {skill.icon}
              </div>
              <p className="mt-2 font-semibold text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
