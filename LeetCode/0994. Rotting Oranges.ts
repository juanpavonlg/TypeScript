enum State {
  Empty,
  Fresh,
  Rotten,
}

function orangesRotting(grid: number[][]): number {
  const [M, N] = [grid.length, grid[0].length];
  const directions: [number, number][] = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  function isValid(r: number, c: number) {
    return r >= 0 && c >= 0 && r < M && c < N && grid[r][c] === State.Fresh;
  } // isValid()

  const queue: [number, number][] = [];
  let fresh = 0;
  for (let r = 0; r < M; r++) {
    for (let c = 0; c < N; c++) {
      if (grid[r][c] === State.Fresh) {
        fresh++;
      } else if (grid[r][c] === State.Rotten) {
        queue.push([r, c]);
      }
    }
  }
  if (fresh === 0) {
    return 0;
  }
  let mins = -1;
  while (queue.length) {
    const size = queue.length;
    for (let _ = 0; _ < size; _++) {
      const [row, col] = queue.shift()!;
      for (const [dr, dc] of directions) {
        const newRow = row + dr;
        const newCol = col + dc;
        if (isValid(newRow, newCol)) {
          grid[newRow][newCol] = State.Rotten;
          queue.push([newRow, newCol]);
          fresh--;
        }
      }
    }
    mins++;
  }
  return fresh ? -1 : mins;
} // orangesRotting()

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]),
);
console.log(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ]),
);
console.log(orangesRotting([[0, 2]]));
