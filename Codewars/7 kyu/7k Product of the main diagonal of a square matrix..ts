export function mainDiagonalProduct(mat: number[][]): number {
  return mat.reduce((a, e, i) => a * e[i], 1);
} // mainDiagonalProduct()

console.log(
  mainDiagonalProduct([
    [1, 0],
    [0, 1],
  ])
);
console.log(
  mainDiagonalProduct([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
