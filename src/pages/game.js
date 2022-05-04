import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';
import '../styles/globals.css';
import '../styles/game.css';

// const electron = window.require('electron');
// const Store = window.require('electron-store');

// import Store from 'electron-store';

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
    console.log('build 2');

    // const one = {
    //   name: 'Cameron Green',
    //   email: 'c.c.green@outlook.com',
    //   time: 57,
    // };
    // const two = {
    //   name: 'Calum Smail',
    //   email: 'calum.smail@voxelstudio.co.uk',
    //   time: 42,
    // };
    // localStorage.setItem('one', JSON.stringify(one));
    // localStorage.setItem('two', JSON.stringify(two));
    // console.log()
    // let arr = [];
    // Object.keys(localStorage).map((k) => arr.push(localStorage.getItem(k)));
    // console.log(arr);
    // const retrievedObject = localStorage.getItem('obj');
    // console.log('retrievedObject: ', JSON.parse(retrievedObject));
  }, []);
  return (
    <div className='wrapper game no-select'>
      <header className='header'>
        <h1 className='tagline'>PROBLEMS...SOLVED</h1>
        <img src={logo} />
      </header>
      <ul className='soup'>
        <li className='letter'>Y</li>
        <li className='letter'>S</li>
        <li className='letter'>R</li>
        <li className='letter'>S</li>
        <li className='letter'>B</li>
        <li className='letter'>E</li>
        <li className='letter' data-word='claimspaid'>
          C
        </li>
        <li className='letter' data-word='claimspaid'>
          L
        </li>
        <li className='letter' data-word='claimspaid'>
          A
        </li>
        <li className='letter' data-word='claimspaid'>
          I
        </li>
        <li className='letter' data-word='claimspaid'>
          M
        </li>
        <li className='letter' data-word='claimspaid'>
          S
        </li>
        <li className='letter' data-word='claimspaid'>
          P
        </li>
        <li className='letter' data-word='claimspaid'>
          A
        </li>
        <li className='letter' data-word='claimspaid'>
          I
        </li>
        <li className='letter' data-word='claimspaid'>
          D
        </li>
        <li className='letter'>M</li>
        <li className='letter'>H</li>
        <li className='letter'>G</li>
        <li className='letter' data-word='consistent'>
          T
        </li>
        <li className='letter' data-word='consistent'>
          N
        </li>
        <li className='letter' data-word='consistent'>
          E
        </li>
        <li className='letter' data-word='consistent'>
          T
        </li>
        <li className='letter' data-word='consistent'>
          S
        </li>
        <li className='letter' data-word='consistent'>
          I
        </li>
        <li className='letter' data-word='consistent'>
          S
        </li>
        <li className='letter' data-word='consistent'>
          N
        </li>
        <li className='letter' data-word='consistent'>
          O
        </li>
        <li className='letter' data-word='consistent'>
          C
        </li>
        <li className='letter'>D</li>
        <li className='letter'>C</li>
        <li className='letter'>H</li>
        <li className='letter'>B</li>
        <li className='letter'>V</li>
        <li className='letter'>P</li>
        <li className='letter' data-word='tailored'>
          D
        </li>
        <li className='letter' data-word='tailored'>
          E
        </li>
        <li className='letter' data-word='tailored'>
          R
        </li>
        <li className='letter' data-word='tailored'>
          O
        </li>
        <li className='letter' data-word='tailored'>
          L
        </li>
        <li className='letter' data-word='tailored'>
          I
        </li>
        <li className='letter' data-word='tailored'>
          A
        </li>
        <li className='letter' data-word='tailored'>
          T
        </li>
        <li className='letter'>O</li>
        <li className='letter'>Z</li>
        <li className='letter'>H</li>
        <li className='letter'>F</li>
        <li className='letter'>O</li>
        <li className='letter'>U</li>
        <li className='letter'>W</li>
        <li className='letter'>X</li>
        <li className='letter'>Q</li>
        <li className='letter' data-word='expertise'>
          E
        </li>
        <li className='letter' data-word='expertise'>
          X
        </li>
        <li className='letter' data-word='expertise'>
          P
        </li>
        <li className='letter' data-word='expertise'>
          E
        </li>
        <li className='letter' data-word='expertise'>
          R
        </li>
        <li className='letter' data-word='expertise'>
          T
        </li>
        <li className='letter' data-word='expertise'>
          I
        </li>
        <li className='letter' data-word='expertise'>
          S
        </li>
        <li className='letter' data-word='expertise'>
          E
        </li>
        <li className='letter'>O</li>
        <li className='letter'>I</li>
        <li className='letter'>T</li>
        <li className='letter' data-word='riskmanagement'>
          T
        </li>
        <li className='letter' data-word='riskmanagement'>
          N
        </li>
        <li className='letter' data-word='riskmanagement'>
          E
        </li>
        <li className='letter' data-word='riskmanagement'>
          M
        </li>
        <li className='letter' data-word='riskmanagement'>
          E
        </li>
        <li className='letter' data-word='riskmanagement'>
          G
        </li>
        <li className='letter' data-word='riskmanagement'>
          A
        </li>
        <li className='letter' data-word='riskmanagement'>
          N
        </li>
        <li className='letter' data-word='riskmanagement'>
          A
        </li>
        <li className='letter' data-word='riskmanagement'>
          M
        </li>
        <li className='letter' data-word='riskmanagement'>
          K
        </li>
        <li className='letter' data-word='riskmanagement'>
          S
        </li>
        <li className='letter' data-word='riskmanagement'>
          I
        </li>
        <li className='letter' data-word='riskmanagement'>
          R
        </li>
        <li className='letter'>N</li>
        <li className='letter'>K</li>
        <li className='letter' data-word='underwriting'>
          U
        </li>
        <li className='letter' data-word='underwriting'>
          N
        </li>
        <li className='letter' data-word='underwriting'>
          D
        </li>
        <li className='letter' data-word='underwriting'>
          E
        </li>
        <li className='letter' data-word='underwriting'>
          R
        </li>
        <li className='letter' data-word='underwriting'>
          W
        </li>
        <li className='letter' data-word='underwriting'>
          R
        </li>
        <li className='letter' data-word='underwriting'>
          I
        </li>
        <li className='letter' data-word='underwriting'>
          T
        </li>
        <li className='letter' data-word='underwriting'>
          I
        </li>
        <li className='letter' data-word='underwriting'>
          N
        </li>
        <li className='letter' data-word='underwriting'>
          G
        </li>
        <li className='letter'>X</li>
        <li className='letter'>Y</li>
        <li className='letter'>X</li>
        <li className='letter'>P</li>
        <li className='letter'>D</li>
        <li className='letter'>S</li>
        <li className='letter' data-word='insurance'>
          I
        </li>
        <li className='letter' data-word='insurance'>
          N
        </li>
        <li className='letter' data-word='insurance'>
          S
        </li>
        <li className='letter' data-word='insurance'>
          U
        </li>
        <li className='letter' data-word='insurance'>
          R
        </li>
        <li className='letter' data-word='insurance'>
          A
        </li>
        <li className='letter' data-word='insurance'>
          N
        </li>
        <li className='letter' data-word='insurance'>
          C
        </li>
        <li className='letter' data-word='insurance'>
          E
        </li>
        <li className='letter'>T</li>
        <li className='letter'>R</li>
        <li className='letter'>P</li>
        <li className='letter'>U</li>
        <li className='letter'>H</li>
        <li className='letter'>R</li>
        <li className='letter'>N</li>
        <li className='letter' data-word='service'>
          E
        </li>
        <li className='letter' data-word='service'>
          C
        </li>
        <li className='letter' data-word='service'>
          I
        </li>
        <li className='letter' data-word='service'>
          V
        </li>
        <li className='letter' data-word='service responsive'>
          R
        </li>
        <li className='letter' data-word='service responsive'>
          E
        </li>
        <li className='letter' data-word='service responsive'>
          S
        </li>
        <li className='letter' data-word='responsive'>
          P
        </li>
        <li className='letter' data-word='responsive'>
          O
        </li>
        <li className='letter' data-word='responsive'>
          N
        </li>
        <li className='letter' data-word='responsive'>
          S
        </li>
        <li className='letter' data-word='responsive'>
          I
        </li>
        <li className='letter' data-word='responsive'>
          V
        </li>
        <li className='letter' data-word='responsive'>
          E
        </li>
        <li className='letter' data-word='disciplined'>
          D
        </li>
        <li className='letter' data-word='disciplined'>
          I
        </li>
        <li className='letter' data-word='disciplined'>
          S
        </li>
        <li className='letter' data-word='disciplined'>
          C
        </li>
        <li className='letter' data-word='disciplined'>
          I
        </li>
        <li className='letter' data-word='disciplined'>
          P
        </li>
        <li className='letter' data-word='disciplined'>
          L
        </li>
        <li className='letter' data-word='disciplined'>
          I
        </li>
        <li className='letter' data-word='disciplined'>
          N
        </li>
        <li className='letter' data-word='disciplined'>
          E
        </li>
        <li className='letter' data-word='disciplined'>
          D
        </li>
        <li className='letter'>Z</li>
        <li className='letter'>I</li>
        <li className='letter'>S</li>
        <li className='letter'>P</li>
        <li className='letter'>Q</li>
      </ul>
      {/* <Link to='/' style={{ position: 'fixed', bottom: 0, right: 0 }}>
        Link to Home
      </Link> */}
    </div>
  );
};

