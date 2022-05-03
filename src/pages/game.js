import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/globals.css';
import '../styles/game.css';

const Game = () => {
  // return (
  //   <div classNameName='game'>
  //     <p>Welcome to Game</p>
  //     <Link to='/'>Link to Home</Link>
  //     <Link to='/leaderboard'>Link to Leaderboard</Link>
  //   </div>
  // );
  useEffect(() => {
    handleGameLogic();
  }, []);
  return (
    <div className='wrapper game'>
      <ul className='soup no-select'>
        <li className='letter' data-active='active' data-word='frog'>
          f
        </li>
        <li className='letter' data-active='active' data-word='bear'>
          b
        </li>
        <li className='letter' data-active='active' data-word=''>
          s
        </li>
        <li className='letter' data-active='active' data-word=''>
          r
        </li>
        <li className='letter' data-active='active' data-word='panda'>
          p
        </li>
        <li className='letter' data-active='active' data-word='frog'>
          r
        </li>
        <li className='letter' data-active='active' data-word=''>
          l
        </li>
        <li className='letter' data-active='active' data-word='bear'>
          e
        </li>
        <li className='letter' data-active='active' data-word='panda'>
          a
        </li>
        <li className='letter' data-active='active' data-word='bat'>
          t
        </li>
        <li className='letter' data-active='active' data-word='frog'>
          o
        </li>
        <li className='letter' data-active='active' data-word=''>
          l
        </li>
        <li className='letter' data-active='active' data-word='panda'>
          n
        </li>
        <li className='letter' data-active='active' data-word='bear bat'>
          a
        </li>
        <li className='letter' data-active='active' data-word=''>
          z
        </li>
        <li className='letter' data-active='active' data-word='frog'>
          g
        </li>
        <li className='letter' data-active='active' data-word='panda'>
          d
        </li>
        <li className='letter' data-active='active' data-word='bat'>
          b
        </li>
        <li className='letter' data-active='active' data-word=''>
          x
        </li>
        <li className='letter' data-active='active' data-word='bear'>
          r
        </li>
        <li className='letter' data-active='active' data-word='panda'>
          a
        </li>
        <li className='letter' data-active='active' data-word='lion'>
          l
        </li>
        <li className='letter' data-active='active' data-word='lion'>
          i
        </li>
        <li className='letter' data-active='active' data-word='lion'>
          o
        </li>
        <li className='letter' data-active='active' data-word='lion'>
          n
        </li>
      </ul>
      <ul className='words no-select'>
        <li className='word'>frog</li>
        <li className='word'>bear</li>
        <li className='word'>panda</li>
        <li className='word'>lion</li>
        <li className='word'>bat</li>
      </ul>
      <Link to='/' style={{ position: 'fixed', bottom: 0, right: 0 }}>
        Link to Home
      </Link>
    </div>
  );
};

const handleGameLogic = () => {
  const nodelist = document.querySelectorAll('.letter');
  const letters = Array.apply(null, nodelist);
  const plainWords = document.querySelectorAll('.word');

  const scoreToWin = plainWords.length;
  let score = 0;

  let time = 0;
  const tick = setInterval(() => time++, 1000);
  // setInterval(tick, 1000);

  // const tick = () => {
  //   time++;
  // }

  const frog = letters.filter((letter) => {
    const dataWords = letter.dataset['word'].split(' ');
    return dataWords.some((word) => word === 'frog');
  });
  const bear = letters.filter((letter) => {
    const dataWords = letter.dataset['word'].split(' ');
    return dataWords.some((word) => word === 'bear');
  });
  const panda = letters.filter((letter) => {
    const dataWords = letter.dataset['word'].split(' ');
    return dataWords.some((word) => word === 'panda');
  });
  const lion = letters.filter((letter) => {
    const dataWords = letter.dataset['word'].split(' ');
    return dataWords.some((word) => word === 'lion');
  });
  const bat = letters.filter((letter) => {
    const dataWords = letter.dataset['word'].split(' ');
    return dataWords.some((word) => word === 'bat');
  });
  const solutionWords = [frog, bear, panda, lion, bat];
  const solution = [
    [frog[0], frog[frog.length - 1]],
    [bear[0], bear[bear.length - 1]],
    [panda[0], panda[panda.length - 1]],
    [lion[0], lion[lion.length - 1]],
    [bat[0], bat[bat.length - 1]],
  ];

  let selected = [];
  let solutionSolved = null;

  const handleClick = (e) => {
    const letter = e.target;
    selected.push(letter);

    if (selected.length < 2) {
      letter.classList.add('selected');
    }

    if (selected.length === 2) {
      checkSolution(selected, solution) ? handleCorrect() : handleIncorrect();
    }
  };

  const checkSolution = (test, sltn) => {
    if (test[0].isEqualNode(test[1])) {
      return false;
    }

    for (let i = 0; i < sltn.length; i++) {
      let solutionWord = sltn[i];
      if (
        (test[0].isEqualNode(solutionWord[0]) ||
          test[0].isEqualNode(solutionWord[1])) &&
        (test[1].isEqualNode(solutionWord[0]) ||
          test[1].isEqualNode(solutionWord[1]))
      ) {
        solutionSolved = i;
        score++;
        score >= scoreToWin && setTimeout(handleVictory, 500);
        return true;
      }
    }

    return false;
  };

  const handleVictory = () => {
    // popup here with button to take you to leaderboard -> wrap with Link component and send contact info + time as props
    clearInterval(tick);
    const convertedTime = convertTime(time);
    alert(`Completed in ${convertedTime}`);
    // resetGame();
  };

  const handleCorrect = () => {
    const colours = ['#ecdac8', '#ECC8E1', '#D3DCEE', '#C8ECE7', '#F1F0DA'];
    solutionWords[solutionSolved].forEach((letter) => {
      letter.style.backgroundColor = colours[solutionSolved];
      letter.style.color = 'black';
    });
    plainWords[solutionSolved].style.backgroundColor = colours[solutionSolved];
    plainWords[solutionSolved].style.color = 'black';
    plainWords[solutionSolved].style.textDecoration = 'line-through';
    clearSelected();
    solutionSolved = null;
  };

  const handleIncorrect = () => {
    const wrapper = document.querySelector('.wrapper');
    wrapper.classList.add('failed');
    clearSelected();
    setTimeout(() => wrapper.classList.remove('failed'), 1000);
  };

  const clearSelected = () => {
    selected = [];
    const nodelist = document.querySelectorAll('.selected');
    nodelist.forEach((node) => node.classList.remove('selected'));
  };

  const resetGame = () => {
    clearSelected();
    const nodelist = document.querySelectorAll('.letter');
    nodelist.forEach((node) => {
      node.classList.remove('solved');
      node.style.color = 'white';
      node.style.backgroundColor = '';
    });
  };

  letters.forEach((letter) => {
    letter.addEventListener('click', handleClick);
  });
};

const convertTime = (seconds) => {
  let sec = seconds % 60;
  let min = parseInt(seconds / 60);
  if (sec.toString().length == 1) {
    // padding
    sec = '0' + sec;
  }
  return min + ':' + sec;
};

export default Game;
