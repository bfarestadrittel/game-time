const GamePiece = require('./GamePiece.js');

class Ball extends GamePiece {
  constructor(x, y, w, h, dx, dy, radius, color, canvas) {
    super (x, y, w, h, dx, dy, radius, color);
    this.clockwise = true;
    this.canvas = canvas;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fill();
    context.closePath();
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }
  
  wallBounce() {
    if (this.x + this.dx >= this.canvas.width - this.radius || this.x + this.dx < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.dy >= this.canvas.height - this.radius || this.y + this.dy < 0) {
      this.dy = -this.dy;
    }
    if (this.y + this.dy < this.canvas.height - this.radius) {
      this.dy = -this.dy;
    }
  }
}


module.exports = Ball;
