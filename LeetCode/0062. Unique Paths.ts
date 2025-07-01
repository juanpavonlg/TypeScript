function uniquePaths(m: number, n: number): number {
  const board = Array.from({length: m}, (_) => new Array(n).fill(1));
  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      board[r][c] = board[r - 1][c] + board[r][c - 1];
    }
  }
  return board[m - 1][n - 1];
} // uniquePaths()

console.log(uniquePaths(3, 7));
console.log(uniquePaths(3, 2));
