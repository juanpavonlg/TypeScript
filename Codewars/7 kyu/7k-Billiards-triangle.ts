export function pyramid(balls: number): number {
  return Math.floor((-1 + Math.sqrt(1 + 8 * balls)) / 2);
} // pyramid()

console.log(pyramid(1));
console.log(pyramid(3));
console.log(pyramid(6));
console.log(pyramid(10));
console.log(pyramid(15));
