const Brick = require('./Brick.js');
const Game = require('./Game.js');
const Ball = require('./Ball.js');

class BrickArray {
  constructor(column, row) {
    this.column = column;
    this.row = row;
    this.bricks = [];
  }

  buildBricks() {
    for (let r = 0; r < this.row; r++) {
      for (let c = 0; c < this.column; c++) {
        let x = 10 + (113 * c);
        let y = 10 + (40 * r);
        this.bricks.push(new Brick(x, y));
      }
    }
    return this.bricks;
  }
    showBricks(context) {
      this.bricks.forEach(function(brick){
        brick.draw(context);
      })
    }

    removeBricks(array, ball, game) {
      for (var i = 0; i < array.length; i++) {
        if (ball.y - ball.radius <= array[i].bottom &&
          ball.y - ball.radius >= array[i].top &&
          ball.x + ball.radius <= array[i].right &&
          ball.x + ball.radius >= array[i].left) {
          ball.dy = -ball.dy;
          array.splice(i, 1);
          game.scoreUpdate();
        }
      }
    }

}


module.exports = BrickArray;
