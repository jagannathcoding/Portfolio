import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
  const paragraphRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    if (paragraphRef.current) {
      observer.observe(paragraphRef.current);
    }

    return () => {
      if (paragraphRef.current) {
        observer.unobserve(paragraphRef.current);
      }
    };
  }, []);

  return (
    <section className="about-section">
      

      <h2 className="about-heading">About Me</h2>
      <p
        ref={paragraphRef}
        className={`about-paragraph ${isVisible ? 'visible' : ''}`}
      >
        I am a passionate web developer who loves creating interactive and user-friendly web applications. 
        Currently, I’m diving deep into <strong>React.js</strong> to build dynamic and scalable websites.
        <br /><br />
        I specialize in <strong>HTML, CSS, and JavaScript</strong> and am committed to making the web a more open and accessible space for everyone.
        <br /><br />
        I hold a Bachelor's degree in <strong>Computer Science Engineering</strong> from <em>Future Institute of Technology</em>.
        <br /><br />
        I’m available for job opportunities and can start immediately. Let’s build something amazing together!
      </p>
    </section>
  );
};

export default About;
