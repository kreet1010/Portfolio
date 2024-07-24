import React, { useState } from 'react';
import '../styles/Projects.css';
import Carousel from './EmblaCarousel.jsx';
import Imposter from '../assets/Images/Imposter.jpg';
import Jerry from '../assets/Images/JerryTheRAT.jpg';
import spy from '../assets/Images/RequestSPY.jpg';


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
