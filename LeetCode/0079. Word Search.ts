function exist(board: string[][], word: string): boolean {
  const [M, N] = [board.length, board[0].length];

  if (M === 1 && N === 1) {
    return board[0][0] === word;
  }

  function isValid(row: number, col: number): boolean {
    return row >= 0 && col >= 0 && row < M && col < N;
  } // isValid()

  function backtrack(row: number, col: number, index: number): boolean {
    if (index === word.length) {
      return true;
    }
    if (board[row][col] !== word[index]) {
      return false;
    }
    const temp = board[row][col];
    board[row][col] = "#";
    for (const [dr, dc] of [[-1, 0], [0, 1], [1, 0], [0, -1]]) {
      const [newRow, newCol] = [row + dr, col + dc];
      if (isValid(newRow, newCol)) {
        if (backtrack(newRow, newCol, index + 1)) {
          return true;
        }
      }
    }
    board[row][col] = temp;
    return false;
  } // backtrack()

  for (let r = 0; r < M; r++) {
    for (let c = 0; c < N; c++) {
      if (board[r][c] === word[0]) {
        if (backtrack(r, c, 0)) {
          return true;
        }
      }
    }
  }
  return false;
} // exist()

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED",
  ),
);
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "SEE",
  ),
);
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB",
  ),
);
console.log(
  exist(
    [
      ["A", "A", "A", "A", "A", "A"],
      ["A", "A", "A", "B", "A", "A"],
      ["A", "A", "A", "A", "A", "A"],
      ["A", "A", "A", "A", "A", "A"],
      ["A", "A", "A", "A", "A", "A"],
      ["A", "A", "A", "A", "A", "A"],
    ],
    "ABCB",
  ),
);
