export function sumProdDiags(matrix: number[][]): number {
  let [rs, cs, rf, cf, drs, dcs, drf, dcf] = [matrix.length - 1, 0, matrix.length - 1, 0, -1, 0, 0, 1];
  let sum1 = 0;
  for (let d = 0; d < 2 * matrix.length - 1; d++) {
    let prod = 1;
    for (let i = rs, j = cs; i <= rf && j <= cf; i++, j++) {
      prod *= matrix[i][j];
    }
    sum1 += prod;
    rs += drs;
    cs += dcs;
    rf += drf;
    cf += dcf;
    if (rs === cs && rf === cf) {
      [drs, dcs, drf, dcf] = [0, 1, -1, 0];
    }
  }
  [rs, cs, rf, cf, drs, dcs, drf, dcf] = [0, 0, 0, 0, 1, 0, 0, 1];
  let sum2 = 0;
  for (let d = 0; d < 2 * matrix.length - 1; d++) {
    let prod = 1;
    for (let i = rs, j = cs; i >= rf && j <= cf; i--, j++) {
      prod *= matrix[i][j];
    }
    sum2 += prod;
    rs += drs;
    cs += dcs;
    rf += drf;
    cf += dcf;
    if (rs === matrix.length - 1 && cs === 0) {
      [drs, dcs, drf, dcf] = [0, 1, 1, 0];
    }
  }
  return sum1 - sum2;
} // sumProdDiags()

const M = [
  [1, 4, 7, 6, 5],
  [-3, 2, 8, 1, 3],
  [6, 2, 9, 7, -4],
  [1, -2, 4, -2, 6],
  [3, 2, 2, -4, 7],
];

console.log(sumProdDiags(M));
