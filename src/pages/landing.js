import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Fullscreen from '../components/fullscreen';
import logo from '../img/logo.svg';
import ipad from '../img/ipad.png';
import clock from '../img/clock.png';
import '../styles/globals.css';
import '../styles/landing.css';

const Landing = ({ history }) => {
  return (
    <div className='wrapper' style={{ backgroundColor: '#B31B34' }}>
      <div className='landing'>
        <img className='logo' src={logo} alt='' />
        <main className='main'>
          <div className='column column-text'>
            <div>
              <p>Find the pairs in the quickest time</p>
              <p> using as few moves as possible to </p>
              <p>knock the leader off the top spot.</p>
            </div>
            <button onClick={() => history.push('/form')}>PLAY</button>
          </div>
          <div className='column'>
            <img className='ipad' src={ipad} alt='' />
          </div>
          <div className='column column-time'>
            <img className='clock' src={clock} alt='' />
            {/* <h1>FASTEST TIME WINS</h1> */}
            <div>
              <h1>FASTEST</h1>
              <h1>TIME</h1>
              <h1>WINS</h1>
            </div>
          </div>
        </main>
      </div>
      <Fullscreen />
    </div>
  );
};

export default Landing;
