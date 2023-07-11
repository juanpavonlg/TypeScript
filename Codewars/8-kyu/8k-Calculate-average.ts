export function findAverage(array: number[]): number {
  return array.length ? array.reduce((a, b) => a + b) / array.length : 0;
} // findAverage()

console.log(findAverage([1, 2, 3]));
