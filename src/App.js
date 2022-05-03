import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/globals.css';

function App() {
  useEffect(() => {
    console.log('App running');
  }, []);
  return (
    <div className='App'>
      <Link to='/game'>Link to Game</Link>
    </div>
  );
}

export default App;
