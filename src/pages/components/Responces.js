import React, { useState } from 'react';
import '../styles/Projects.css';
import Imposter from '../assets/Images/Imposter.jpg';
import Jerry from '../assets/Images/JerryTheRAT.jpg';
import spy from '../assets/Images/RequestSPY.jpg';

const Projects = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const handleCardClick = (index) => {
    setFlippedCards(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div className="projects" id="projects">
      <div className="sectionTitle">
        <h1>Projects</h1>
      </div>
      <div className="cards">
        {[
          { img: Jerry, title: 'JerryTheRAT', description: 'This is a remote access trojan malware developed by leveraging the principles of reverse engineering, socket programming, and reverse TCP connection to bypass firewalls.' },
          { img: Imposter, title: 'Imposter', description: 'This is a command line based tool developed using Python that will change your MAC address within a desired span of time repeatedly. Key Concepts: Understanding the use of MAC addresses, configuring option sets for self-built tools.' },
          { img: spy, title: 'RequestSPY', description: 'This is a command line based tool developed in Python that has been implemented using the concept of prompt engineering and is used to verify if a request being passed into the server is legitimate or malicious. Key Concepts: Working of servers, request/response mechanism, log file tracking, API integration for using GPT\'s dataset for classifying requests as malicious.' }
        ].map((project, index) => (
          <div 
            key={index} 
            className={`card ${flippedCards[index] ? 'flipped' : ''}`} 
            onClick={() => handleCardClick(index)}
          >
            <div className="front">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="back">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
