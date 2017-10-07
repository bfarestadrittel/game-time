const Brick = require('./Brick.js');
const Game = require('./Game.js');

class BrickArray {
  constructor(row, column) {
    // console.log(this);
    this.row = row;
    this.column = column
    this.bricks = []
  }

  buildBricks() {
    for (let r = 0; r < this.row; r++) {
      for (let c = 0; c < this.column; c++) {
        let x = 10 + (113 * r);
        let y = 10 + (40 * c);
        this.bricks.push(new Brick(x, y));
      }
    }
    return this.bricks;
    // console.log(this.bricks)
  }
    showBricks(context) {
      this.bricks.forEach(function(brick){
        brick.draw(context);
      })
      for (let i = 0; i < this.bricks.length; i++) {
        this.bricks[i].draw(context);
      }
        // console.log(this.bricks)
    }

}


module.exports = BrickArray;