const handleGameLogic = () => {
  const nodelist = document.querySelectorAll('.letter');
  const letters = Array.apply(null, nodelist);

  let time = 0;
  const tick = setInterval(() => time++, 1000);

  const claimsPaid = letters.filter((letter) => {
    const dataWords = letter.dataset['word'];
    if (dataWords) {
      const split = dataWords.split(' ');
      return split.some((word) => word === 'claimspaid');
    }
  });

  const consistent = letters.filter((letter) => {
    const dataWords = letter.dataset['word'];
    if (dataWords) {
      const split = dataWords.split(' ');
      return split.some((word) => word === 'consistent');
    }
  });

  const tailored = letters.filter((letter) => {
    const dataWords = letter.dataset['word'];
    if (dataWords) {
      const split = dataWords.split(' ');
      return split.some((word) => word === 'tailored');
    }
  });

  const expertise = letters.filter((letter) => {
    const dataWords = letter.dataset['word'];
    if (dataWords) {
      const split = dataWords.split(' ');
      return split.some((word) => word === 'expertise');
    }
  });

  const riskManagement = letters.filter((letter) => {
    const dataWords = letter.dataset['word'];
    if (dataWords) {
      const split = dataWords.split(' ');
      return split.some((word) => word === 'riskmanagement');
    }
  });

  const underwriting = letters.filter((letter) => {
    const dataWords = letter.dataset['word'];
    if (dataWords) {
      const split = dataWords.split(' ');
      return split.some((word) => word === 'underwriting');
    }
  });

  const insurance = letters.filter((letter) => {
    const dataWords = letter.dataset['word'];
    if (dataWords) {
      const split = dataWords.split(' ');
      return split.some((word) => word === 'insurance');
    }
  });

  const service = letters.filter((letter) => {
    const dataWords = letter.dataset['word'];
    if (dataWords) {
      const split = dataWords.split(' ');
      return split.some((word) => word === 'service');
    }
  });

  const responsive = letters.filter((letter) => {
    const dataWords = letter.dataset['word'];
    if (dataWords) {
      const split = dataWords.split(' ');
      return split.some((word) => word === 'responsive');
    }
  });

  const disciplined = letters.filter((letter) => {
    const dataWords = letter.dataset['word'];
    if (dataWords) {
      const split = dataWords.split(' ');
      return split.some((word) => word === 'disciplined');
    }
  });

  const solutionWords = [
    claimsPaid,
    consistent,
    tailored,
    expertise,
    riskManagement,
    underwriting,
    insurance,
    service,
    responsive,
    disciplined,
  ];
  // let solution = [];
  // solution.push(solutionWords.map((sltn) => [sltn[0], sltn[sltn.length - 1]]));
  const solution = [
    [claimsPaid[0], claimsPaid[claimsPaid.length - 1]],
    [consistent[0], consistent[consistent.length - 1]],
    [tailored[0], tailored[tailored.length - 1]],
    [expertise[0], expertise[expertise.length - 1]],
    [riskManagement[0], riskManagement[riskManagement.length - 1]],
    [underwriting[0], underwriting[underwriting.length - 1]],
    [insurance[0], insurance[insurance.length - 1]],
    [service[0], service[service.length - 1]],
    [responsive[0], responsive[responsive.length - 1]],
    [disciplined[0], disciplined[disciplined.length - 1]],
  ];

  const scoreToWin = solutionWords.length;
  let score = 0;

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
        score >= scoreToWin && setTimeout(handleVictory, 200);
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
    const colours = [
      '#A0235D',
      '#7D3976',
      '#53467B',
      '#344A6E',
      '#2F4858',
      '#A0235D',
      '#7D3976',
      '#53467B',
      '#344A6E',
      '#2F4858',
    ];
    solutionWords[solutionSolved].forEach((letter) => {
      letter.style.backgroundColor = colours[solutionSolved];
      letter.style.color = 'white';
    });
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
