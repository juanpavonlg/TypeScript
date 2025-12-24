function canEscape(maze: string[][]): boolean {
  const [M, N] = [maze.length, maze[0].length];
  const visited = new Set<number>();

  const isValid = (row: number, col: number, cell: number): boolean => {
    return (
      row >= 0 &&
      col >= 0 &&
      row < M &&
      col < N &&
      maze[row][col] !== "#" &&
      !visited.has(cell)
    );
  }; // isValid()

  const dr = [-1, 0, 1, 0];
  const dc = [0, 1, 0, -1];

  function dfs(row: number, col: number): boolean {
    if (maze[row][col] === "E") {
      return true;
    }
    for (let i = 0; i < dr.length; i++) {
      const newRow = row + dr[i];
      const newCol = col + dc[i];
      const cell = N * newRow + newCol;
      if (isValid(newRow, newCol, cell)) {
        visited.add(cell);
        if (dfs(newRow, newCol)) {
          return true;
        }
      }
    }
    return false;
  } // dfs()

  let row = -1;
  let col = -1;
  while (col === -1) {
    row++;
    col = maze[row].indexOf("S");
  }
  visited.add(N * row + col);
  return dfs(row, col);
} // canEscape()

console.log(
  canEscape([
    ["S", ".", "#", "."],
    ["#", ".", "#", "."],
    [".", ".", ".", "."],
    ["#", "#", "#", "E"],
  ])
);
console.log(
  canEscape([
    ["S", "#", "#"],
    [".", "#", "."],
    [".", "#", "E"],
  ])
);
console.log(canEscape([["S", "E"]]));
console.log(
  canEscape([
    ["S", ".", ".", ".", "."],
    ["#", "#", "#", "#", "."],
    [".", ".", ".", ".", "."],
    [".", "#", "#", "#", "#"],
    [".", ".", ".", ".", "E"],
  ])
);
console.log(
  canEscape([
    ["S", ".", "."],
    [".", ".", "."],
    ["#", "#", "#"],
    [".", ".", "E"],
  ])
);
