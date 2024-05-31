export function sumOfDifferences(arr: number[]): number {
  return arr.sort((a, b) => b - a).reduce((a, e, i) => a + (i < arr.length - 1 ? e - arr[i + 1] : 0), 0);
} // sumOfDifferences()

console.log(sumOfDifferences([2, 1, 10]));
