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
    context.fillStyle = 'rgb(255,255,255)';
    context.fill();
    context.closePath();
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }

  wallBounce() {
    if (this.x >= 800 - this.radius) {
      this.dx = -this.dx;
    }
    if (this.x <= 0 + this.radius) {
      this.dx = -this.dx;
    }
    if (this.y <= 0 + this.radius) {
      this.dy = -this.dy;
    }
  }

  paddleBounce(paddle) {
    if (this.x <= paddle.x + 100 - this.radius &&
       this.x >= paddle.x -this.radius &&
        this.y >= paddle.y - this.radius) {
      this.dy = -this.dy;
    }
  }
}

module.exports = Ball;
