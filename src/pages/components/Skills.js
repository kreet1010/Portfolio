import React, { useState } from 'react';
import '../styles/Skills.css';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Skills = () => {
  const [state, setState] = useState(1);

  const handleClick = (value) => {
    setState(value);
  };

  return (
    <div className='skills' id='skills'>
      <div className='sectionTitle'><h1>What am I good at</h1></div>
        <div className='tech'>
          <div className = 'technicalSkills'>
            Technical Acumen
          </div>
          <div className="switch-container">
            <div className="switch">
              <button className={state === 1 ? 'active' : ''} onClick={() => handleClick(1)}>Pentesting</button>
              <button className={state === 2 ? 'active' : ''} onClick={() => handleClick(2)}>SOC/SIEM</button>
              <button className={state === 3 ? 'active' : ''} onClick={() => handleClick(3)}>Network</button>
              <button className={state === 4 ? 'active' : ''} onClick={() => handleClick(4)}>Development</button>
            </div>
            <div className="content">
              {state === 1 && <div className = 'collections'>
                  <p><IoIosCheckmarkCircleOutline />Sub-Domain Enumeration</p>
                  <p><IoIosCheckmarkCircleOutline />Passive reconnaissance</p>
                  <p><IoIosCheckmarkCircleOutline />Nessus</p>
                  <p><IoIosCheckmarkCircleOutline />nmap</p>
                  <p><IoIosCheckmarkCircleOutline />BurpSuit</p>
                  <p><IoIosCheckmarkCircleOutline />Metasploit Framework</p>
                  <p><IoIosCheckmarkCircleOutline />nikto</p>
                  <p><IoIosCheckmarkCircleOutline />SQLMap</p>
                  <p><IoIosCheckmarkCircleOutline />John The Ripper</p>
                  <p><IoIosCheckmarkCircleOutline />XSStrike</p>
                  <p><IoIosCheckmarkCircleOutline />OWASP ZAP</p>
                  <p><IoIosCheckmarkCircleOutline />Hydra</p>
                </div>}
              {state === 2 && <div className = 'collections'>
                  <p><IoIosCheckmarkCircleOutline />Splunk</p>
                  <p><IoIosCheckmarkCircleOutline />IBM QRadar</p>
                  <p><IoIosCheckmarkCircleOutline />Microsoft Sentinel</p>
                  <p><IoIosCheckmarkCircleOutline />LogRythm</p>
                  <p><IoIosCheckmarkCircleOutline />AlienVault</p>
                  <p><IoIosCheckmarkCircleOutline />ArcSight ESM</p>
                  <p><IoIosCheckmarkCircleOutline />McAfee ESM</p>
                  <p><IoIosCheckmarkCircleOutline />Jira Service Management</p>
                  <p><IoIosCheckmarkCircleOutline />Opsgenie</p>
                  <p><IoIosCheckmarkCircleOutline />SolarWinds Service Desk</p>
                  <p><IoIosCheckmarkCircleOutline />Zendesk</p>
                  <p><IoIosCheckmarkCircleOutline />Moogsoft</p>
                </div>}
              {state === 3 && <div className = 'collections'>
                  <p><IoIosCheckmarkCircleOutline />Wireshark</p>
                  <p><IoIosCheckmarkCircleOutline />Airmon-ng</p>
                  <p><IoIosCheckmarkCircleOutline />Wifite</p>
                  <p><IoIosCheckmarkCircleOutline />Traceroute</p>
                  <p><IoIosCheckmarkCircleOutline />nmap</p>
                  <p><IoIosCheckmarkCircleOutline />ping</p>
                  <p><IoIosCheckmarkCircleOutline />NetCat</p>
                  <p><IoIosCheckmarkCircleOutline />hpinng</p>
                  <p><IoIosCheckmarkCircleOutline />TcpDump</p>
                </div>}
              {state === 4 && <div className = 'collections'>
                  <p><IoIosCheckmarkCircleOutline />Java</p>
                  <p><IoIosCheckmarkCircleOutline />Python</p>
                  <p><IoIosCheckmarkCircleOutline />C++</p>
                  <p><IoIosCheckmarkCircleOutline />C#</p>
                  <p><IoIosCheckmarkCircleOutline />.NET Framework</p>
                  <p><IoIosCheckmarkCircleOutline />Mongo</p>
                  <p><IoIosCheckmarkCircleOutline />Node JS</p>
                  <p><IoIosCheckmarkCircleOutline />React JS</p>
                  <p><IoIosCheckmarkCircleOutline />Express JS</p>
                  <p><IoIosCheckmarkCircleOutline />SQL</p>
                </div>}
            </div>
          </div>
        </div>  
      </div>
  );
};

export default Skills;
