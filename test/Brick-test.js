const { assert } = require('chai');

const Ball = require('../lib/Ball.js');
const Paddle = require('../lib/Paddle.js');
const Brick = require('../lib/Brick.js');
const BrickArray = require('../lib/BrickArray.js');

describe('brick unit testing', () => {

  it('should be a function', () => {
    let brick = new Brick();
  })

  it('should instantiate a Brick', () => {
  var brick = new Brick();
  assert.isObject(brick);
  });

  it('should have an area', () => {
    let brick = new Brick(100, 20);

    assert.equal(brick.w, 100);
    assert.equal(brick.h, 20);
  })

  it('should have an x position', () => {
    let brick = new Brick();

    assert.equal(brick.x);
  })

  it('should have a y position', () => {
    let brick = new Brick();

    assert.equal(brick.y);
  })

});
