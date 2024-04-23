import React, { useContext } from 'react';
import './index.css'
import HomeScreen from '../../../screens/Home';
import { HomeContext } from '../../../screens/Home';

const InfoDisplay = () => {

    const {totalTask, totalHours, totalDays} = useContext(HomeContext)

    
    return (
      <>
    <div className='main-1'>
        <div className="main">
          <div className="name">Total Tasks</div>
          <div className="info">{totalTask}</div>
        </div>
        <div className="main">
          <div className="name">Total Days</div>
          <div className="info">{totalDays}</div>
        </div>
        <div className="main">
          <div className="name">Total Hours</div>
          <div className="info">{totalHours}</div>
        </div>
    </div>
      </>
    );
  };

export default InfoDisplay;