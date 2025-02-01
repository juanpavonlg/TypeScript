// Return the nth triangular number
export function triangular(n: number): number {
  return n > 0 ? n * (n + 1) / 2 : 0;
} // triangular()

console.log(triangular(0));
console.log(triangular(2));
console.log(triangular(3));
console.log(triangular(-10));
