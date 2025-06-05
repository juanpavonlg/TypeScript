export const exEuler = (n: number): number => {
  const dx = 1 / n;
  const h = 1 / n;
  let errors = 0;
  let x = 0;
  let y = 1;
  let i = 0;
  while (i++ < n) {
    y = y + (2 - Math.exp(-4 * x) - 2 * y) * h;
    x += dx;
    const z = 1 + 0.5 * Math.exp(-4 * x) - 0.5 * Math.exp(-2 * x);
    errors += Math.abs(y - z) / z;
  }
  return Math.floor(errors / (n + 1) * 1_000_000) / 1_000_000;
}; // exEuler()

console.log(exEuler(10));
console.log(exEuler(17));
console.log(exEuler(100));
