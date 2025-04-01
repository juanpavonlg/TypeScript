function solveNQueens(n: number): string[][] {
  const cols = new Set<number>();
  const posDiag = new Set<number>(); // row + col
  const negDiag = new Set<number>(); // row - col
  const ans: string[][] = [];
  const board: string[][] = Array.from({length: n}, () => Array(n).fill("."));
  
  function backtrack(row: number) {
    if (row === n) {
      ans.push(board.map((e) => e.join("")));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (!cols.has(col) && !posDiag.has(row + col) && !negDiag.has(row - col)) {
        cols.add(col);
        posDiag.add(row + col);
        negDiag.add(row - col);
        board[row][col] = "Q";
        backtrack(row + 1);
        cols.delete(col);
        posDiag.delete(row + col);
        negDiag.delete(row - col);
        board[row][col] = ".";
      }
      
    }
  } // backtrack()
  
  backtrack(0);
  return ans;
} // solveNQueens()

console.log(solveNQueens(4));
console.log(solveNQueens(1));
