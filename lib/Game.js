const Ball = require('./Ball.js');
const Brick = require('./Brick.js');

module.exports = class Game {
    constructor(context, width, height) {
        const ballX = width / 2;
        const ballY = height / 2;
        this.context = context;
        this.bird = new Ball(ballX, ballY, 30, 30);
        this.width = width;
        this.height = height;
    }

    gameLoop() {
        this.context.clearRect(0, 0, this.width, this.height)
        this.ball.draw(this.context)
        this.ball.move();
        //continue animating
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    startGame() {
        //starting animation
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    keyPressed() {
      this.ball.fly();
    }
}
