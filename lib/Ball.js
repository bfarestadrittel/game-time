const GamePiece = require('./GamePiece.js');

class Ball extends GamePiece {
  constructor(x, y, w, h, dx, dy, radius, color) {
    super (x, y, w, h, dx, dy, radius, color);
    this.clockwise = true;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fill();
    context.closePath();
  }
  move() {
    this.x += 2;
  }
}



module.exports = Ball;
