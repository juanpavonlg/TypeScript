export function arrayDiff(a: number[], b: number[]): number[] {
  return a.filter((e) => !b.includes(e));
} // arrayDiff()

console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
