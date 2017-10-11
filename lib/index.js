const Game = require('./Game.js');


let canvas = document.getElementById('game');
let context = canvas.getContext('2d');
let game = new Game(context, canvas);

const startButton = document.getElementById('start-game');

window.addEventListener('keydown', game.paddle.keyDownHandler.bind(game.paddle));
document.getElementById('restart-game').addEventListener('click', game.resetGame);
startButton.addEventListener('click', function(){
  game.startGame();
});

function startScreen() {
  context.font = '50px arial';
  context.fillStyle = "#fff";
  context.fillText("Click Start to Begin", 200, 300);
};

