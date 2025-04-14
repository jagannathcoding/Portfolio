/*import { useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Projects from './sections/Projects';

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const contactRef=useRef(null)
  const projectRef=useRef(null);
  

  const scrollToSection = (section) => {
    const refs = { home: homeRef, about: aboutRef ,skills:skillRef,contact:contactRef,project:projectRef};
    if (refs[section] && refs[section].current) {
      refs[section].current.scrollIntoView({ behavior: 'smooth' });
      window.location.hash = section; // Update URL
    }
  };

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) scrollToSection(hash);
  }, []);

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <div ref={homeRef}><Home /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={skillRef}><Skills /></div>
      <div ref={contactRef}><Contact /></div>
      <div ref={projectRef}><Projects/></div>
    </>
  );
};

export default App;
*/


/*

import { useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Projects from './sections/Projects';


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
      refs[section].current.scrollIntoView({ behavior: 'smooth' });
      // Remove hash update if you don't want the URL to change
    }
  };

  useEffect(() => {
    // Prevent jump to hash on first load
    window.history.replaceState(null, '', window.location.pathname);
  }, []);

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      
      {/* Padding to push content below fixed navbar }
      <div className="content-wrapper">
  <div ref={homeRef}><Home /></div>
  <div ref={aboutRef}><About /></div>
  <div ref={skillRef}><Skills /></div>
  <div ref={contactRef}><Contact /></div>
  <div ref={projectRef}><Projects /></div>
</div>

    </>
  );
};

export default App;

*/


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
