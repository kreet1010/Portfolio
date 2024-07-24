import React from 'react';
import '../styles/Home.css';
import hackerImage from '../assets/Images/hacker.png';
import { FaGithub, FaLinkedin,FaInstagram, FaSnapchatGhost } from 'react-icons/fa';
import { LuFileCode2 } from "react-icons/lu";
const Home = () => {
  return (
    <div className="Home" id="Home">
      <div className="welcome" id="welcome">
        <h1>Hey There, I'm <span className="intro">Kreet</span></h1>
        <span className="Line1" id="Line1">
          I work as an Ethical Hacker, SOC Analyst, Defensive Security Engineer & a FullStack Developer
        </span>
        <br />
        <span className="Line2" id="Line2">
          Currently pursuing a degree in Bachelore's of Technology, Majoring in Computer Science Engineering, at Vellore Institute of technology, Chennai.<br />
          I'm a dedicated & techie student, studying in the final year of my degree. I have been working on my skills and have found my interest in the domain of Cyber Security. Over the years of my Engineering degree, I have learnt many relevant tool and skills that helped me understand the details of Offensive/Defensive security.<br />
          I aim to leverage the skills & knowledge to contribute meaningfully to this field of my choice and interest, and ensure resilience and security in the digital infrastructures of current era.
        </span>


        <div className="hire" id="hire">
          <a href="https://drive.google.com/file/d/10mzViYM6cfe5jVDKFDjkIQ97V6M802H4/view?usp=drive_link">Resume</a>
        </div>

        <div className="res" id="res">
          <a href="mailto:kreetrout@gmail.com">Reach-Out</a>
        </div>


        <div className = 'socials'>
          <a href="https://github.com/kreet1010" target="_blank" rel="noopener noreferrer">
            <FaGithub size={40} />
          </a>
          <a href="https://www.linkedin.com/in/kreet-rout-a404121ba" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} />
          </a>
          <a href="https://www.snapchat.com/add/kreet_1010?share_id=7vaIbRnB77U&locale=en-IN" target="_blank" rel="noopener noreferrer">
            <FaSnapchatGhost size={40} />
          </a>
          <a href="https://www.instagram.com/kreet_0308/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={40} />
          </a>
          <a href="https://www.codechef.com/users/kreetr_rout" target="_blank" rel="noopener noreferrer">
            <LuFileCode2 size={40} />
          </a>
        </div>


      </div>
      <div className="HomeImage" id="HomeImage">
        <img src={hackerImage} alt="icon" />
      </div>
    </div>
  );
}

export default Home;
