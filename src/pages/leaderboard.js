import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Fullscreen from '../components/fullscreen';
import { convertTime } from '../utils/helpers';
import '../styles/globals.css';
import '../styles/leaderboard.css';

const Leaderboard = ({ history }) => {
  const [leaderboardArr, setLeaderboardArr] = useState([]);

  useEffect(() => {
    const storedNames = JSON.parse(localStorage.getItem('names'));
    const storedTimes = JSON.parse(localStorage.getItem('times'));
    let leaderboardArr = [];
    for (let i = 0; i < storedNames.length; i++) {
      leaderboardArr.push({
        name: storedNames[i],
        time: storedTimes[i],
      });
    }
    leaderboardArr.sort(({ time: a }, { time: b }) => a - b);
    setLeaderboardArr(leaderboardArr);
  }, []);

  return (
    <div className='wrapper'>
      <div className='leaderboard'>
        <Header />
        {/* <h1>Leaderboard</h1> */}
        <ul className='leaderboard-list'>
          {leaderboardArr.length > 0 ? (
            leaderboardArr.map((obj, i) => {
              return (
                <li key={i}>
                  <h2>{obj.name}</h2>
                  <p>{convertTime(obj.time)}</p>
                </li>
              );
            })
          ) : (
            <li>No times to display</li>
          )}
        </ul>
        <button className='home-btn' onClick={() => history.push('/')}>
          Home
        </button>
      </div>
      <Fullscreen />
    </div>
  );
};

export default Leaderboard;
