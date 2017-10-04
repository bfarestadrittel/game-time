var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var Ball = require('./Ball.js');

function gameLoop() {
	requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);