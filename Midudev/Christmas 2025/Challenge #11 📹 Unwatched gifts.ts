function findUnsafeGifts(warehouse: string[]): number {
  const [M, N] = [warehouse.length, warehouse[0].length];

  const hasCameraAdjacent = (row: number, col: number): boolean => {
    const dr = [-1, 0, 1, 0];
    const dc = [0, 1, 0, -1];
    for (let i = 0; i < dr.length; i++) {
      const r = row + dr[i];
      const c = col + dc[i];
      if (r >= 0 && c >= 0 && r < M && c < N && warehouse[r][c] === "#") {
        return true;
      }
    }
    return false;
  }; // hasCameraAdjacent()

  let unsafe = 0;
  for (let r = 0; r < M; r++) {
    for (let c = 0; c < N; c++) {
      if (warehouse[r][c] === "*" && !hasCameraAdjacent(r, c)) {
        unsafe++;
      }
    }
  }
  return unsafe;
} // findUnsafeGifts()

console.log(findUnsafeGifts([".*.", "*#*", ".*."]));
console.log(findUnsafeGifts(["...", ".*.", "..."]));
console.log(findUnsafeGifts(["*.*", "...", "*#*"]));
console.log(findUnsafeGifts([".....", ".*.*.", "..#..", ".*.*.", "....."]));
