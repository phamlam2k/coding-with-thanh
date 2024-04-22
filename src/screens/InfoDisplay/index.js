import React from 'react';
import './index.css'

const InfoDisplay = () => {
    return (
      <>
    <div className='main-1'>
        <div className="main">
          <div className="name">Total Tasks</div>
          <div className="info">312</div>
        </div>
        <div className="main">
          <div className="name">Total Days</div>
          <div className="info">312</div>
        </div>
        <div className="main">
          <div className="name">Total Hours</div>
          <div className="info">33</div>
        </div>
    </div>
      </>
    );
  };

export default InfoDisplay;