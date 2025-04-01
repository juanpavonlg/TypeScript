function totalNQueens(n: number): number {
  let ans = 0;
  const cols = new Set<number>();
  const posDiag = new Set<number>();
  const negDiag = new Set<number>();

  function backtrack(row: number) {
    if (row === n) {
      ans++;
      return;
    }
    for (let col = 0; col < n; col++) {
      const pos = row + col;
      const neg = row -col;
      if (!cols.has(col) && !posDiag.has(pos) && !negDiag.has(neg)) {
        cols.add(col);
        posDiag.add(pos);
        negDiag.add(neg);
        backtrack(row + 1);
        cols.delete(col);
        posDiag.delete(pos);
        negDiag.delete(neg);
      }
    }
  } // backtrack()

  backtrack(0);
  return ans;
} // totalNQueens()

console.log(totalNQueens(4));
console.log(totalNQueens(1));
