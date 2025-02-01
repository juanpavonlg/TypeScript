function fourSum(nums: number[], target: number): number[][] {
  const ans: number[][] = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 3; i++) {
    if (nums[i] !== nums[i - 1]) {
      for (let j = i + 1; j < nums.length - 2; j++) {
        if (j === i + 1 || nums[j] !== nums[j - 1]) {
          let l = j + 1;
          let r = nums.length - 1;
          while (l < r) {
            const sum = nums[i] + nums[j] + nums[l] + nums[r];
            if (sum === target) {
              ans.push([nums[i], nums[j], nums[l], nums[r]]);
              do {
                l++;
              } while (nums[l] === nums[l - 1]);
              do {
                r--;
              } while (nums[r] === nums[r + 1]);
            } else if (sum < target) {
              l++;
            } else {
              r--;
            }
          }
        }
      }
    }
  }
  return ans;
} // fourSum()

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([2, 2, 2, 2, 2], 8));
