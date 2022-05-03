import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/globals.css';
import '../styles/form.css';

const Game = () => {
  return (
    <div className='game'>
      <p>Welcome to Game</p>
      <Link to='/'>Link to Home</Link>
      <Link to='/leaderboard'>Link to Leaderboard</Link>
    </div>
  );
};

export default Game;
