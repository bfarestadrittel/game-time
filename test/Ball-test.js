const { assert } = require('chai');

const Ball = require('../lib/Ball.js');
const Paddle = require('../lib/Paddle.js');
const Brick = require('../lib/Brick.js');
const BrickArray = require('../lib/BrickArray.js');
const Game = require('../lib/Game.js');

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

  it('the x position should change on move', () => {
    let ball = new Ball(30, 30);

    assert.equal(ball.x, 30)
    ball.move()
    assert.equal(ball.x, 34)
  })

  it('should reset ball', () => {
    let game = new Game();
    game.ball.x = 10;

    assert.equal(game.ball.x, 10);
    assert.equal(game.ball.dx, 4);
    game.ballReset();
    assert.equal(game.ball.x, 400);
    assert.equal(game.ball.dx, 0);
  })

  it('should start a new ball after 3s', () => {
    let game = new Game();
    game.ball.dx = 10;
    game.ball.dy = 10;

    assert.equal(game.ball.dx, 10);
    assert.equal(game.ball.dy, 10);

    game.ballLaunch();

    setTimeout(function() {
      assert.equal(game.ball.dx = 4);
      assert.equal(game.ball.dy = -4);

    }, 4000);

  })

  it('should bounce off the left wall', () => {
    let ball = new Ball(10);

    assert.equal(ball.dx, 4);
    ball.wallBounce();
    assert.equal(ball.dx, -4);
    ball.wallBounce();
    assert.equal(ball.dx, 4);
  })

  it('should bounce off the right wall', () => {
    let ball = new Ball(10);

    assert.equal(ball.dx, 4);
    ball.wallBounce();
    assert.equal(ball.dx, -4);
  })

  it('should bounce off the ceiling', () => {
    let ball = new Ball(10, 10);

    ball.dy = -4
    assert.equal(ball.dy, -4);
    ball.wallBounce();
    assert.equal(ball.dy, 4);
  })

  it('should bounce off of bottom of bricks', () => {
    let ball = new Ball(55, 50);
    let brickArray = new BrickArray(1, 1)

    ball.radius = 10;
    ball.dy = -10;
    brickArray.buildBricks();
    assert.equal(ball.y, 50);
    ball.move();
    assert.equal(ball.y, 40);
    brickArray.removeBricks(brickArray.bricks, ball, new Game);
    assert.equal(ball.dy, 10);
  })

});
