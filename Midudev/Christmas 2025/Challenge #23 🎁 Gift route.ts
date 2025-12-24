function minStepsToDeliver(map: string[][]): number {
  const [ROWS, COLS] = [map.length, map[0].length];
  const visited = new Set<number>();

  const isValid = (row: number, col: number, cell: number): boolean => {
    return (
      row >= 0 &&
      col >= 0 &&
      row < ROWS &&
      col < COLS &&
      map[row][col] !== "#" &&
      !visited.has(cell)
    );
  }; // isValid()

  let ans = 0;
  let found = 0;
  let sRow = -1;
  let sCol = -1;
  let gifts = 0;
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (map[r][c] === "S") {
        sRow = r;
        sCol = c;
      } else if (map[r][c] === "G") {
        gifts++;
      }
    }
  }
  const queue: [number, number, number][] = [[sRow, sCol, 0]];
  visited.add(COLS * sRow + sCol);
  while (queue.length) {
    const [row, col, steps] = queue.shift()!;
    if (map[row][col] === "G") {
      found++;
      ans += steps;
    }
    const moves: [number, number][] = [
      [row - 1, col],
      [row, col + 1],
      [row + 1, col],
      [row, col - 1],
    ];
    for (const [newRow, newCol] of moves) {
      const cell = COLS * newRow + newCol;
      if (isValid(newRow, newCol, cell)) {
        visited.add(cell);
        queue.push([newRow, newCol, steps + 1]);
      }
    }
  }
  return found === gifts ? ans : -1;
} // minStepsToDeliver()

console.log(
  minStepsToDeliver([
    ["S", ".", "G"],
    [".", "#", "."],
    ["G", ".", "."],
  ])
);
console.log(
  minStepsToDeliver([
    ["S", "#", "G"],
    ["#", "#", "."],
    ["G", ".", "."],
  ])
);
console.log(minStepsToDeliver([["S", "G"]]));
console.log(minStepsToDeliver([["S", "G", "G", "G"]]));
