function findSafestPath(dream: number[][]): number {
  const N = dream.length - 1;
  const M = dream[0].length - 1;
  const dr = [1, 0];
  const dc = [0, 1];
  let min = Number.MAX_VALUE;
  let sum = dream[0][0];

  function isValid(row: number, col: number): boolean {
    return row <= N && col <= M;
  }

  function backtrack(row: number, col: number) {
    if (row === N && col === M) {
      min = Math.min(sum, min);
      return;
    }
    for (let i = 0; i < dr.length; i++) {
      const newRow = row + dr[i];
      const newCol = col + dc[i];
      if (isValid(newRow, newCol)) {
        sum += dream[newRow][newCol];
        backtrack(newRow, newCol);
        sum -= dream[newRow][newCol];
      }
    }
  }

  backtrack(0, 0);
  return min;
} // findSafestPath()

const dream = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];
console.log(findSafestPath(dream));
