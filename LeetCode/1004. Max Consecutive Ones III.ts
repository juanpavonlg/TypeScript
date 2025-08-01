function longestOnes(nums: number[], k: number): number {
  let win = 0;
  let zeros = 0;
  let l = 0;
  for (let r = 0; r < nums.length; r++) {
    if (nums[r] === 0) {
      zeros++;
    }
    if (zeros > k) {
      if (nums[l] === 0) {
        zeros--;
      }
      l++;
    }
    win = Math.max(r - l + 1, win);
  }
  return win;
} // longestOnes()

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3));
