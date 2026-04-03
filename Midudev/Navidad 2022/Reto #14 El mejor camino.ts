function getOptimalPath(path: number[][]) {
  let min = Infinity;

  function backtrack(row: number, col: number, sum: number) {
    if (row === path.length - 1) {
      min = Math.min(sum, min);
      return;
    }
    const nextRow = row + 1;
    const nextCol = col + 1;
    backtrack(nextRow, col, sum + path[nextRow][col]);
    backtrack(nextRow, nextCol, sum + path[nextRow][nextCol]);
  } // backtrack()

  backtrack(0, 0, path[0][0]);
  return min;
  // const ans = path.reduceRight((prev, curr) => {
  //   return curr.map((e, i) => {
  //     return e + Math.min(prev[i], prev[i + 1]);
  //   });
  // });
  // return ans[0];
} // getOptimalPath()

console.log(getOptimalPath([[0], [7, 4], [2, 4, 6]]));
console.log(getOptimalPath([[0], [2, 3]]));
console.log(getOptimalPath([[0], [3, 4], [9, 8, 1]]));
console.log(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]));
