export function maxGap(nums: number[]): number {
  nums.sort((a, b) => a - b);  
  return nums.reduce((max, n, i) => max = nums[i + 1] - n > max ? nums[i + 1] - n : max, Number.MIN_SAFE_INTEGER);
} // maxGap()

console.log(maxGap([13, 10, 2, 9, 5]));
console.log(maxGap([-3, -27, -4, -2]));
