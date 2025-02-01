export function median(n: number[]): number {
  const s = n.sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
} // median()

console.log(median([33, 99, 100, 30, 29, 50]));
console.log(median([33, 99, 100, 30, 29, 50, 101]));
