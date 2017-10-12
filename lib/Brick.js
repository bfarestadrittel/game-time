const GamePiece = require('./GamePiece.js');

class Brick extends GamePiece {
  constructor(x, y, w, h, color) {
    super(x, y, color);
    this.w = 100;
    this.h = 20;
    this.left = this.x;
    this.right = this.x + this.w;
    this.top = this.y;
    this.bottom = this.y + this.h;
  }

  draw(context) {
    context.beginPath();
    context.fillRect(this.x, this.y, this.w, this.h);
    context.fill();
    context.closePath();
  }

}

module.exports = Brick;
