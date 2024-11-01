export function determinant(m: number[][]): number {
  if (m.length === 1) {
    return m[0][0];
  } else if (m.length === 2) {
    return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  }
  return m[0].reduce((a, e, i) => a + (i % 2 ? -1 : 1) * e * determinant(findSub(m, i)), 0);
} // determinant()

function findSub(m: number[][], c: number) {
  const sub: number[][] = [];
  for (let r = 1; r < m.length; r++) {
    sub.push([...m[r].slice(0, c), ...m[r].slice(c + 1)]);
  }
  return sub;
} // reduce()

console.log(determinant([[1]]));
console.log(
  determinant([
    [1, 3],
    [2, 5],
  ])
);
console.log(
  determinant([
    [2, 5, 3],
    [1, -2, -1],
    [1, 3, 4],
  ])
);
