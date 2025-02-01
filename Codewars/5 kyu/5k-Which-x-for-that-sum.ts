export function solve(m: number): number {
  return (2 * m + 1 - Math.sqrt(4 * m + 1)) / (2 * m);
} // solve()

console.log(solve(2));
console.log(solve(8));
