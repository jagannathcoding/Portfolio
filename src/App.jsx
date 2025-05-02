import React, { useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const contactRef = useRef(null);
  const projectRef = useRef(null);

  const scrollToSection = (section) => {
    const refs = {
      home: homeRef,
      about: aboutRef,
      skills: skillRef,
      contact: contactRef,
      project: projectRef,
    };

    if (refs[section] && refs[section].current) {
      refs[section].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true, // <-- important for scroll up
      easing: 'ease-in-out', // optional for smooth effect
      offset: 100, // start animation slightly before element hits center
    });
  }, []);
  

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />

      <div className="parallax-effect"></div>

      <div className="content-wrapper">
        <div id="home" ref={homeRef} className="section" data-aos="fade-up">
          <Home />
        </div>
        <div id="about" ref={aboutRef} className="section" data-aos="fade-right">
          <About />
        </div>
        <div id="skills" ref={skillRef} className="section" data-aos="zoom-in">
          <Skills />
        </div>
        <div id="project" ref={projectRef} className="section" data-aos="fade-left">
          <Projects />
        </div>
        <div id="contact" ref={contactRef} className="section" data-aos="fade-up">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default App;
