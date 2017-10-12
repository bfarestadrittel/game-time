class GamePiece {
  constructor(x, y, w, h, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = 4;
    this.dy = -4;
    this.w = w;
    this.h = h;
    this.color = color;
    this.radius = 10;
  }
}

module.exports = GamePiece;
