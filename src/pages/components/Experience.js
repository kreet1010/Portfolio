import React from 'react';
import'../styles/Experience.css';

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <div className="sectionTitle">
        <h1>Career Voyage</h1>
      </div>


      <div className='cardsofexp'>
        <div className="expCard" id="exp1">
          <div className='headContent'>
            <div className="companyName">
              VIT Chennai
            </div>
            <div className='righthalf'>
              <div className = 'jobTitle'>
                Cyber Security Research Intern
              </div>
              <div className = 'date'>
                June24 - OnGoing 
              </div>
            </div>
            </div>
          <div className="desc">
          In my research activities on smart grid and smart city cybersecurity, I focus on identifying vulnerabilities and developing robust defense mechanisms to protect critical infrastructure. My work involves analyzing potential cyber threats, implementing advanced security measures, and ensuring the integrity and reliability of smart systems. By combining my expertise in cybersecurity with innovative approaches, I aim to contribute to the development of secure and resilient smart city technologies.
          </div>
        </div>
        <div className="expCard" id="exp1">
          <div className='headContent'>
            <div className="companyName">
              Compozent Technologies
            </div>
            <div className='righthalf'>
              <div className = 'jobTitle'>
                Cyber Security Intern
              </div>
              <div className = 'date'>
                Nov23 - Dec23 
              </div>
            </div>
            </div>
          <div className="desc">
          Actively participated in the development and deployment of a Remote Access Trojan (RAT), applying reverse
engineering techniques to enhance understanding of Android application security vulnerabilities.
Implemented robust firewall configurations to discern and regulate inbound and outbound network traffic, effectively
mitigating potential security risks in the Android ecosystem.
          </div>
        </div>
        <div className="expCard" id="exp1">
          <div className='headContent'>
            <div className="companyName">
              SmartInternz
            </div>
            <div className='righthalf'>
              <div className = 'jobTitle'>
              Cyber Security & AI Extern
              </div>
              <div className = 'date'>
                Aug23 - Nov23 
              </div>
            </div>
            </div>
          <div className="desc">
          Spearheaded the creation of an innovative authentication system, integrating dynamic user verification mechanisms
based on usage patterns to fortify Android ecosystem defenses against emerging threats.
Utilized SIEM technologies like IBM QRADAR to monitor and analyze security events, contributing to the development of
proactive strategies for identifying and neutralizing malware applications.
Applied expertise in Python, SQL, and Java to engineer prompt security solutions, ensuring alignment with evolving
Android policies while prioritizing user privacy and experience.
          </div>
        </div>
        <div className="expCard" id="exp1">
          <div className='headContent'>
            <div className="companyName">
              Lysto
            </div>
            <div className='righthalf'>
              <div className = 'jobTitle'>
              Gameplay Tester
              </div>
              <div className = 'date'>
                Aug23 - OnGoing 
              </div>
            </div>
            </div>
          <div className="desc">
          Tested games and recorded videos on gameplay sessions that was reviewed by the developers to understand if the
idea and context of the game is being delivered efficiently.
          </div>
        </div>
      </div>      
    </div>
  );
}

export default Experience;
