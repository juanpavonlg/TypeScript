export function latestClock(a: number, b: number, c: number, d: number): string {
  const times = [[a, b, c, d], [a, b, d, c], [a, c, b, d], [a, c, d, b], [a, d, b, c], [a, d, c, b],
                [b, a, c, d], [b, a, d, c], [b, c, a, d], [b, c, d, a], [b, d, a, c], [b, d, c, a],
                [c, a, b, d], [c, a, d, b], [c, b, a, d], [c, b, d, a], [c, d, a, b], [c, d, b, a],
                [d, a, b, c], [d, a, c, b], [d, b, a, c], [d, b, c, a], [d, c, a, b], [d, c, b, a]];
  let maxH = 0;
  let maxM = 0;
  for (const t of times) {
    const h = 10 * t[0] + t[1];
    const m = 10 * t[2] + t[3];
    if (h < 24 && m < 60) {
      if (h > maxH) {
        maxH = h;
        maxM = m;
      } else if (h === maxH && m > maxM) {
        maxM = m;
      }
    }
  }
  return `${maxH.toString().padStart(2, "0")}:${maxM.toString().padStart(2, "0")}`;
} // latestClock()

console.log(latestClock(1, 9, 8, 3));
console.log(latestClock(9, 1, 2, 5));
console.log(latestClock(1, 2, 8, 9));
