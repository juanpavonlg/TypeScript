function isValidSudoku(board: string[][]): boolean {
  for (const row of board) {
    if (!isValidLine(row)) {
      return false;
    }
  }
  for (let j = 0; j < board.length; j++) {
    if (!isValidLine(Array.from({ length: board.length }, (_, i) => board[i][j]))) {
      return false;
    }
  }
  const N = Math.sqrt(board.length);
  for (let i = 0; i < board.length; i++) {
    const box: string[] = [];
    const r = Math.floor(i / N) * N;
    const c = (i % N) * N;
    for (let k = 0; k < N; k++) {
      box.push(...board[r + k].slice(c, c + N));
    }
    if (!isValidLine(box)) {
      return false;
    }
  }
  return true;
} // isValidSudoku()

function isValidLine(line: string[]): boolean {
  const nums: { [key: string]: number } = {};
  for (const num of line) {
    if (/\d+/.test(num)) {
      if (nums[num]) {
        return false;
      }
      nums[num] = 1;
    }
  }
  return true;
} // isValidLine()

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
