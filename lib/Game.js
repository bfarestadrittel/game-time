const Ball = require('./Ball.js');
const Paddle = require('./Paddle.js');
const BrickArray = require('./BrickArray');

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
    this.level = 1;
    this.playing = false;
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

    this.livesUpdate();
    this.winGame();
    this.gameOver();
  }

  startGame() {
    this.brickArray.buildBricks();
    this.playing = true;
  }

  winGame() {
    if (this.brickArray.bricks.length === 0) {
      this.playing = false;
      this.levelsUpdate();
      this.nextLevel();

      if (this.level > 3) {
        this.winGameScreen();
      }
    }
  }

  winGameScreen() {
    this.context.font = '50px Trebuchet MS';
    this.context.fillStyle = "#9c92c9";
    this.context.fillText("You Win! Restart To Play Again", 20, 300);
    this.ball.dx = 0;
    this.ball.dy = 0;
    this.playing = false;
  }

  gameOver() {
    if(this.lives === 0) {
      this.gameOverScreen();
    }
  }

  gameOverScreen() {
    this.context.font = '50px Trebuchet MS';
    this.context.fillStyle = "#9c92c9";
    this.context.fillText("You Lost! Click Restart To Play", 30, 300);
    this.ball.dx = 0;
    this.ball.dy = 0;
  }

  scoreUpdate() {
    this.score += 100;
  }

  livesUpdate() {
    if (this.ball.y > 600) {
      this.ballReset();
      if (this.level === 1) {
        this.ballLaunch();
      }
      if (this.level === 2) {
        this.ballLaunchLevelTwo();
      }
      if (this.level === 3) {
        this.ballLaunchLevelThree();
      }
      this.paddleReset();
      this.lives--;
    }
  }

  levelsUpdate() {
    this.level++;
  }

  ballReset() {
    this.ball.y = 550;
    this.ball.x = 400;
    this.ball.dy = 0;
    this.ball.dx = 0;
  }

  paddleReset() {
    this.paddle.x = 350;
    this.paddle.y = 580;
  }

  ballLaunch() {
    setTimeout(() => {this.ball.dx = 4, this.ball.dy = -4;}, 3000);
  }

  ballLaunchLevelTwo() {
    setTimeout(() => {this.ball.dx = -6, this.ball.dy = -6;}, 1000);
  }

  ballLaunchLevelThree() {
    setTimeout(() => {this.ball.dx = -8, this.ball.dy = -8;}, 1000);
  }

  nextLevel() {
    this.ballReset();
    this.paddleReset();

    if (this.level === 1) {
      this.brickArray = new BrickArray(7, 3);
      
    }
    if (this.level === 2) {
      this.brickArray = new BrickArray(7, 4);
      this.ballLaunchLevelTwo();
    }
    if (this.level === 3) {
      this.brickArray = new BrickArray(7, 5);
      this.ballLaunchLevelThree();
      this.winGameScreen();
    }

    this.startGame();
  }

}

module.exports = Game;
