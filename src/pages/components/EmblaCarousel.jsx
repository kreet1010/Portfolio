import React, { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import styled from 'styled-components';
import Imposter from '../assets/Images/Imposter.jpg';
import Jerry from '../assets/Images/JerryTheRAT.jpg';
import spy from '../assets/Images/RequestSPY.jpg';
import '../styles/embla.css';

const projectData = [
  { img: Jerry, title: 'JerryTheRAT', description: 'This is a remote access trojan malware developed by leveraging the principles of reverse engineering, socket programming, and reverse TCP connection to bypass firewalls.' },
  { img: Imposter, title: 'Imposter', description: 'This is a command line based tool developed using Python that will change your MAC address within a desired span of time repeatedly. Key Concepts: Understanding the use of MAC addresses, configuring option sets for self-built tools.' },
  { img: spy, title: 'RequestSPY', description: 'This is a command line based tool developed in Python that has been implemented using the concept of prompt engineering and is used to verify if a request being passed into the server is legitimate or malicious. Key Concepts: Working of servers, request/response mechanism, log file tracking, API integration for using GPT\'s dataset for classifying requests as malicious.' }
];

const Card = styled.div`
  perspective: 1000px;
  height: 400px;
  width: 400px;
  cursor: pointer;

  &.flipped .card-inner {
    transform: rotateY(180deg);
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  .card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .card-back {

    transform: rotateY(180deg);
  }
`;

function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const [flippedCards, setFlippedCards] = useState({});

  const handleCardClick = (index) => {
    setFlippedCards((prevState) => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div className="embla" ref={emblaRef}>
        <div className="embla__container">
            {projectData.map((project, index) => (
                <div className="embla__slide" key={index}>
            <Card 
              className={flippedCards[index] ? 'flipped' : ''}
              onClick={() => handleCardClick(index)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <img src={project.img} alt={project.title} />
                </div>
                <div className="card-back">
                    <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
              
            </Card>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
