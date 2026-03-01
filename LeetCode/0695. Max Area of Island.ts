function maxAreaOfIsland(grid: number[][]): number {
  const [M, N] = [grid.length, grid[0].length];
  let area = 0;

  function dfs(row: number, col: number): number {
    if (row < 0 || col < 0 || row >= M || col >= N || grid[row][col] === 0) {
      return 0;
    }
    grid[row][col] = 0;
    const n = dfs(row - 1, col);
    const e = dfs(row, col + 1);
    const s = dfs(row + 1, col);
    const w = dfs(row, col - 1);
    return n + e + s + w + 1;
  } // dfs()

  for (let r = 0; r < M; r++) {
    for (let c = 0; c < N; c++) {
      if (grid[r][c]) {
        area = Math.max(dfs(r, c), area);
      }
    }
  }
  return area;
} // maxAreaOfIsland()

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ]),
);
console.log(maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]]));
