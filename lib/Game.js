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
    this.ballStart = false;
    this.levels = 1;
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
    if(this.level = 1) {
      this.brickArray.buildBricks();
    }
    // if(this.level = 2) {
    //   this.brickArray.buildBricks();
      // console.log('is this working?');
    }
    // if(this.level = 3) {
    //   this.brickArray.buildBricksLevelThree();
    // }
  // }

  // levelTwo() {
  //   if(this.score === 100) {
  //     this.levels += 1;
  //     this.ball.y = 550;
  //     this.ball.x = 400;
  //     this.ball.dy = 0;
  //     this.ball.dx = 0;
  //     this.paddle.x = 350;
  //     this.paddle.y = 580;
  //     cancelAnimationFrame(levelTwo);
  //     // buildBricksLevelTwo();
  //     console.log('Does this work?');
  //   }
  // }

  winGame() {
    if(this.score === 2100) {
      this.winGameScreen();
    }
  }

  winGameScreen() {
    this.context.font = '50px arial';
    this.context.fillStyle = "#fff";
    this.context.fillText("You Win! Restart To Play Again", 20, 300);
    this.ball.dx = 0;
    this.ball.dy = 0;
  }

  gameOver() {
    if(this.lives === 0) {
      this.gameOverScreen();
    }
  }

  gameOverScreen() {
    this.context.font = '50px arial';
    this.context.fillStyle = "#fff";
    this.context.fillText("You Lost! Click Restart To Play", 30, 300);
    this.ball.dx = 0;
    this.ball.dy = 0;
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
      setTimeout(() => {this.ball.dx = 4, this.ball.dy = -4}, 3000);
    }
  }

}
module.exports = Game;
