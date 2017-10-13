const { assert } = require('chai');

const Ball = require('../lib/Ball.js');
const Paddle = require('../lib/Paddle.js');
const Brick = require('../lib/Brick.js');
const BrickArray = require('../lib/BrickArray.js');
const Game = require('../lib/Game.js');

describe('BrickArray unit testing', () => {

  it('should be a function', () => {
    let brickArray = new BrickArray();
  })

  it('should instantiate a BrickArray', () => {
  var brickArray = new BrickArray();
  assert.isObject(brickArray);
  });

  it('should have 21 total bricks', () => {
    let brickArray = new BrickArray(7, 3);
    brickArray.buildBricks()
    assert.equal(brickArray.bricks.length, 21);
  })

  it('should have 3 rows', () => {
    let brickArray = new BrickArray(7, 3);
    brickArray.buildBricks()
    assert.equal(brickArray.row, 3);
  })

  it('should have 7 columns', () => {
    let brickArray = new BrickArray(7, 3);
    brickArray.buildBricks()
    assert.equal(brickArray.column, 7);
  })

  it('should remove a brick from array after a collision', () => {
      let ball = new Ball(25, 25);
      let brickArray = new BrickArray(7, 3);

      brickArray.buildBricks();

      assert.equal(brickArray.bricks.length, 21);
      brickArray.removeBricks(brickArray.bricks, ball, new Game);
      assert.equal(brickArray.bricks.length, 20);
    })

  // it('should have win if there are no bricks in the array', () => {
  //   let brickArray = new BrickArray(7, 3);
  //
  //   assert.equal(brickArray.bricks.columns === 7);
  // })

})
