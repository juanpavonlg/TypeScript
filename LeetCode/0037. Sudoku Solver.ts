/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
  solve(board);
} // solveSudoku()

function solve(board: string[][]): boolean {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === ".") {
        for (let num = 1; num <= board.length; num++) {
          const str = `${num}`;
          if (isValid(board, row, col, str)) {
            board[row][col] = str;
            if (solve(board)) {
              return true;
            } else {
              board[row][col] = ".";
            }
          }
        }
        return false;
      }
    }
  }
  return true;
} // solve()

function inRow(board: string[][], row: number, num: string): boolean {
  for (let col = 0; col < board[row].length; col++) {
    if (board[row][col] === num) {
      return true;
    }
  }
  return false;
} // inRow()

function inCol(board: string[][], col: number, num: string): boolean {
  for (let row = 0; row < board.length; row++) {
    if (board[row][col] === num) {
      return true;
    }
  }
  return false;
} // inCol()

function inBox(board: string[][], row: number, col: number, num: string): boolean {
  const N = Math.sqrt(board.length);
  const r = row - (row % N);
  const c = col - (col % N);
  for (let row = r; row < r + N; row++) {
    for (let col = c; col < c + N; col++) {
      if (board[row][col] === num) {
        return true;
      }
    }
  }
  return false;
} // inBox()

function isValid(board: string[][], row: number, col: number, num: string): boolean {
  return !(inRow(board, row, num) || inCol(board, col, num) || inBox(board, row, col, num));
} // isValid()

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
solveSudoku(board);
console.log(board);
