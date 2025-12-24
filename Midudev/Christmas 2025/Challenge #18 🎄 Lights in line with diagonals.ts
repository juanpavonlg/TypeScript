function hasFourInARow(board: string[][]): boolean {
  const [ROWS, COLS, N] = [board.length, board[0].length, 4];

  const hasFour = (
    row: number,
    col: number,
    stepRow: number,
    stepCol: number
  ): boolean => {
    for (let k = 1; k < N; k++) {
      const newRow = row + k * stepRow;
      const newCol = col + k * stepCol;
      if (
        newRow < 0 ||
        newCol < 0 ||
        newRow >= ROWS ||
        newCol >= COLS ||
        board[newRow][newCol] !== board[row][col]
      ) {
        return false;
      }
    }
    return true;
  }; // hasFour()

  const moves: [number, number][] = [
    [0, 1], // horizontal
    [1, 0], // vertical
    [1, 1], // right diagonal
    [1, -1], // left diagonal
  ];
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (board[row][col] !== ".") {
        for (const [dr, dc] of moves) {
          if (hasFour(row, col, dr, dc)) {
            return true;
          }
        }
      }
    }
  }
  return false;
} // hasFourInARow()

console.log(
  hasFourInARow([
    ["row", ".", ".", "."],
    [".", "row", ".", "."],
    [".", ".", "row", "."],
    [".", ".", ".", "row"],
  ])
);
console.log(
  hasFourInARow([
    [".", ".", ".", "G"],
    [".", ".", "G", "."],
    [".", "G", ".", "."],
    ["G", ".", ".", "."],
    [".", ".", ".", "."],
  ])
);
console.log(
  hasFourInARow([
    ["row", "row", "row", "row"],
    ["G", "G", ".", "."],
    [".", ".", ".", "."],
    [".", ".", ".", "."],
  ])
);
console.log(
  hasFourInARow([
    ["row", "G", "row"],
    ["G", "row", "G"],
    ["G", "row", "G"],
  ])
);
