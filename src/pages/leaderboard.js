import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Fullscreen from '../components/fullscreen';
import { convertTime } from '../utils/helpers';
import iconExport from '../img/export.svg';
import '../styles/globals.css';
import '../styles/leaderboard.css';

const Leaderboard = ({ history }) => {
  const [leaderboardArr, setLeaderboardArr] = useState([]);
  const exportData = (data) => {
    const exportBtn = document.querySelector('.export');
    // const blob = new Blob(['hello ', 'world'], { type: 'text/plain' });
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    // const blob = new Blob([JSON.stringify(data)], {
    //   type: 'application/vnd.ms-excel',
    // });
    exportBtn.href = URL.createObjectURL(blob);
  };
  useEffect(() => {
    const storedNames = JSON.parse(localStorage.getItem('names'));
    const storedEmails = JSON.parse(localStorage.getItem('emails'));
    const storedTimes = JSON.parse(localStorage.getItem('times'));
    let leaderboardArr = [];
    if (storedNames) {
      for (let i = 0; i < storedNames.length; i++) {
        leaderboardArr.push({
          name: storedNames[i],
          email: storedEmails[i],
          time: storedTimes[i],
        });
      }
      leaderboardArr.sort(({ time: a }, { time: b }) => a - b);
      setLeaderboardArr(leaderboardArr);
    }
    const data = JSON.parse(JSON.stringify(leaderboardArr));
    for (const obj of data) {
      obj.time = convertTime(obj.time);
    }
    exportData(data);
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
      <a className='export' download='export.json'>
        {/* <a className='export' download='export.xlsx'> */}
        <img src={iconExport} alt='' />
      </a>
      <Fullscreen />
    </div>
  );
};

export default Leaderboard;
