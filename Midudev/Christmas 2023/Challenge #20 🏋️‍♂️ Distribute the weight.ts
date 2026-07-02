function distributeGifts(weights: (number | null)[][]) {
  const [M, N] = [weights.length, weights[0].length];
  const means: number[][] = [];
  for (let r = 0; r < M; r++) {
    let row: number[] = [];
    for (let c = 0; c < N; c++) {
      const dirs: [number, number][] = [
        [r - 1, c],
        [r, c + 1],
        [r, c],
        [r + 1, c],
        [r, c - 1],
      ];
      const [sum, num] = dirs.reduce(
        (a, [nr, nc]) => {
          if (nr >= 0 && nc >= 0 && nr < M && nc < N && weights[nr][nc]) {
            a[0] += weights[nr][nc];
            a[1]++;
            return a;
          }
          return a;
        },
        [0, 0],
      );
      row.push(Math.round(sum / num));
    }
    means.push(row);
  }
  return means;
} // distributeGifts()

const input = [
  [4, 5, 1],
  [6, null, 3],
  [8, null, 4],
];
console.log(distributeGifts(input));
