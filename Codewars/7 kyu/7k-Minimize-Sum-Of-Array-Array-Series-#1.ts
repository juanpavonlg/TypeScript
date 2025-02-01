export function minSum(arr: number[]): number {
  let sum = 0;
  while (arr.length) {
    const max = arr.splice(arr.indexOf(Math.max(...arr)), 1);
    const min = arr.splice(arr.indexOf(Math.min(...arr)), 1);
    sum += max[0] * min[0];
  }
  return sum;
} // minSum()

console.log(minSum([5, 4, 2, 3]));
