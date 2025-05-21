import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4 sm:px-6 lg:px-8 py-20 text-center overflow-x-hidden">
      <div className="max-w-3xl w-full">
        <h2 className="text-5xl font-extrabold text-base-content mb-8 break-words">
          About Me
        </h2>

        <p className="text-base-content text-lg leading-relaxed tracking-wide mb-12 font-medium break-words">
          I’m a passionate developer with a focus on creating beautiful, functional web applications. I am constantly evolving as a front-end engineer and designer, driven by my desire to build elegant and user-friendly interfaces.
          <br /><br />
          I specialize in <strong>HTML, CSS, JavaScript, and React.js</strong>, with a growing interest in <strong>Node.js</strong> and <strong>UX/UI design principles</strong>. I graduated in 2023 with a degree in Computer Science Engineering from Future Institute of Technology, West Bengal.
          <br /><br />
          Beyond web development, I regularly code in <strong>Java</strong> and solve problems on <strong>LeetCode</strong> to strengthen my grasp on <strong>Data Structures & Algorithms (DSA)</strong>. I'm currently learning <strong>System Design</strong> to deepen my understanding of scalable backend architectures and real-world software systems.
          <br /><br />
          I am always eager to collaborate on exciting new projects and ready to dive into new challenges. Open to opportunities worldwide!
        </p>
      </div>
    </div>
  );
};

export default About;
