function maxSubArray(nums: number[]): number {
  let max = -Infinity;
  let curr = 0;
  for (const num of nums) {
    curr += num;
    max = Math.max(curr, max);
    if (curr < 0) {
      curr = 0;
    }
  }
  return max;
} // maxSubArray()

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
