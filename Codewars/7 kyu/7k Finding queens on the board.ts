export function queens(n: bigint): bigint {
  return n < 1n ? 0n : n ** 2n - (3n * n - 2n);
} // queens()

console.log(queens(4n));
console.log(queens(5n));
console.log(queens(0n));
