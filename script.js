'use strict';

// let guess = document.querySelector('.guess').value;
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No Number Entered');
  } else if (guess === number) {
    displayMessage('You Win 🤑');
    document.querySelector('body').style.backgroundColor = '#09c247';
    document.querySelector('.number').textContent = number;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== number) {
    if (score >= 1) {
      displayMessage(guess > number ? 'Too High' : 'Too Low');
      document.querySelector('.score').textContent = score--;
    } else {
      displayMessage('You lose 😭');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.guess').value = '';
    }
  }
  document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    displayMessage('Start guessing...');
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
  });
});
