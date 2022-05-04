import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router, Route } from 'react-router-dom';

// import Home from './App';
import Form from './pages/form';
import Game from './pages/game';
import Leaderboard from './pages/leaderboard';

ReactDOM.render(
  <Router>
    <>
      <Route path='/' exact component={Form} />
      <Route path='/game' exact component={Game} />
      <Route path='/leaderboard' exact component={Leaderboard} />
    </>
  </Router>,
  document.getElementById('root')
);
