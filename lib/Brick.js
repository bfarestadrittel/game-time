const GamePiece = require('./GamePiece.js');
const Game = require('./Game.js');
const Ball = require('./Ball.js');
const BrickArray = require('./BrickArray.js');

class Brick extends GamePiece {
  constructor(x, y, w, h, color) {
    super(x, y, color);
    this.w = 100;
    this.h = 20;
    this.left = this.x;
    this.right = this.x + this.w;
    this.top = this.y;
    this.bottom = this.y + this.h;
    console.log(this.top);
  }

  draw(context) {
    context.beginPath();
    context.fillRect(this.x, this.y, this.w, this.h);
    context.fill();
    context.closePath();
  }

}

module.exports = Brick;
