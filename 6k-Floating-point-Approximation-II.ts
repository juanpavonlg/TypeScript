export function interp(f: (x: number) => number, l: number, u: number, n: number): number[] {
  const d = (u - l) / n;
  return Array.from({ length: n }, (_, i) => Math.floor(f(l + d * i) * 100) / 100);
} // interp()

const id = (x: number) => x;

const sin = (x: number) => Math.sin(x);

const cos = (x: number) => Math.cos(x);

const log = (x: number) => Math.log(x);

console.log(interp(id, 0, 9.0, 4));
console.log(interp(sin, 0, 18.0, 12));
console.log(interp(log, 2, 23, 16));
