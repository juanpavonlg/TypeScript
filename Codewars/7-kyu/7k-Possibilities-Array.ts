export function isAllPossibilities(x: number[]): boolean {
  return x.length > 0 &&  x.sort((a, b) => a - b).every((a, i) => a === i);
} // isAllPossibilities()

console.log(isAllPossibilities([3, 12, 1, 0]));
console.log(isAllPossibilities([3, 2, 1, 0]));
console.log(isAllPossibilities([]));
