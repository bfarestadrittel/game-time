const { assert } = require('chai');

const Ball = require('../lib/Ball.js');
const Paddle = require('../lib/Paddle.js');
const Brick = require('../lib/Brick.js');
const BrickArray = require('../lib/BrickArray.js');

describe('ball unit testing', () => {

  it('should be a function', () => {
    let ball = new Ball();
  })

  it('should have a fixed diameter', () => {
    let ball = new Ball(0, 0, 20, 20);

    assert.equal(ball.w, 20);
    assert.equal(ball.h, 20);
  })

  it('should bounce off the left wall', () => {
    let ball = new Ball(10);

    assert.equal(ball.dx, -4, true);
    ball.wallBounce();
    assert.equal(ball.dx, 4, true);
  })

  it('should bounce off the right', () => {
    let ball = new Ball(10);

    assert.equal(ball.dx, 4, true);
    ball.wallBounce();
    assert.equal(ball.dx, -4, true);
  })

  it('should bounce off the ceiling', () => {
    let ball = new Ball(10);

    assert.equal(ball.dy, -4, true);
    ball.wallBounce();
    assert.equal(ball.dy, 4, true);
  })

  it('should bounce off bricks')
})
