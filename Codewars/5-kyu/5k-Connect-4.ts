export class Connect4 {
  private board: number[][];
  private turn: number;
  private gameOver: boolean;

  constructor() {
    this.board = Array.from({length: 6}, () => Array(7).fill(-1));
    this.turn = 0;
    this.gameOver = false;    
  } // constructor()

  play(col: number): string {
    if (this.gameOver) {
      return "Game has finished!";
    }
    let row: number;
    let play = false;
    for (row = this.board.length - 1; row >= 0; row--) {
      if (this.board[row][col] === -1) {
        this.board[row][col] = this.turn;
        play = true;
        break;
      }
    }
    if (!play) {
      return "Column full!";
    } else if (this.count4(row, col)) {
      this.gameOver = true;
      return `Player ${this.turn + 1} wins!`
    }
    const result = `Player ${this.turn + 1} has a turn`
    this.turn = ++this.turn % 2;
    return result;
  } // play()

  count4(row: number, col: number): boolean {
    const lines = [this.board[row]];
    lines.push(Array(6).fill(0).map((_, i) => this.board[i][col]));
    let mMin = Math.min(this.board.length - 1 - row, this.board[row].length - 1 - col);
    let sMin = Math.min(row, this.board[row].length - 1 - col);
    const [mfr, mfc, sfr, sfc]  = [row + mMin, col + mMin, row - sMin, col + sMin];
    mMin = Math.min(mfr, mfc);
    sMin = Math.min(this.board.length - 1 - sfr, sfc);
    const [msr, msc, ssr, ssc] = [mfr - mMin, mfc - mMin, sfr + sMin, sfc - sMin];
    lines.push(Array(mfr - msr + 1).fill(0).map((_, i) => this.board[msr + i][msc + i]));    
    lines.push(Array(sfc - ssc + 1).fill(0).map((_, i) => this.board[ssr - i][ssc + i]));
    for (const line of lines) {
      for (let i = 0; i < line.length - 3; i++) {
        if (line.slice(i, i + 4).every((e) => e === this.turn)) {
          return true;
        }
      }
    }
    return false;
  } // count4()
} // Connect4()

const game = new Connect4();
console.log(game.play(0));
console.log(game.play(1));
console.log(game.play(1));
console.log(game.play(2));
console.log(game.play(2));
console.log(game.play(3));
console.log(game.play(2));
console.log(game.play(3));
console.log(game.play(3));
console.log(game.play(0));
console.log(game.play(3));
