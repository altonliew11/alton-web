import './General.css';
import StatsBar from './StatsBar';
import React, { useState, useEffect } from 'react';
import Strength from "../assets/images/special_strength.png";
import Perception from '../assets/images/special_perception.png';
import Endurance from '../assets/images/special_endurance.png';
import Charisma from '../assets/images/special_charisma.png';
import Intelligence from '../assets/images/special_intelligence.png';
import Agility from '../assets/images/special_agility.png';
import Luck from '../assets/images/special_luck.png';
import { TypeAnimation } from 'react-type-animation';

function General () {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    //OPTIMIZED
    return (
        <>
          <p className='pip-header'>General</p>
          {screenWidth >= 1600 && <StatsBar />}
          <a href='\Alton_resume.pdf' download='Alton_resume.pdf' className='resume'>Resume</a>
          <div className='general-container'>
            <div className='image-container'>
              <div className='special'>
                {[...Array(2)].map((_, index) => (
                  <div key={index} className='special-slide'>
                    <img src={Strength} alt=''/>
                    <img src={Perception} alt=''/>
                    <img src={Endurance} alt=''/>
                    <img src={Charisma} alt=''/>
                    <img src={Intelligence} alt=''/>
                    <img src={Agility} alt=''/>
                    <img src={Luck} alt=''/>
                  </div>
                ))}
              </div>
            </div>
            <div className='type-container'>
              <TypeAnimation
                className="type"
                sequence={[
                  500,
                  "Hello, World! I'm Alton Liew, an aspiring full-stack developer providing web-development services. Welcome to my website! Click the link on the top right to download my resume.",
                ]}
                cursor={false}
                speed={70}
                style={{ whiteSpace: '', fontSize: '1em' }}
              />
            </div>
          </div>
        </>
      );
}

export default General;