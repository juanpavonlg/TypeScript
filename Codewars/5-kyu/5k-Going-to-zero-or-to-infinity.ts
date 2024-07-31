export function going(n: number): number {
  let u = 1;
  for (let i = 2; i <= n; i++) {
    u = u / i + 1;
  }
  return u;
  let frac = 1;
  while (n > 1) {
    frac /= n--;
    u += frac;
  }
  return u;
} // going()

console.log(going(5));
console.log(going(6));
console.log(going(7));
console.log(going(200));
