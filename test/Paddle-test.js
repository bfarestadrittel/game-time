const { assert } = require('chai');

const Ball = require('../lib/Ball.js');
const Paddle = require('../lib/Paddle.js');
const Brick = require('../lib/Brick.js');
const BrickArray = require('../lib/BrickArray.js');
const Game = require('../lib/Game.js');

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

    let event = {
      preventDefault: function () {},
      code: 'ArrowRight',
    }

    paddle.keyDownHandler(event);
    assert.equal(paddle.x, 375);

  });

  it('it should move left', () => {
    let paddle = new Paddle(350, 580);

    let event = {
      preventDefault: function () {},
      code: 'ArrowLeft',
    }

    paddle.keyDownHandler(event);
    assert.equal(paddle.x, 325);
  });

  it('it should not go off the left side of the canvas', () => {
    let paddle = new Paddle(0, 580);

    let event = {
      preventDefault: function () {},
      code: 'ArrowLeft',
    }

    assert.equal(paddle.x < 0, false);
    paddle.keyDownHandler(event);
    assert.equal(paddle.x < 0, false);
  });

  it('it should not go off the right side of the canvas', () => {
    let paddle = new Paddle(800, 580);

    let event = {
      preventDefault: function () {},
      code: 'ArrowRight',
    }

    assert.equal(paddle.x > 700, false);
    paddle.keyDownHandler(event);
    assert.equal(paddle.x > 700, false);
  });

  it('should reset paddle to start coordinates', () => {
    let game = new Game()

    game.paddle.x = 0;
    assert.equal(game.paddle.x, 0)
    game.paddleReset()
    assert.equal(game.paddle.x, 350)
  })

})
