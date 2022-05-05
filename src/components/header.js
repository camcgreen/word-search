import React from 'react';
import '../styles/globals.css';
import '../styles/header.css';
import logo from '../img/logo.svg';

const Header = () => {
  return (
    <header className='header no-select'>
      <h1 className='tagline'>PROBLEMS...SOLVED</h1>
      <img src={logo} />
    </header>
  );
};

export default Header;
