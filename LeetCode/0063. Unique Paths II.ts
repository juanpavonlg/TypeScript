function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const M = obstacleGrid.length;
  const N = obstacleGrid[0].length;
  const dp = Array.from({length: M}, (_) => new Array(N).fill(0));
  for (let r = 0; r < M; r++) {
    if (obstacleGrid[r][0]) {
      break;
    }
    dp[r][0] = 1;
  }
  for (let c = 0; c < N; c++) {
    if (obstacleGrid[0][c]) {
      break;
    }
    dp[0][c] = 1;
  }
  for (let r = 1; r < M; r++) {
    for (let c = 1; c < N; c++) {
      if (obstacleGrid[r][c] === 0) {
        dp[r][c] = dp[r][c - 1] + dp[r - 1][c];
      }
    }
  }
  return dp[M - 1][N - 1];
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
