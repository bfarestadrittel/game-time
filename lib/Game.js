const Ball = require('./Ball.js');
const Paddle = require('./Paddle.js');
const Brick = require('./Brick.js');
const BrickArray = require('./BrickArray');

class Game {
  constructor(context, canvas) {
    this.ball = new Ball(300, 100, 0, 0, 0, 0, 'red', 10, true, canvas);
    this.paddle = new Paddle(400, 590, 50, 10, 0, 0, 0, 'blue');
    this.brickArray = new BrickArray(7, 3);
    this.brick = [];
    this.context = context;
    this.canvas = canvas;
  }

  gameLoop() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ball.draw(this.context);
    this.paddle.draw(this.context);
    this.ball.move();
    this.brickArray.showBricks(this.context);
    this.ball.wallBounce(this.context);
    requestAnimationFrame(this.gameLoop.bind(this));
  }
  startGame() {
    this.brickArray.buildBricks();
    requestAnimationFrame(this.gameLoop.bind(this));
  }
}
module.exports = Game;
