import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Fullscreen from '../components/fullscreen';
import logo from '../img/logo.svg';
import win from '../img/win.svg';
import play from '../img/play.svg';
import fast from '../img/fast.svg';
import '../styles/globals.css';
import '../styles/landing.css';

const Landing = ({ history }) => {
  return (
    <div className='wrapper' style={{ backgroundColor: '#bf0b24' }}>
      <div className='landing'>
        <img className='logo' src={logo} alt='' />
        <main className='main'>
          <div className='left'>
            <img className='win' src={win} alt='' />
            <img
              className='play'
              src={play}
              alt=''
              onClick={() => history.push('/form')}
            />
          </div>
          <img className='fast' src={fast} alt='' />
        </main>
      </div>
      <Fullscreen />
    </div>
  );
};

export default Landing;
