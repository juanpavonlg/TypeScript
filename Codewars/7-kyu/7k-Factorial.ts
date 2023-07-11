export function factorial(n: number): number {
  return n < 2 ? 1 : factorial(n - 1) * n;
} // factorial()

console.log(factorial(5));

