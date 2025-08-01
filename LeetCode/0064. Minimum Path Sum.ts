function minPathSum(grid: number[][]): number {
  const M = grid.length;
  const N = grid[0].length;
  const dp = Array.from({length: M}, (_) => new Array(N).fill(0));
  dp[0][0] = grid[0][0];
  for (let r = 1; r < M; r++) {
    dp[r][0] = dp[r - 1][0] + grid[r][0];
  }
  for (let c = 1; c < N; c++) {
    dp[0][c] = dp[0][c - 1] + grid[0][c];
  }
  for (let r = 1; r < M; r++) {
    for (let c = 1; c < N; c++) {
      dp[r][c] = Math.min(dp[r][c - 1] + grid[r][c], dp[r - 1][c] + grid[r][c]);
    }
  }
  return dp[M - 1][N - 1];
} // minPathSum()

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));
console.log(minPathSum([[1, 2, 3], [4, 5, 6]]));
