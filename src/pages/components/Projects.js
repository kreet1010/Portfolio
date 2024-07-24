import React from 'react';
import '../styles/Projects.css';
import Carousel from './EmblaCarousel.jsx';


const Projects = () => {
  
  return (
    <div className="projects" id="projects">
      <div className="sectionTitle">
        <h1>Dive into my <span>imaginary realm</span></h1>
      </div>
      <Carousel/>
    </div>
  );
};

export default Projects;
