export function countSquares(cuts: number): number {
  return cuts > 0 ? 6 * cuts ** 2 + 2 : 1;
} // countSquares()

console.log(countSquares(2));
console.log(countSquares(4));
