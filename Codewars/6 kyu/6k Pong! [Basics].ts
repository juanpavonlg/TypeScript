export class Pong {
  maxScore: number;
  gameOver = false;
  turn = 1;
  score: [number, number] = [0, 0];

  constructor(_maxScore: number) {
    this.maxScore = _maxScore;
  } // constructor()

  play(ballPos: number, playerPos: number): string {
    this.turn ^= 1;
    if (this.gameOver) {
      return "Game Over!";
    }
    if (ballPos >= playerPos - 3 && ballPos <= playerPos + 3) {
      return `Player ${this.turn + 1} has hit the ball!`;
    } else {
      this.score[this.turn ^ 1]++;
      if (this.score[0] === this.maxScore || this.score[1] === this.maxScore) {
        this.gameOver = true;
        return `Player ${this.turn ^ 1 + 1} has won the game!`;
      }
      return `Player ${this.turn + 1} has missed the ball!`;
    }
    return "";
  } //play()
} // Pong

let game = new Pong(2);
console.log(game.play(50, 53));
console.log(game.play(100, 97));
console.log(game.play(0, 4));
console.log(game.play(25, 25));
console.log(game.play(75, 25));
console.log(game.play(50, 50));
