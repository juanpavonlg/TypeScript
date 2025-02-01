export function flattenAndSort(inputArray: number[][]): number[] {
  return inputArray.flat().sort((a, b) => a - b);
} // flattenAndSort()

console.log(flattenAndSort([]));
console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));
