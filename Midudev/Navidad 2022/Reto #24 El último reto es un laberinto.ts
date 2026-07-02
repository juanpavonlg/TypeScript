function canExit(maze: string[][]) {
  const [M, N] = [maze.length, maze[0].length];
  const directions: [number, number][] = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  function isValid(row: number, col: number) {
    return row >= 0 && col >= 0 && row < M && col < N && maze[row][col] !== "W";
  } // isValid()

  function dfs(row: number, col: number): boolean {
    if (maze[row][col] === "E") {
      return true;
    }
    const cell = maze[row][col];
    maze[row][col] = "W";
    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;
      if (isValid(newRow, newCol) && dfs(newRow, newCol)) {
        return true;
      }
    }
    maze[row][col] = cell;
    return false;
  } // dfs(0)

  let row = 0;
  let col = -1;
  for (; row < M; row++) {
    col = maze[row].indexOf("S");
    if (col >= 0) {
      break;
    }
  }
  const ans = dfs(row, col);
  return ans;
} // canExit()

console.log(
  canExit([
    [" ", " ", "W", " ", "S"],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", "W", " "],
    ["W", "W", " ", "W", "W"],
    [" ", " ", " ", " ", "E"],
  ]),
);
console.log(
  canExit([
    [" ", " ", "W", "W", "S"],
    [" ", " ", " ", "W", " "],
    [" ", " ", " ", "W", " "],
    ["W", "W", " ", "W", "W"],
    [" ", " ", " ", " ", "E"],
  ]),
);
