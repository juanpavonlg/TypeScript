export class Game {
  #board: number;

  constructor(board: number) {
    this.#board = board;
  } // constructor()

  play(lines: number[]): number[] {
    const squares: number[][] = [];
    const lim = this.#board ** 2;
    for (let i = 0; i < lim; i++) {
      const j = Math.floor(i / this.#board);
      const t = i + 1 + (this.#board + 1) * j;
      const l = t + this.#board;
      const r = l + 1;
      const b = t + 2 * this.#board + 1;
      squares.push([t, l, r, b]);
    }
    let completed = true;
    while (completed) {
      completed = false;
      for (const sides of squares) {
        let count = 0;
        let line = 0;
        for (const side of sides) {
          if (lines.includes(side)) {
            count++;
          } else {
            line = side;
          }
        }
        if (count === 3) {
          lines.push(line);
          completed = true;
        }
      }
    }
    return lines.sort((a, b) => a - b);
  } // play()
} // Game

const game = new Game(2);
console.log(game.play([1, 3, 4]));
console.log(game.play([1, 2, 3, 4, 5, 8, 10, 11, 12]));
