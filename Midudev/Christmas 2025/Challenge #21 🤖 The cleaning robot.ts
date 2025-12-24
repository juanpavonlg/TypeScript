function clearGifts(warehouse: string[][], drops: number[]): string[][] {
  const clearBottom = () => {
    while (/^#+$/.test(warehouse[warehouse.length - 1].join(""))) {
      warehouse.unshift(new Array(warehouse[0].length).fill("."));
      warehouse.pop();
    }
  }; // clearBottom()

  for (const col of drops) {
    let row = 0;
    while (warehouse[row] && warehouse[row][col] === ".") {
      row++;
    }
    if (row > 0) {
      warehouse[row - 1][col] = "#";
      clearBottom();
    }
  }
  return warehouse;
} // clearGifts()

console.log(
  clearGifts(
    [
      [".", ".", "."],
      [".", ".", "."],
      ["#", ".", "#"],
    ],
    [1]
  )
);
console.log(
  clearGifts(
    [
      [".", ".", "#"],
      ["#", ".", "#"],
      ["#", ".", "#"],
    ],
    [0, 1, 2]
  )
);
console.log(
  clearGifts(
    [
      [".", ".", "."],
    ],
    [0, 1, 2]
  )
);
