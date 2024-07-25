'use strict';

let inputAnswer = document.querySelector('.input-number');
let submitButton = document.querySelector('.submit');
let question = document.querySelector('.question');
let inputField = document.querySelector('.input-field');
let scoreDisplay = document.querySelector('.score');
let gameContainer = document.querySelector('.gameplay');
let difficultyContainer = document.querySelector('.difficulty-container');
let buttonDifficulty = document.querySelector('.btn-difficulty');
let chooseDifficulty = document.querySelector('.difficulty');
let playAgainContainer = document.querySelector('.play-again');
let playAgainBtn = document.querySelector('.play-again-btn');
let timerDisplay = document.querySelector('.timer');
let gameOverText = document.querySelector('.game-over');
let gameOverScore = document.querySelector('.game-over-score');
let score = 3;
let randomNumber;

// let userDifficulty = 'easy';
gameContainer.style.display = 'none';
playAgainContainer.style.display = 'none';

function getRandomNumbers() {
  scoreDisplay.textContent = `Score: ${score}`;
  let userDifficulty = chooseDifficulty.value;

  difficultyContainer.style.display = 'none';
  if (userDifficulty === 'easy') {
    let firstNumber = Math.trunc(Math.random() * 10) + 1;
    let secondNumber = Math.trunc(Math.random() * 10) + 1;
    question.textContent = `What is ${firstNumber}*${secondNumber} ?`;
    return firstNumber * secondNumber;
  } else if (userDifficulty === 'medium') {
    let firstNumber = Math.trunc(Math.random() * 15) + 5;
    let secondNumber = Math.trunc(Math.random() * 15) + 5;
    question.textContent = `What is ${firstNumber}*${secondNumber} ?`;
    return firstNumber * secondNumber;
  } else {
    let firstNumber = Math.trunc(Math.random() * 30) + 20;
    let secondNumber = Math.trunc(Math.random() * 30) + 20;
    question.textContent = `What is ${firstNumber}*${secondNumber} ?`;
    return firstNumber * secondNumber;
  }
}

function playGame() {
  playAgainContainer.style.display = 'none';
  scoreDisplay.textContent = `Score: ${score}`;
  gameContainer.style.display = 'flex';
  timerDisplay.style.display = 'flex';
  scoreDisplay.style.display = 'flex';

  randomNumber = getRandomNumbers();

  let count = 60;
  function countdownTimer() {
    const timer = setInterval(function () {
      count--;
      // console.log(count);
      timerDisplay.textContent = count;
      if (count === 0) {
        clearInterval(timer);
        gameContainer.style.display = 'none';
        playAgainContainer.style.display = 'flex';
        scoreDisplay.style.display = 'none';
        gameOverText.textContent = `Time's Up ⌛😢`;
        gameOverScore.textContent = `Score: ${score}`;
        timerDisplay.style.display = 'none';
      } else if (score === 0 + 1) {
        clearInterval(timer);
      }
    }, 1000);
  }

  countdownTimer();
}

submitButton.addEventListener('click', function () {
  let userInput = Number(inputAnswer.value);

  if (score === 0 + 1) {
    gameContainer.style.display = 'none';
    playAgainContainer.style.display = 'flex';
    timerDisplay.style.display = 'none';
    scoreDisplay.style.display = 'none';
    gameOverScore.textContent = `Score: 0`;
  } else if (userInput === randomNumber) {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
  } else {
    score--;
    scoreDisplay.textContent = `Score: ${score}`;
  }

  randomNumber = getRandomNumbers();
  inputAnswer.value = '';
});

buttonDifficulty.addEventListener('click', playGame);

function playAgain() {
  difficultyContainer.style.display = 'flex';
  playAgainContainer.style.display = 'none';
  timerDisplay.style.display = 'none';
  scoreDisplay.style.display = 'none';
  score = 3;
  countdownTimer();
}

playAgainBtn.addEventListener('click', playAgain);
