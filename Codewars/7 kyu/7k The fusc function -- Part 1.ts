export function fusc(n: number): number {
  if (n < 2) {
    return n;
  }
  if (n % 2 === 0) {
    return fusc(n / 2);
  }
  return fusc((n - 1) / 2) + fusc((n + 1) / 2);
} // fusc()

console.log(fusc(10));
