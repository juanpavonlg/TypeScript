function numIslands(grid: string[][]): number {
  const [M, N] = [grid.length, grid[0].length];
  let islands = 0;

  function isValid(row: number, col: number) {
    return row >= 0 && col >= 0 && row < M && col < N && +grid[row][col];
  } // isValid()

  function dfs(row: number, col: number) {
    if (isValid(row, col)) {
      grid[row][col] = "0";
      dfs(row - 1, col);
      dfs(row, col + 1);
      dfs(row + 1, col);
      dfs(row, col - 1);
    }
  } // dfs()

  for (let r = 0; r < M; r++) {
    for (let c = 0; c < N; c++) {
      if (+grid[r][c]) {
        islands++;
        dfs(r, c);
      }
    }
  }
  return islands;
} // numIslands()

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ]),
);
console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ]),
);
