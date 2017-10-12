const Game = require('./Game.js');
const BrickArray = require('./BrickArray.js');


let canvas = document.getElementById('game');
let context = canvas.getContext('2d');
let game = new Game(context, canvas);

const startButton = document.getElementById('start-game');
const updateScore = document.getElementById('update-score');
const updateLives = document.getElementById('update-lives');
const updateLevels = document.getElementById('update-levels');

window.addEventListener('keydown', game.paddle.keyDownHandler.bind(game.paddle));
document.getElementById('restart-game').addEventListener('click', game.resetGame);

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

// function startNewLevel() {
//   setTimeout(() => {this.ball.dx = 4, this.ball.dy = -4}, 3000);
//   game.brickArray = new BrickArray(7, 3);
//   game.brickArray.showBricks(this.context);
//   game.ball.dx = 6;
//   game.ball.dy = -6;
//   console.log('starting new level?');
// }

function gameLoop() {
  // if(game.score >= 100) {
  //   startNewLevel();
  // }
  updateScore.innerHTML = game.score;
  updateLives.innerHTML = game.lives;
  updateLevels.innerHTML = game.levels;
  game.animate();
  game.livesUpdate();
  game.winGame();
  game.gameOver();
  requestAnimationFrame(gameLoop);
};

startScreen();
