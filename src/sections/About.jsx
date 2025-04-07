import React from 'react';
import './About.css'; // Make sure to create this CSS file

const About = () => (
    <section className="about-section">
      <video autoPlay muted loop playsInline className="background-video">
        <source 
          src="https://media.istockphoto.com/id/1399019226/video/flying-through-emerging-wireframe-tunnel-loopable-multi-colored-version-technology-innovation.mp4?s=mp4-640x640-is&k=20&c=HlKBhXipu2qI8LsHEL-iVYCh1RkevvKHibe58YBX6QU=" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
  
     
        <h2 className="about-heading">About Me</h2>
        <p className="about-paragraph">
          I am a passionate web developer who loves creating interactive and user-friendly web applications. 
          Currently, I’m diving deep into <strong>React.js</strong> to build dynamic and scalable websites.
        </p>
        <p className="about-paragraph">
          I specialize in <strong>HTML, CSS, and JavaScript</strong> and am committed to making the web a more open and accessible space for everyone.
        </p>
        <p className="about-paragraph">
          I hold a Bachelor's degree in <strong>Computer Science Engineering</strong> from <em>Future Institute of Technology</em>.
        </p>
        <p className="about-paragraph">
          I’m available for job opportunities and can start immediately. Let’s build something amazing together!
        </p>
      
    </section>
  );
  

export default About;
