import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Fullscreen from '../components/fullscreen';
import { Link } from 'react-router-dom';
import '../styles/globals.css';
import '../styles/form.css';

const Form = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const checkEmail = (thisEmail) => {
    return thisEmail === email;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('currentName', name);
    localStorage.setItem('currentEmail', email);
    const emails = JSON.parse(localStorage.getItem('emails'));
    if (emails) {
      if (emails.some(checkEmail)) {
        alert('Email address already entered');
        setName('');
        setEmail('');
      } else {
        history.push('/game');
      }
    } else {
      history.push('/game');
    }
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className='wrapper'>
      <div className='form'>
        <Header />
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='name'
            value={name}
            onChange={handleNameChange}
            required
          />
          <input
            type='email'
            placeholder='email'
            value={email}
            onChange={handleEmailChange}
            required
          />
          <input className='submit' type='submit' value='Submit' />
          <button
            className='leaderboard-btn'
            onClick={() => history.push('/leaderboard')}
          >
            Leaderboard
          </button>
        </form>
      </div>
      <Fullscreen />
    </div>
  );
};

export default Form;
