type Board = string;
type Moves = string;
type Result = "fail" | "crash" | "success";

function moveReno(board: Board, moves: Moves): Result {
  const isValid = (row: number, col: number): boolean => {
    return row >= 0 && col >= 0 && row < M && col < N && b[row][col] !== "#";
  }; // isValid()

  const b = board.trim().split("\n");
  const [M, N] = [b.length, b[0].length];
  const m: { [move: string]: { dr: number; dc: number } } = {
    U: { dr: -1, dc: 0 },
    R: { dr: 0, dc: 1 },
    D: { dr: 1, dc: 0 },
    L: { dr: 0, dc: -1 },
  };
  const i = board.replace(/\n/g, "").indexOf("@");
  let [row, col] = [(i / N) | 0, i % N];
  for (const move of moves) {
    row += m[move].dr;
    col += m[move].dc;
    if (!isValid(row, col)) {
      return "crash";
    }
    if (b[row][col] === "*") {
      return "success";
    }
  }
  return "fail";
} // moveReno()

const board = `
.....
.*#.*
.@...
.....
`;
console.log(moveReno(board, "D"));
console.log(moveReno(board, "U"));
console.log(moveReno(board, "RU"));
console.log(moveReno(board, "RRRUU"));
console.log(moveReno(board, "DD"));
console.log(moveReno(board, "UUU"));
console.log(moveReno(board, "RR"));
