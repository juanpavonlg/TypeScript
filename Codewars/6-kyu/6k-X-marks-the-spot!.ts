export function x(n: number): number[][] {
  const lim = n - 1;
  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => (i === j || i + j === lim ? 1 : 0))
  );
} // x()

console.log(x(5));
console.log(x(6));
