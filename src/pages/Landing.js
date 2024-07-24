import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills.js';
import './Landing.css'



function Landing() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Experience />
      <Skills />
      {/* Add other components as needed */}
      <footer className="foot">
        Built with 💚 by Kreet Rout ©2024
      </footer>
    </div>
  );
}

export default Landing;
