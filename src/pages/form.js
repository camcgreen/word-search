import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/globals.css';
import '../styles/form.css';

const Form = () => {
  return (
    <div className='form'>
      <p>Welcome to Home (Form)</p>
      <Link to='/game'>Link to Game</Link>
    </div>
  );
};

export default Form;
