function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = Array.from({length: m}, (_) => new Array(n).fill(0));
  for (let r = 0; r < m; r++) {
    if (obstacleGrid[r][0]) {
      break;
    }
    dp[r][0] = 1;
  }
  for (let c = 0; c < n; c++) {
    if (obstacleGrid[0][c]) {
      break;
    }
    dp[0][c] = 1;
  }
  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      if (obstacleGrid[r][c] === 0) {
        dp[r][c] = dp[r][c - 1] + dp[r - 1][c];
      }
    }
  }
  return dp[m - 1][n - 1];
} // uniquePathsWithObstacles()

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
console.log(
  uniquePathsWithObstacles([
    [0, 1],
    [0, 0],
  ])
);
