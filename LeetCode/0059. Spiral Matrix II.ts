function generateMatrix(n: number): number[][] {
  const ans: number[][] = Array.from({ length: n }, () => new Array(n).fill(0));
  const N = n * n;
  let i = 0;
  let sc = 0;
  let ec = ans[0].length - 1;
  let sr = 0;
  let er = ans.length - 1;
  while (i < N) {
    if (sc === ec && sr === er) {
      ans[sr][sc] = ++i;
    } else {
      for (let c = sc; c < ec; c++) {
        ans[sr][c] = ++i;
      }
      for (let r = sr; r < er; r++) {
        ans[r][ec] = ++i;
      }
      for (let c = ec; c > sc; c--) {
        ans[er][c] = ++i;
      }
      for (let r = er; r > sr; r--) {
        ans[r][sc] = ++i;
      }
      sc++;
      ec--;
      sr++;
      er--;
    }
  }
  return ans;
} // generateMatrix()

console.log(generateMatrix(3));
console.log(generateMatrix(1));
