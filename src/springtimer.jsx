import React, { useEffect, useState } from 'react';
import './springtimer.css'
const CountdownToSpringFestival = () => {
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    const targetDate = new Date('2025-01-29T00:00:00+08:00').getTime();

    const interval = setInterval(() => {
      const currentDate = new Date().getTime();
      const timeDiff = targetDate - currentDate;

      if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setTimeRemaining(`Time until the Year of the Snake \n${days} d ${hours} h ${minutes} m ${seconds} s`);
      } else {
        setTimeRemaining('Happy Lunar New Year! Wishing you prosperity and joy!');
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container'>
      <div className='timebox'>
        <div className='countheader' >🎉 Lunar New Year Countdown 🎉</div>
        <div className='countdown'>{timeRemaining}</div>
        <div className='countfooter' >🎊✨ Best wishes for the Year of the Snake! ✨🎊</div>
      </div>
      <iframe className='player'style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/track/7KkWs6lt3RoWULV0BbMxpM?utm_source=generator" width="100%" height="152px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> 
    </div>
  );
};

export default CountdownToSpringFestival;
