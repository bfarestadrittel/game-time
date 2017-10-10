const Ball = require('./Ball.js');
const Paddle = require('./Paddle.js');
const Brick = require('./Brick.js');
const BrickArray = require('./BrickArray');
const GamePiece = require('./GamePiece');

class Game {
  constructor(context, canvas) {
    this.ball = new Ball(400, 560, 0, 0, 0, 0, 'red', 10, true, canvas);
    this.paddle = new Paddle();
    this.brickArray = new BrickArray(7, 3);
    this.brick = [];
    this.context = context;
    this.canvas = canvas;
  }

  gameLoop() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ball.draw(this.context, this.paddle);
    this.paddle.draw(this.context);
    this.ball.move();
    this.ball.paddleBounce(this.paddle);
    this.brickArray.showBricks(this.context);
    this.ball.wallBounce(this.context);
    this.brickArray.removeBricks(this.brickArray.bricks, this.ball);
    requestAnimationFrame(this.gameLoop.bind(this));
  }
  startGame() {
    this.brickArray.buildBricks();
    requestAnimationFrame(this.gameLoop.bind(this));
  }
  // gameOver() {
  //   document.getElementById('game-text', prepend(
  //     `
  //       <span>
  //         <p>You Lost! Would You Like To Play Again?</p>
  //       </span>
  //     `
  //   ) {
  //
  //   }
  // }
}
module.exports = Game;
