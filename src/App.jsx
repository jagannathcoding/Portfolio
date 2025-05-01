import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const contactRef = useRef(null);
  const projectRef = useRef(null);

  const [isInView, setIsInView] = useState({
    home: false,
    about: false,
    skills: false,
    contact: false,
    project: false,
  });

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

  // Check if element is in view
  const checkIfInView = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setIsInView(prev => ({ ...prev, [entry.target.id]: true }));
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(checkIfInView, { threshold: 0.5 });

    const sections = [homeRef, aboutRef, skillRef, contactRef, projectRef];
    sections.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Parallax Effect
  useEffect(() => {
    const handleScroll = () => {
      const parallax = document.querySelector('.parallax-effect');
      let scrollPosition = window.pageYOffset;
      parallax.style.transform = `translateY(${scrollPosition * 0.5}px)`; // Parallax effect speed
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />

      <div className="parallax-effect"></div> {/* Parallax Background */}

      <div className="content-wrapper">
        <div
          id="home"
          ref={homeRef}
          className={`section ${isInView.home ? "visible" : ""}`}
        >
          <Home />
        </div>
        <div
          id="about"
          ref={aboutRef}
          className={`section ${isInView.about ? "visible" : ""}`}
        >
          <About />
        </div>
        <div
          id="skills"
          ref={skillRef}
          className={`section ${isInView.skills ? "visible" : ""}`}
        >
          <Skills />
        </div>
        <div
          id="contact"
          ref={contactRef}
          className={`section ${isInView.contact ? "visible" : ""}`}
        >
          <Contact />
        </div>
        <div
          id="project"
          ref={projectRef}
          className={`section ${isInView.project ? "visible" : ""}`}
        >
          <Projects />
        </div>
      </div>
    </>
  );
};

export default App;
