import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Fullscreen from '../components/fullscreen';
import '../styles/globals.css';
import '../styles/leaderboard.css';

const Leaderboard = () => {
  const [names, setNames] = useState([]);
  const [emails, setEmails] = useState([]);
  const [times, setTimes] = useState([]);

  const convertTime = (seconds) => {
    let sec = seconds % 60;
    let min = parseInt(seconds / 60);
    if (sec.toString().length == 1) {
      // padding
      sec = '00' + sec;
    }
    return min + ':' + sec;
  };

  useEffect(() => {
    const names = localStorage.getItem('names');
    // const emails = localStorage.getItem('emails');
    const times = localStorage.getItem('times');
    setNames(JSON.parse(names));
    // setEmails(JSON.parse(emails));
    setTimes(JSON.parse(times));
  }, []);
  return (
    <div className='wrapper'>
      <div className='leaderboard'>
        <p>Leaderboard</p>
        <ul>
          {names && times ? (
            names.map((name, i) => {
              return (
                <li key={i}>{`name = ${names[i]}, time = ${convertTime(
                  times[i]
                )}`}</li>
              );
            })
          ) : (
            <li>No times to display</li>
          )}
        </ul>
        <Link to='/'>Link to Home</Link>
      </div>
      <Fullscreen />
    </div>
  );
};

export default Leaderboard;
