import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Fullscreen from '../components/fullscreen';
import { convertTime } from '../utils/helpers';
import { Link } from 'react-router-dom';
import '../styles/globals.css';
import '../styles/game.css';

const Congratulations = ({ active, displayTime }) => {
  return (
    <div className='congratulations' style={{ opacity: active ? 1 : 0 }}>
      <h1>Congratulations!</h1>
      <p>{`Your time, ${convertTime(displayTime)}`}</p>
    </div>
  );
};

const Game = ({ history }) => {
  const [displayTime, setDisplayTime] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    handleGameLogic(history, setActive, setDisplayTime);
  }, []);
  return (
    <div className='wrapper'>
      <div className='game no-select'>
        {/* <Link to='/' style={{ position: 'fixed', bottom: 0, right: 0 }}>
          Link to Home
        </Link> */}
        <Header />
        <div className='container'>
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
          <ul className='words'>
            <h2>Find these words</h2>
            <li className='word'>CLAIMS PAID</li>
            <li className='word'>CONSISTENT</li>
            <li className='word'>TAILORED</li>
            <li className='word'>EXPERTISE</li>
            <li className='word'>RISK MANAGEMENT</li>
            <li className='word'>UNDERWRITING</li>
            <li className='word'>INSURANCE</li>
            <li className='word'>SERVICE</li>
            <li className='word'>RESPONSIVE</li>
            <li className='word'>DISCIPLINED</li>
          </ul>
        </div>
      </div>
      <Fullscreen />
      <div className='overlay' style={{ opacity: active ? 0.75 : 0 }}></div>
      <Congratulations active={active} displayTime={displayTime} />
    </div>
  );
};

const handleGameLogic = (history, setActive, setDisplayTime) => {
  const nodelist = document.querySelectorAll('.letter');
  const letters = Array.apply(null, nodelist);
  const plainWords = document.querySelectorAll('.word');

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
    // const convertedTime = convertTime(time);
    // alert(`Completed in ${convertedTime}`);
    localStorage.setItem('id', Math.random());
    clearInterval(tick);
    const currentName = localStorage.getItem('currentName');
    const currentEmail = localStorage.getItem('currentEmail');
    const names = localStorage.getItem('names');
    if (names) {
      let arr = JSON.parse(names);
      arr.push(currentName);
      localStorage.setItem('names', JSON.stringify(arr));
    } else {
      let arr = [currentName];
      localStorage.setItem('names', JSON.stringify(arr));
    }
    const emails = localStorage.getItem('emails');
    if (emails) {
      let arr = JSON.parse(emails);
      arr.push(currentEmail);
      localStorage.setItem('emails', JSON.stringify(arr));
    } else {
      let arr = [currentEmail];
      localStorage.setItem('emails', JSON.stringify(arr));
    }
    const times = localStorage.getItem('times');
    if (times) {
      let arr = JSON.parse(times);
      arr.push(time);
      localStorage.setItem('times', JSON.stringify(arr));
    } else {
      let arr = [time];
      localStorage.setItem('times', JSON.stringify(arr));
    }
    console.log('time = ' + time);
    setDisplayTime(time);
    setActive(true);
    setTimeout(() => history.push('/leaderboard'), 4000);
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
    plainWords[solutionSolved].style.backgroundColor = colours[solutionSolved];
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

export default Game;
