export function realNumbers(n: number): number {
  return [1, -2, -3, -5, 6, 10, 15, -30].reduce((a, e) => a + (n / e | 0), 0);
} // realNumbers()

console.log(realNumbers(5));
console.log(realNumbers(10));
