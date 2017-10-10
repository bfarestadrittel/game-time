const { assert } = require('chai');

const Ball = require('../lib/Ball.js');
const Paddle = require('../lib/Paddle.js');
const Brick = require('../lib/Brick.js');
const BrickArray = require('../lib/BrickArray.js');

describe('brick unit testing', () => {

  it('should be a function', () => {
    let brick = new Brick();
  })

  it('should have an area', () => {
    let brick = new Brick(100, 20);

    assert.equal(brick.w, 100);
    assert.equal(brick.h, 20);
  };

});
