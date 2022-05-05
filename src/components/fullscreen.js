import React from 'react';
import fullscreenIcon from '../img/fullscreen.svg';
import '../styles/fullscreen.css';

const Fullscreen = () => {
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };
  return (
    <button
      className='fullscreen'
      onClick={() => {
        toggleFullScreen();
      }}
    >
      <img src={fullscreenIcon} alt='' />
    </button>
  );
};

export default Fullscreen;
