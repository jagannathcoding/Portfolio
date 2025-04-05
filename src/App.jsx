import { useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const contactRef=useRef(null)

  const scrollToSection = (section) => {
    const refs = { home: homeRef, about: aboutRef ,skills:skillRef,contact:contactRef};
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
    </>
  );
};

export default App;
