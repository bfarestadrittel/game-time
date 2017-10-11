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
    this.score = 0;
    this.lives = 3;
  }


  animate() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ball.draw(this.context, this.paddle);
    this.paddle.draw(this.context);
    this.ball.move();
    this.ball.paddleBounce(this.paddle);
    this.brickArray.showBricks(this.context);
    this.ball.wallBounce(this.context);
    this.brickArray.removeBricks(this.brickArray.bricks, this.ball, this);
  }

  startGame() {
    this.brickArray.buildBricks();
  }

  resetGame() {
    window.location.reload(true);
  }

  scoreUpdate() {
    this.score += 100;
  }

  livesUpdate() {
    if(this.ball.y > 600) {
      this.lives--;
      this.ball.y = 550;
      this.ball.x = 400;
      this.ball.dy = 0;
      this.ball.dx = 0;
      this.paddle.x = 350;
      this.paddle.y = 580;
    }
    if(this.lives === 0) {
      // gameOver();
    }
  }

}
module.exports = Game;
