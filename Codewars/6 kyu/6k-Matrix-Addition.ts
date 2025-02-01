type matrix = number[][];

export function matrixAddition(a: matrix, b: matrix): matrix {
  return a.map((row, r) => row.map((col, c) => col + b[r][c]));
} // matrixAddition()

console.log(
  matrixAddition(
    [
      [1, 2, 3],
      [3, 2, 1],
      [1, 1, 1],
    ],

    [
      [2, 2, 1],
      [3, 2, 3],
      [1, 1, 3],
    ]
  )
);
