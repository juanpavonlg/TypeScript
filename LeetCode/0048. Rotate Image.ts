function rotate(matrix: number[][]): void {
  const rings = Math.floor(matrix.length / 2);
  let ring = 0;
  while (ring < rings) {
    const last = matrix.length - 1 - ring;
    const cs = ring;
    const rs = ring;
    const cf = last;
    const rf = last;
    const lim = last - ring;
    for (let i = 0; i < lim; i++) {
      [
        matrix[ring][cs + i],
        matrix[rs + i][last],
        matrix[last][cf - i],
        matrix[rf - i][ring],
      ] = [
        matrix[rf - i][ring],
        matrix[ring][cs + i],
        matrix[rs + i][last],
        matrix[last][cf - i],
      ];
    }
    ring++;
  }
} // rotate()

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotate(matrix);
console.log(matrix);
matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
rotate(matrix);
console.log(matrix);
