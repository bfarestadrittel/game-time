const GamePiece = require('./GamePiece.js');

module.exports = class Brick extends GamePiece {
  constructor(x, y, w, h, color) {
    super(x, y, w, h, color);
  }

  move() {
    this.x--;
  }
}
