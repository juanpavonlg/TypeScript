export function sumTriangularNumbers(n: number): number {
  return n > 0 ? sumTriangularNumbers(n - 1) + n * (n + 1) / 2 : 0;
} // sumTriangularNumbers()

console.log(sumTriangularNumbers(4));
