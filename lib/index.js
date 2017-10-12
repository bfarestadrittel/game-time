const Game = require('./Game.js');

let canvas = document.getElementById('game');
let context = canvas.getContext('2d');
let game = new Game(context, canvas);

const startButton = document.getElementById('start-game');
const updateScore = document.getElementById('update-score');
const updateLives = document.getElementById('update-lives');
const updateLevels = document.getElementById('update-levels');

window.addEventListener('keydown', game.paddle.keyDownHandler.bind(game.paddle));
document.getElementById('restart-game').addEventListener('click', resetGame);

startButton.addEventListener('click', function(){
  game.startGame();
  gameLoop();
  this.setAttribute('disabled', true);
});

function startScreen() {
  context.font = '30px Trebuchet MS';
  context.fillStyle = "#D3D3D3";
  context.fillText("Game Instructions:", 175, 80);
  context.fillText("1. Move paddle w/ L & R arrows", 175, 165);
  context.fillText("2. On start and restart,", 175, 250);
  context.fillText("game begins immediately", 175, 300);
  context.fillText("3. On life lost, new turn", 175, 400);
  context.fillText("starts after 3 seconds", 175, 450);
  context.font = '50px Trebuchet MS';
  context.fillStyle = "#9c92c9";
  context.fillText("Click Start to Play!", 175, 550);
}

function gameLoop() {
  if(game.playing === true) {
    console.log(game.ball.dx);
    updateScore.innerHTML = game.score;
    updateLives.innerHTML = game.lives;
    updateLevels.innerHTML = game.levels;
    game.animate();
    requestAnimationFrame(gameLoop);
  }
}

function resetGame() {
  game.playing = false;
  context.clearRect(0, 0, canvas.width, canvas.height);

  setTimeout(function() {
    game = new Game(context, canvas);
    game.startGame();
    gameLoop();
    startScreen();

  }, 100);
}

startScreen();


// if(game.score >= 100) {
//   startNewLevel();
// }

// function startNewLevel() {
//   setTimeout(() => {this.ball.dx = 4, this.ball.dy = -4}, 3000);
//   game.brickArray = new BrickArray(7, 3);
//   game.brickArray.showBricks(this.context);
//   game.ball.dx = 6;
//   game.ball.dy = -6;
//   console.log('starting new level?');
// }
