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
      
      {/* Padding to push content below fixed navbar */}
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
