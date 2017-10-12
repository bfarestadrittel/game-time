const { assert } = require('chai');

const Ball = require('../lib/Ball.js');
const Paddle = require('../lib/Paddle.js');
const Brick = require('../lib/Brick.js');
const BrickArray = require('../lib/BrickArray.js');

describe('ball unit testing', () => {

  it('should be a function', () => {
    let ball = new Ball();
  })

  it('should instantiate a Ball', () => {
  var ball = new Ball();
  assert.isObject(ball);
  });

  it('should have a fixed diameter', () => {
    let ball = new Ball(0, 0, 20, 20);

    assert.equal(ball.w, 20);
    assert.equal(ball.h, 20);
  })

  it('should bounce off the paddle', () => {
    let ball = new Ball(10);
    let paddle = new Paddle();

    if (ball.x <= paddle.x + 100 - ball.radius) {
      ball.dy = -ball.dy;
    }
  })

  it('should bounce off the left wall', () => {
    let ball = new Ball(10);

    assert.equal(ball.dx, 4, true);
    ball.wallBounce();
    assert.equal(ball.dx, -4, true);
    ball.wallBounce();
    assert.equal(ball.dx, 4, true);
  })

  it('should bounce off the right wall', () => {
    let ball = new Ball(10);

    assert.equal(ball.dx, 4, true);
    ball.wallBounce();
    assert.equal(ball.dx, -4, true);
  })

  it('should bounce off the ceiling', () => {
    let ball = new Ball(10);

    if (ball.y <= 0 + ball.radius) {
      ball.dy = -ball.dy;
    }
  })

  it('should bounce off of bottom of bricks', () => {
    let ball = new Ball(10);
    let brick = new Brick();

    if (ball.y - ball.radius >= brick.top) {
      ball.dy = -ball.dy;
    }
  })

  it.skip('should bounce off of left sides of bricks', () => {
    let ball = new Ball(10);
    let brick = new Brick();

    assert.equal(ball.x + ball.radius > brick.x + brick.height);
    assert.equal(ball.x = -ball.x);
  })

  it.skip('should bounce off of right sides of bricks', () => {
    let ball = new Ball(10);
    let brick = new Brick();

    assert.equal(ball.x + radius > brick.x + brick.height);
    assert.equal(ball.x = -ball.x);
  })

});
