'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let check = document.querySelector('.check');
let message = document.querySelector('.message');
let numberBoxContainer = document.querySelector('.number');
let scoreContainer = document.querySelector('.score');
let highScoreContainer = document.querySelector('.highscore');
let againBtn = document.querySelector('.again');
let score = 20;
let highScore = 0;

console.log(secretNumber);

check.addEventListener('click', function () {
  let guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber);
  if (!guessNumber) {
    message.textContent = "you didn't enter a number👀";
  } else if (guessNumber === secretNumber) {
    message.textContent = 'yaay you are right! 🎉👏';
    numberBoxContainer.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScoreContainer.textContent) {
      highScoreContainer.textContent = score;
    }
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      score--;
      scoreContainer.textContent = score;
      message.textContent =
        guessNumber > secretNumber
          ? '📈too high, try again'
          : '📉too low, try again';
    } else {
      message.textContent = 'you lose! 😭😭';
      scoreContainer.textContent = 0;
      document.querySelector('.guess').setAttribute('disabled', true);
    }
  }
});

function againGame() {
  document.body.style.backgroundColor = '#222222';
  message.textContent = 'Start guessing...';
  secretNumber = Math.trunc(Math.random() * 20) + 1; //re initialize secret number
  console.log(secretNumber);
  score = 20;
  scoreContainer.textContent = score;
  document.querySelector('.guess').value = '';
  numberBoxContainer.textContent = '?';
}

againBtn.addEventListener('click', againGame);
