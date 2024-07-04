import React, { useState } from 'react';
import './Tabs.css';
import PipboyMode from '../assets/audio/PipboyMode.wav'
import General from './General.jsx'

//Tab data array with label and content
const tabData = [
    { label: 'General', content: <General/> },
    { label: 'Status', content: <>TEST</>},
    { label: 'Quests', content: <>TEST</>},
    { label: 'Weather', content: <>TEST</>},
    { label: 'Radio', content: <>TEST</>}
  ];

const Tabs = () => {

  const [selectedTab, setSelectedTab] = useState('General');

  //Function to play a sound when button is clicked
  function playPipboyMode(tabLabel) {
    setSelectedTab(tabLabel);
    const audio = new Audio(PipboyMode);
    audio.play().catch(error => {
      console.error('Failed to play PipboyMode audio:', error);
    });
  }

return (
  <div className='content-container'>
    <div className='tabs-container'>
      {tabData.map((tab, index) => (
          <button
            key={index}
            className={`tabs-button ${selectedTab === tab.label ? 'active' : ''}`}
            onClick={() => playPipboyMode(tab.label)}
          >
            {tab.label}
          </button>
      ))}
    </div>
    <div className='tabs-content'>
      {tabData.map((tab, index) => (
        selectedTab === tab.label && <div className="tab-pane" key={index}>{tab.content}</div>
      ))}
    </div>
  </div>
  );
};

export default Tabs;