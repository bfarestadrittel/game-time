const Game = require('./Game.js');


let canvas = document.getElementById('game');
let context = canvas.getContext('2d');
let game = new Game(context, canvas);

window.addEventListener('keydown', game.paddle.keyDownHandler.bind(game.paddle));
document.getElementById('restart-game').addEventListener('click', game.resetGame);

game.startGame();
// var x = 400;
// var y = 510;
// var paddle = context.fillRect(x, y, 60, 10);

// document.addEventListener('keydown', paddleMove);

// function paddleMove(e) {
// 	console.log('asdf')
// 	e.preventDefault();
// 	if (e.keyCode == '37') {
// 		x -= 25;
// 	} else if (e.keyCode == '39') {
// 		x += 25;
// 	}

// }
