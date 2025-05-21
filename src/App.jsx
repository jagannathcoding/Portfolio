import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import { useThemeStore } from "./store/useThemeStore";
import Footer from "./sections/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  

  const { theme } = useThemeStore();

  const scrollToSection = (section) => {
    const refs = {
      home: homeRef,
      about: aboutRef,
      skills: skillRef,
      projects: projectRef,
      contact: contactRef,
      
    };

    if (refs[section] && refs[section].current) {
      refs[section].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true, 
      easing: 'ease-in-out', 
      offset: 100, 
    });
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <div className="content-wrapper">
        <div id="home" ref={homeRef}>
          <Home />
        </div>
        <div id="about" ref={aboutRef}>
          <About />
        </div>
        <div id="skills" ref={skillRef}>
          <Skills />
        </div>
        <div id="projects" ref={projectRef}>
          <Projects />
        </div>
        <div id="contact" ref={contactRef}>
          <Contact />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
