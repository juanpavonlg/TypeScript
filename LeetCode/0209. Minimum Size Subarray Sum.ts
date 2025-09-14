function minSubArrayLen(target: number, nums: number[]): number {
  let min = Number.POSITIVE_INFINITY;
  let sum = 0;
  let l = 0;
  for (let r = 0; r < nums.length; r++) {
    sum += nums[r];
    while (sum >= target) {
      min = Math.min(r - l + 1, min);
      sum -= nums[l];
      l++;
    }
  }
  return min < Number.POSITIVE_INFINITY ? min : 0;
} // minSubArrayLen()

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
