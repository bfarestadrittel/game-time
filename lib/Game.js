const Ball = require('./Ball.js');
const GamePiece = require('./GamePiece.js');


class Game {
  constructor(context, canvas) {
    this.ball = new Ball(100, 100, 0, 0, 0, 0, 'red', 10, true, canvas);
    this.context = context;
    this.canvas = canvas;

  }

  runGame() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // console.log(this.context);
    // this.paddle.draw(this.context);
    this.ball.draw(this.context);
    // this.brickArray.draw(this.context);
    this.ball.move();
  }
}
module.exports = Game;
