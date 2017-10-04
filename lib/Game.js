const Ball = require('./Ball.js');

class Game {
  constructor(context, canvas) {
    this.ball = new Ball(100, 100, 0, 0, 0, 0, 'red', 10, true, canvas);
    this.context = context;
    this.canvas = canvas;
  }

  gameLoop() {
    this.ball.wallBounce(this.context);
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ball.draw(this.context);
    this.ball.move();
    requestAnimationFrame(this.gameLoop.bind(this));
  }
  startGame() {
    requestAnimationFrame(this.gameLoop.bind(this));
  }
}
module.exports = Game;
