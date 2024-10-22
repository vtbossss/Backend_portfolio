// src/App.js
import React from 'react';
import Landing from './components/landing';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifications from './components/Certifications';

function App() {
  return (
    <div>
      <Landing />
      <About />
      <Projects />
      <Certifications/>
      <Contact />

    </div>
  );
}

export default App;
