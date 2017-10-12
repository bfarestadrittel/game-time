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

  it('should have 21 total bricks', () => {
    let brickArray = new BrickArray();

    assert.equal(array === [i]);
  })

  it('should have 3 rows', () => {
    let brickArray = new BrickArray(7, 3);

    assert.equal(brickArray.bricks.rows === 3);
  })

  it('should have 7 columns', () => {
    let brickArray = new BrickArray(7, 3);

    assert.equal(brickArray.bricks.columns === 7);
  })

  it('should remove a brick from array after a collisions', () => {
    let brick = new Brick(100, 20);

    assert.equal(bricks.brick.w, 100);
    assert.equal(bricks.brick.h, 20);
    brickArray.removeBricks();
    assert.equal(brickArray.bricks.brick = [0]);
    // assert.equal(brick.w, 0);
    // assert.equal(brick.h, 0);
  })

  it('should have win if there are no bricks in the array', () => {
    let brickArray = new BrickArray(7, 3);

    assert.equal(brickArray.bricks.columns === 7);
  })

})
