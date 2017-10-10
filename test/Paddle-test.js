const { assert } = require('chai');

const Ball = require('../lib/Ball.js');
const Paddle = require('../lib/Paddle.js');
const Brick = require('../lib/Brick.js');
const BrickArray = require('../lib/BrickArray.js');

describe('paddle unit testing', () => {

  it('should be a function', () => {
    let paddle = new Paddle();
  })

  it('should move right', () => {
    let paddle = new Paddle(350, 580);
    let x = paddle.x;

    assert.equal(x === 350, true);
    paddle.keyDownHandler(event);
    assert.equal(x === x + 25, true);
  })
})
