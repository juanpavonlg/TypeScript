export function countRedBeads(n: number): number {
  return n > 1 ? 2 * (n - 1) : 0;
} // countRedBeads()

console.log(countRedBeads(3));
