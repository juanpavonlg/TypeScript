export function upDownColSort(matrix: number[][]): number[][] {
  let sorted: number[] = matrix.flat().sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    const c = ~~(i / matrix.length);
    const r = c % 2 === 0 ? i % matrix.length : matrix.length - 1 - i % matrix.length;
    matrix[r][c] = sorted[i];
  }
  return matrix;
} // upDownColSort()

console.log(upDownColSort([[-20, -4, -1], [1, 4, 7], [8, 10, 12]]));
console.log(upDownColSort([[1, -1, 4, 1], [7, -20, 12, 0], [8, 10, -4, -3]]));
console.log(upDownColSort([[1, -1, 4, 1], [7, -20, 12, 0], [8, 10, -4, -3], [5, 6, 6, 8]]));

