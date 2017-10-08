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
      for (let i = 0; i < this.bricks.length; i++) {
        this.bricks[i].draw(context);
      }
    }

}


module.exports = BrickArray;
