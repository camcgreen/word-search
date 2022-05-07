import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Fullscreen from '../components/fullscreen';
import '../styles/globals.css';
import '../styles/landing.css';

const Landing = () => {
  return (
    <div className='wrapper'>
      <h1>Landing</h1>
      <Link to='/form'>
        <button>Start</button>
      </Link>
    </div>
  );
};

export default Landing;
