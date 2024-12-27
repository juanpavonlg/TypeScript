function summaryRanges(nums: number[]): string[] {
  const ans: string[] = [];
  let a = nums[0];
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] !== nums[i - 1] + 1) {
      ans.push(nums[i - 1] > a ? `${a}->${nums[i - 1]}` : `${a}`);
      a = nums[i];
    }
  }
  return ans;
} // summaryRanges()

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
