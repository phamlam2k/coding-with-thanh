import React, { useContext } from 'react';
import './index.css'
import HomeScreen from '../../../screens/Home';
import { HomeContext } from '../../../screens/Home';

const InfoDisplay = () => {

    const {HandleDisplay} = useContext(HomeContext)

    
    return (
      <>
    <div className='main-1'>
        <div className="main">
          <div className="name">Total Tasks</div>
          <div className="info">{HandleDisplay.totalTask}</div>
        </div>
        <div className="main">
          <div className="name">Total Days</div>
          <div className="info">{HandleDisplay.totalDays}</div>
        </div>
        <div className="main">
          <div className="name">Total Hours</div>
          <div className="info">{HandleDisplay.totalHours}</div>
        </div>
    </div>
      </>
    );
  };

export default InfoDisplay;