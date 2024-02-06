let compMove = NaN;
let playerMove = NaN;
let win = undefined;
let options = ['rock', 'paper', 'scissors'];
let optionEmojis = ['🪨', '📄', '✂️'];

const setCompMove = () => {
  compMove = Math.floor(Math.random() * 3);
  document.querySelector('#computer-play').textContent =
    'vs. ' + optionEmojis[compMove];
};

const resetSelection = () => {
  document.querySelector('#rock').style.background = '#9d9d9d';
  document.querySelector('#paper').style.background = '#9d9d9d';
  document.querySelector('#scissors').style.background = '#9d9d9d';
};

const defineWinner = () => {
  console.log(options[compMove], options[playerMove]);
  if (options[playerMove] === options[compMove]) {
    console.log('op');
    win = undefined;
  } else if (options[playerMove] === 'rock') {
    win = options[compMove] === 'scissors';
  } else if (options[playerMove] === 'paper') {
    win = options[compMove] === 'rock';
  } else if (options[playerMove] === 'scissors') {
    win = options[compMove] === 'paper';
  } else {
    console.error('unexpected error');
    win = undefined;
  }

  if (win === undefined) {
    document.querySelector('#winner').textContent = 'DRAW!';
  } else if (win) {
    document.querySelector('#winner').textContent = '🎉 You Win!';
  } else {
    document.querySelector('#winner').textContent = '☠️ You Loose!';
  }
};

document.querySelector('#rock').addEventListener('click', () => {
  resetSelection();
  setCompMove();
  playerMove = 0;
  document.querySelector('#rock').style.background = '#8bdc90';
  defineWinner();
});

document.querySelector('#paper').addEventListener('click', () => {
  resetSelection();
  setCompMove();
  playerMove = 1;
  document.querySelector('#paper').style.background = '#8bdc90';
  defineWinner();
});

document.querySelector('#scissors').addEventListener('click', () => {
  resetSelection();
  setCompMove();
  playerMove = 2;
  document.querySelector('#scissors').style.background = '#8bdc90';
  defineWinner();
});
