var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var Ball = require('./Block.js');

function gameLoop() {
	requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);



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


// var x = 400;
// var y = 500;
// var dx = 3;
// var dy = 3;
// var radius = 10;

// function bounce() {
// 	requestAnimationFrame(bounce);
// 	context.clearRect(0, 0, canvas.width, canvas.height);
// 	context.beginPath();
// 	context.arc(x, y, radius, 0, Math.PI * 2, false);
// 	context.fill();
// 	if (x + radius > canvas.width || x -radius < 0) {
// 		dx = -dx;
// 	}
// 	if (y + radius > canvas.height || y - radius < 0) {
// 		dy = -dy;
// 	}
// 	x += dx;
// 	y += dy;
// }

// bounce();







