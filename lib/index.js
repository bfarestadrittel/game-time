const Game = require('./Game.js');


let canvas = document.getElementById('game');
let context = canvas.getContext('2d');
let game = new Game(context, canvas);

const startButton = document.getElementById('start-game');
const updateScore = document.getElementById('update-score');
const updateLives = document.getElementById('update-lives');

window.addEventListener('keydown', game.paddle.keyDownHandler.bind(game.paddle));
document.getElementById('restart-game').addEventListener('click', game.resetGame);
document.addEventListener('keypress', game.ballLaunch);

startButton.addEventListener('click', function(){
  game.startGame();
  requestAnimationFrame(gameLoop);
  this.setAttribute('disabled', true);
});

function startScreen() {
  context.font = '50px arial';
  context.fillStyle = "#fff";
  context.fillText("Click Start to Begin", 175, 300);
};

function gameLoop() {
  updateScore.innerHTML = game.score;
  updateLives.innerHTML = game.lives;
  game.animate();
  game.livesUpdate();
  game.gameOver();
  requestAnimationFrame(gameLoop);
};

startScreen();
