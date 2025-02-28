export function largestRadialSum(arr: number[], d: number): number {
  const groups = arr.length / d;
  const ans: number[] = new Array(groups).fill(0);
  for (let g = 0; g < groups; g++) {
    for (let i = g; i < arr.length; i += groups) {
      ans[g] += arr[i];
    }
  }
  return Math.max(...ans);
} // largestRadialSum()

console.log(largestRadialSum([1, 2, 3, 4], 2));
console.log(largestRadialSum([1, 5, 6, 3, 4, 2], 3));
console.log(largestRadialSum([1, 1, 0], 1));
