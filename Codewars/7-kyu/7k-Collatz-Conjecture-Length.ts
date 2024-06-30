export function collatz(n: number): number {
  let steps = 1;
  while (n > 1) {
    n = n % 2 ? 3 * n + 1 : n / 2;
   steps++;
  }
  return steps;
} // collatz()

console.log(collatz(20));
