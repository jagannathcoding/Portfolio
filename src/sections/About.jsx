import React from "react";

const About = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 text-center overflow-x-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1583144568008-76743354fa5a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTIwYWVzdGhldGljfGVufDB8fDB8fHww')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl w-full text-white">
        <h2 className="text-5xl font-extrabold text-white mb-8 break-words" data-aos="fade-up">
          About Me
        </h2>

        <p
          className="text-lg leading-relaxed tracking-wide mb-12 font-medium break-words text-gray-200"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          I’m a passionate developer with a focus on creating beautiful, functional web applications. I am constantly evolving as a front-end engineer and designer, driven by my desire to build elegant and user-friendly interfaces.
          <br /><br />
          I specialize in <strong>HTML, CSS, JavaScript, and React.js</strong>, with a growing interest in <strong>Node.js</strong> and <strong>UX/UI design principles</strong>. I graduated in 2023 with a degree in Computer Science Engineering from Future Institute of Technology, West Bengal.
          <br /><br />
          Beyond web development, I regularly code in <strong>Java</strong> and solve problems on <strong>LeetCode</strong> to strengthen my grasp on <strong>Data Structures & Algorithms (DSA)</strong>. I'm currently learning <strong>System Design</strong> to deepen my understanding of scalable backend architectures and real-world software systems.
          <br /><br />
          I am always eager to collaborate on exciting new projects and ready to dive into new challenges. Open to opportunities worldwide!
          <br /><br />
          I love football and am the biggest supporter of <strong>Mohun Bagan</strong>, the biggest club in India and one of the oldest club in the world.
        </p>
      </div>
    </section>
  );
};

export default About;
