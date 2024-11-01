export function rotateLikeAVortex(matrix: number[][]): number[][] {
  const m = Array.from({ length: matrix.length }, (_, i) => [...matrix[i]]);
  const rings = Math.floor(m.length / 2);
  let ring = 0;
  while (ring < rings) {
    let step = 0;
    while (step <= ring) {
      const last = m.length - 1 - ring;
      let cs = ring;
      let rs = last;
      let cf = last;
      let rf = ring;
      const lim = last - ring;
      for (let i = 0; i < lim; i++) {
        [m[ring][cs + i], m[rs - i][ring], m[last][cf - i], m[rf + i][last]] = [m[rf + i][last], m[ring][cs + i], m[rs - i][ring], m[last][cf - i]];
      }
      step++;
    }
    ring++;
  }
  return m;
} // rotateLikeAVortex()

console.log(
  rotateLikeAVortex([
    [5, 3, 6, 1],
    [5, 8, 7, 4],
    [1, 2, 4, 3],
    [3, 1, 2, 2],
  ])
);
console.log(
  rotateLikeAVortex([
    [5, 3, 6, 1, 5],
    [5, 8, 7, 4, 5],
    [1, 2, 4, 3, 5],
    [3, 1, 2, 2, 5],
    [5, 5, 5, 5, 5],
  ])
);
