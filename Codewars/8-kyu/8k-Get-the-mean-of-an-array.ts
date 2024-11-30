export function getAverage(marks: number[]): number {
  return Math.floor(marks.reduce((a, e) => a + e) / marks.length);
} // getAverage()

console.log(getAverage([2, 2, 2, 2]));
console.log(getAverage([1, 2, 3, 4, 5]));
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));
