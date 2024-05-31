export function breakChocolate(n: number, m: number): number {
  return m !== 0 && n !== 0 ? m * n - 1 : 0;
  return Math.max(m * n - 1, 0);
} // breakChocolate()

console.log(breakChocolate(5, 5));
console.log(breakChocolate(7, 4));
console.log(breakChocolate(1, 1));
console.log(breakChocolate(0, 0));
console.log(breakChocolate(6, 1));
