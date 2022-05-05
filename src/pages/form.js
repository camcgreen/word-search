import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/globals.css';
import '../styles/form.css';

const Form = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    // alert(`name = ${name}, email = ${email}`);
    localStorage.setItem('currentName', name);
    localStorage.setItem('currentEmail', email);
    history.push('/game');
    e.preventDefault();
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  // useEffect(() => {}, []);
  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type='text' value={name} onChange={handleNameChange} />
        </label>
        <label>
          Email:
          <input type='text' value={email} onChange={handleEmailChange} />
        </label>
        <input type='submit' value='Submit' />
      </form>
      {/* <Link to='/game'>Link to Game</Link> */}
      <Link
        to={{
          pathname: '/game',
          name: name,
          email: email,
        }}
      >
        Link to game
      </Link>
    </div>
  );
};

export default Form;
