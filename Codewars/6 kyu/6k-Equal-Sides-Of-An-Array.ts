export function findEvenIndex(arr: number[]): number {
  return arr.findIndex((_, i) => arr.slice(0, i).reduce((a, e) => a + e, 0) === arr.slice(i + 1).reduce((a, e) => a + e, 0));
} // findEvenIndex()

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]));
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));
