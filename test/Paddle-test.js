const { assert } = require('chai');

const Ball = require('../lib/Ball.js');
const Paddle = require('../lib/Paddle.js');
const Brick = require('../lib/Brick.js');
const BrickArray = require('../lib/BrickArray.js');

describe('paddle unit testing', () => {

  it('it should be a function', () => {
    let paddle = new Paddle();
  });

  it('should instantiate a Paddle', () => {
  var paddle = new Paddle();
  assert.isObject(paddle);
  });

  it('it should move right', () => {
    let paddle = new Paddle(350, 580);

    assert.equal(paddle.x === 350, true);
    assert.equal(paddle.x += 25, true);
    assert.equal(paddle.x === 375, true);
  });

  it('it should move left', () => {
    let paddle = new Paddle(350, 580);

    assert.equal(paddle.x === 350, true);
    if (event.code === 'ArrowRight' && this.x < 1400 - this.x) {
    assert.equal(paddle.x -= 25, true);
    }
  });

  it('it should not go off the left side of the canvas', () => {
    let paddle = new Paddle(0, 580);

    if(paddle.x <= 0) {
      paddle.moveLeft === false;
      assert.equal(paddle.x === paddle.x + 10);
    }
  });

  it('it should not go off the right side of the canvas', () => {
    let paddle = new Paddle(0, 580);

    if(paddle.x >= 800) {
      paddle.moveRight === false;
      assert.equal(paddle.x === paddle.x - 10);
    }
  });

})
