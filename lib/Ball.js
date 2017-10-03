const GamePiece = require('./GamePiece.js');
module.exports = class Ball {
  constructor(x, y, w, h, color) {
    super(x, y, w, h, color);
  }

  draw(context) {
    context.fillRect(this.x, this.y, this.w, this.h);
  }

  move() {
    this.y++;
  }

  fly() {
    this.y -= 20;
  }
}
