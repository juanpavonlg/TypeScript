function dropGifts(warehouse: string[][], drops: number[]): string[][] {
  for (const col of drops) {
    let row = 0;
    while (warehouse[row] && warehouse[row][col] === ".") {
      row++;
    }
    if (row > 0) {
      warehouse[row - 1][col] = "#";
    }
  }
  return warehouse;
} // dropGifts()

console.log(
  dropGifts(
    [
      [".", ".", "."],
      [".", "#", "."],
      ["#", "#", "."],
    ],
    [0]
  )
);
console.log(
  dropGifts(
    [
      [".", ".", "."],
      ["#", "#", "."],
      ["#", "#", "#"],
    ],
    [0, 2]
  )
);
console.log(
  dropGifts(
    [
      [".", ".", "."],
      [".", ".", "."],
      [".", ".", "."],
    ],
    [0, 1, 2]
  )
);
console.log(
  dropGifts(
    [
      ["#", "#"],
      ["#", "#"],
    ],
    [0, 0]
  )
);
