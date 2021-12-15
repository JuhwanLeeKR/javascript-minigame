const $computer = document.querySelector('#computer');
const $score = document.querySelector('#score');
const $rock = document.querySelector('#rock');
const $scissors = document.querySelector('#scissors');
const $paper = document.querySelector('#paper');
const IMG_URL = './assets/rsp.png';
$computer.style.background = `url(${IMG_URL}) 0 0`; // 가위
$computer.style.backgroundSize = 'auto 200px';

const rspX = {
  scissors: '0', // 가위
  rock: '-220px', // 바위
  paper: '-440px', // 보
};

let computerChoice = 'scissors';
const changeComputerHand = () => {
  if (computerChoice === 'scissors') {
    // 가위
    computerChoice = 'rock'; // 화면을 바꿔주면 data 또한 바꿔야 한다.
  } else if (computerChoice === 'rock') {
    // 바위
    computerChoice = 'paper';
  } else if (computerChoice === 'paper') {
    // 보
    computerChoice = 'scissors';
  }
  $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
  $computer.style.backgroundSize = 'auto 200px';
};
let intervalId = setInterval(changeComputerHand, 50);

const clickButton = () => {
  clearInterval(intervalId);
  // 점수 계산 및 화면 표시
  setTimeout(() => {
    clearInterval(intervalId);
    intervalId = setInterval(changeComputerHand, 50);
  }, 1000);
};
$rock.addEventListener('click', clickButton);
$scissors.addEventListener('click', clickButton);
$paper.addEventListener('click', clickButton);
