import React from 'react';
import Landing from './components/landing';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import TechStack from './components/TechStack';

function App() {
  return (
    <div>
      <Landing />
      <section id="About">
        <About />
      </section>
      <section id="Techstacks">
        <TechStack />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="Certifications">
        <Certifications />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
