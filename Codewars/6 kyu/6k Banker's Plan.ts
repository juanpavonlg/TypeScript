export function fortune(f0: number, p: number, c0: number, n: number, i: number): boolean {
  p /= 100;
  i /= 100;
  for (let y = 1; y < n; y++) {
    f0 += Math.trunc(p * f0);
    if (c0 > f0) {
      return false;
    }
    f0 -= c0;
    c0 += Math.trunc(i * c0);
  }
  return true;
} // fortune()

console.log(fortune(100000, 1, 2000, 15, 1));
console.log(fortune(100000, 1, 10000, 10, 1));
console.log(fortune(100000, 1, 9185, 12, 1));
