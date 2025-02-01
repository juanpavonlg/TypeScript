export class SnakesLadders {
  board: {[i: number]: number} = {};
  player: number[];
  turn: number;
  
  constructor() {
    this.player = [0, 0];
    this.turn = 0;
    // Ladders
    this.board[2] = 38;
    this.board[7] = 14;
    this.board[8] = 31;
    this.board[15] = 26;
    this.board[21] = 42;
    this.board[28] = 84;
    this.board[36] = 44;
    this.board[51] = 67;
    this.board[71] = 91;
    this.board[78] = 98;
    this.board[87] = 94;
    // Sankes
    this.board[16] = 6;
    this.board[46] = 25;
    this.board[49] = 11;
    this.board[62] = 19;
    this.board[64] = 60;
    this.board[74] = 53;
    this.board[89] = 68;
    this.board[92] = 88;
    this.board[95] = 75;
    this.board[99] = 80;
  } // constructor()

  play(die1: number, die2: number): string {
    let move = this.player[this.turn] + die1 + die2;
    if (this.player[0] === 100 || this.player[1] === 100) {
      return "Game over!"
    }
    if (move > 100) {
      move = 100 - move % 100;
    }
    if (this.board[move]) {
      move = this.board[move];
    }
    this.player[this.turn] = move;
    const result = move < 100 ? `Player ${this.turn + 1} is on square ${this.player[this.turn]}` : `Player ${this.turn + 1} Wins!`;
    if (die1 !== die2) {      
      this.turn = ++this.turn % 2;
    }
    return result;
  } // play()
} // SnakesLadders

const game = new SnakesLadders();
console.log(game.play(1, 1));
console.log(game.play(1, 5));
console.log(game.play(6, 2));
console.log(game.play(1, 1));
console.log(game.play(2, 3));
console.log(game.play(2, 3));
console.log(game.play(5, 5));
console.log(game.play(5, 5));
console.log(game.play(5, 5));
console.log(game.play(5, 5));
console.log(game.play(5, 5));
console.log(game.play(5, 5));
console.log(game.play(3, 3));
console.log(game.play(5, 3));
console.log(game.play(5, 5));
console.log(game.play(2, 2));
console.log(game.play(4, 5));
