function pacificAtlantic(heights: number[][]): number[][] {
  if (!heights.length || !heights[0].length) {
    return [];
  }
  const [M, N] = [heights.length, heights[0].length];
  const pacific: boolean[][] = Array.from({ length: M }, () =>
    new Array(N).fill(false),
  );
  const atlantic: boolean[][] = Array.from({ length: M }, () =>
    new Array(N).fill(false),
  );
  const qPacific: [number, number][] = [];
  const qAtlantic: [number, number][] = [];
  for (let r = 0; r < M; r++) {
    qPacific.push([r, 0]);
    pacific[r][0] = true;
    qAtlantic.push([r, N - 1]);
    atlantic[r][N - 1] = true;
  }
  for (let c = 0; c < N; c++) {
    qPacific.push([0, c]);
    pacific[0][c] = true;
    qAtlantic.push([M - 1, c]);
    atlantic[M - 1][c] = true;
  }

  function bfs(queue: [number, number][], ocean: boolean[][]) {
    const directions: [number, number][] = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];
    while (queue.length) {
      const [row, col] = queue.shift()!;
      for (const [dr, dc] of directions) {
        const newRow = row + dr;
        const newCol = col + dc;
        if (
          newRow >= 0 &&
          newCol >= 0 &&
          newRow < M &&
          newCol < N &&
          !ocean[newRow][newCol] &&
          heights[newRow][newCol] >= heights[row][col]
        ) {
          queue.push([newRow, newCol]);
          ocean[newRow][newCol] = true;
        }
      }
    }
  } // bfs()

  bfs(qPacific, pacific);
  bfs(qAtlantic, atlantic);
  const ans: [number, number][] = [];
  for (let r = 0; r < M; r++) {
    for (let c = 0; c < N; c++) {
      if (pacific[r][c] && atlantic[r][c]) {
        ans.push([r, c]);
      }
    }
  }
  return ans;
} // pacificAtlantic()

console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ]),
);
console.log(pacificAtlantic([[1]]));
