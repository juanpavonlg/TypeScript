export function nthSmallest(arr: number[], pos: number) {
  return arr.sort((a, b) => a - b)[pos - 1];
} // nthSmallest()

console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3));
