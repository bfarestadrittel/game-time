const GamePiece = require('./GamePiece.js');

class Paddle extends GamePiece {
  constructor(x, y, w, h, dx, dy, radius, color) {
    super (x, y, w, h, dx, dy, radius, color);
    this.x = 350;
    this.y = 580;
  }

  draw(context) {
      context.fillRect(this.x, this.y, 100, 10);
      context.fillStyle = 'blue';
    }

keyDownHandler(event) {
  if (event.code === 'ArrowRight') {
    this.x += 25;
  }
  if (event.code === 'ArrowLeft') {
    this.x -= 25;
  }
}
}
module.exports = Paddle;