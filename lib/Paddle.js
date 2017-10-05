const GamePiece = require('./GamePiece.js');

class Paddle extends GamePiece {
  constructor(x, y, w, h, dx, dy, radius, color) {
    super (x, y, w, h, dx, dy, radius, color);
    this.x = x;
    this.y = y;
  }
  draw(context) {
      context.fillRect(350, 580, 100, 10);
      context.fillStyle = 'blue';
    }
  // move() {
  //   keyDownHandler(e) {
  //     event.preventDefault();
  //     if (e.keycode == 39) {
  //       rightPressed = true;
  //     }
  //     else if(e.keycode == 37) {
  //       leftPressed = true;
  //     }
  //   }
  //   keyUpHandler(e) {
  //     event.preventDefault();
  //     if (e.keycode == 39) {
  //       rightPressed = false;
  //     }
  //     else if(e.keycode == 37) {
  //       leftPressed = false;
  //     }
  //   }
  // }
}
module.exports = Paddle;