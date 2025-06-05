export const vectorAffinity = function vectorAffinity(xs: Array<number | null>, ys: Array<number | null>): number {
  const lim = Math.max(xs.length, ys.length);
  let same = 0;
  for (let i = 0; i < lim; i++) {
    if (xs[i] === ys[i]) {
      same++;
    }
  }
  return lim ? same / lim : 1;
}; // vectorAffinity()

console.log(vectorAffinity([1, 2, 3, 4, 5], [1, 2, 2, 4, 3]));
console.log(vectorAffinity([1, 2, 3], [1, 2, 3]));
