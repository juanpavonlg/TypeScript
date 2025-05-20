function spiralOrder(matrix: number[][]): number[] {
  const ans: number[] = [];
  const N = matrix.length * matrix[0].length;
  let sc = 0;
  let ec = matrix[0].length - 1;
  let sr = 0;
  let er = matrix.length - 1;
  while (ans.length < N) {
    if (sc === ec && sr === er) {
      ans.push(matrix[sr][sc]);
    } else {
      for (let c = sc; c < ec && ans.length < N; c++) {
        ans.push(matrix[sr][c]);
      }
      for (let r = sr; r < er && ans.length < N; r++) {
        ans.push(matrix[r][ec]);
      }
      for (let c = ec; c > sc && ans.length < N; c--) {
        ans.push(matrix[er][c]);
      }
      for (let r = er; r > sr && ans.length < N; r--) {
        ans.push(matrix[r][sc]);
      }
      sc++;
      ec--;
      sr++;
      er--;
    }
  }
  return ans;
} // spiralOrder()

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));
console.log(spiralOrder([[2, 3, 4], [5, 6, 7], [8, 9, 10], [11, 12, 13], [14, 15, 16]]));
console.log(spiralOrder([[1]]));
