function firstMissingPositive(nums: number[]): number {
  for (let i = 0; i < nums.length; ) {
    const j = nums[i] - 1;
    if (nums[i] > 0 && nums[i] <= nums.length && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return nums.length + 1;
} // firstMissingPositive()

console.log(firstMissingPositive([1, 2, 0]));
console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([7, 8, 9, 11, 12]));
console.log(firstMissingPositive([1, 1]));
