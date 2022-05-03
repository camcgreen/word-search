import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/globals.css';
import '../styles/leaderboard.css';

const Leaderboard = () => {
  return (
    <div className='leaderboard'>
      <p>Welcome to Leaderboard</p>
      <Link to='/'>Link to Home</Link>
    </div>
  );
};

export default Leaderboard;
