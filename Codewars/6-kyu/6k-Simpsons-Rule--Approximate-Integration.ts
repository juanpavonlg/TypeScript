export const simpson = (n: number): number => {
  const a = 0;
  const b = Math.PI;
  const h = (b - a) / n;
  const s = (lim: number, diff = 0): number => {
    let sum = 0;
    for (let i = 1; i <= lim; i++) {
      sum += f(a + (2 * i + diff) * h);
    }
    return sum;
  };
  return (h * (f(a) + f(b) + 4 * s(n / 2, -1) + 2 * s(n / 2 - 1))) / 3;
}; // simpson()

const f = (x: number): number => {
  return (3 * Math.sin(x) ** 3) / 2;
}; // f()

console.log(simpson(290));
