var GamePiece = require('./GamePiece.js');

class Ball extends GamePiece {
  constructor(x, y, dx, dy, radius, xVelo, yVelo, clockwise) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.radius = radius;
    this.xVelo = xVelo;
    this.yVelo = yVelo;
    this.clockwise = true;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, this.clockwise);
    context.fill();
    context.closePath();
      this.x = this.x + 2;
      this.y = this.y - 2;
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      dx = -dx
    }
  }

}



module.exports = Ball;