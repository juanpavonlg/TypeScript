function removeDuplicates(nums: number[]): number {
  let k = 0;
  let c = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[k] && c < 2) {
      nums[++k] = nums[i];
      c++;
    } else if (nums[i] > nums[k]) {
      nums[++k] = nums[i];
      c = 1;
    }
  }
  return k + 1;
} // removeDuplicates()

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
