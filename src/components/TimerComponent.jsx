import React, { useState, useEffect } from 'react';
// import { ClockCircleOutlined} from '@ant-design/icons';

import './TimerComponent.css';

const TimerComponent = () => {
  const [time, setTime] = useState(getTimeRemaining());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(getTimeRemaining());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  function getTimeRemaining() {
    const total = Date.parse(new Date()) - Date.parse(new Date(2024, 0, 1)); // example target date
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div style={{background:'black', marginLeft:'50%', marginTop:'0px'}}>
    <div className='content'>
      <h2 className='heading-main'>Reward unlocks in</h2>
      <div className='timer-container'>
        <div className='time-section'>
          <div className='value'>{time.days}</div>
          <div className='label'>Days</div>
        </div>
        <div className='time-section'>
          <div className='value'>{time.hours}</div>
          <div className='label'>Hrs</div>
        </div>
        <div className='time-section'>
          <div className='value'>{time.minutes}</div>
          <div className='label'>Mins</div>
        </div>
        <div className='time-section'>
          <div className='value'>{time.seconds}</div>
          <div className='label'>Secs</div>
        </div>
      </div>
    </div>
    <div className='sub-img-container'>
    <div className='image'>
        <img src='https://www.intract.io/assets/kol-reward-12e6ae06.gif' alt="" style={{ width: '296px', height: '296px' ,marginTop:'12px', borderRadius:'12px'}} />
        <div className='footer-content'>
          <h2>Exclusive Community</h2>
        <span>- - - - -  - - - - - - - - - - - - - - - - - -  </span>
        <p>Complete all Essential quests</p>
        <p>Complete at least 1 Alpha Hub quest today</p>
        <button>Claim Now Angle Top Icon</button>
        </div>
    </div>
    </div>
    </div>
  );
};

export default TimerComponent;
