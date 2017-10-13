const { assert } = require('chai');

const Ball = require('../lib/Ball.js');
const Paddle = require('../lib/Paddle.js');
const Brick = require('../lib/Brick.js');
const BrickArray = require('../lib/BrickArray.js');

describe('BrickArray unit testing', () => {

  it('should be a function', () => {
    let brickArray = new BrickArray();
  })

  it('should instantiate a BrickArray', () => {
    var brickArray = new BrickArray();
    assert.isObject(brickArray);
  });

  it('should have 3 rows', () => {
    let brickArray = new BrickArray(7, 3);

    assert.equal(brickArray.row === 3, true);
  })

  it('should have 7 columns', () => {
    let brickArray = new BrickArray(7, 3);

    assert.equal(brickArray.column === 7, true);
  })

//   it('should remove a brick from array after a collisions', () => {
//     let ball = new Ball(10, 10);
//     let brickArray = brick.showBricks();
//     let brick = new Brick(10, 10);
// console.log(brickArray.bricks.length);
//     ball.move();
//     brickArray.showBricks();
//     assert.equal(brickArray.bricks.length, 21);
//     brickArray.removeBricks(brickArray, ball, new Game);
//     assert.equal(brickArray.bricks.length, 20);
//   })
//
//   it.skip('should win if there are no bricks in the array', () => {
//     let brickArray = new BrickArray(7, 3);
//     let game = new Game();
//
//     if(game.score === 2100) {
//       this.winGameScreen();
//     }
//   })
});
