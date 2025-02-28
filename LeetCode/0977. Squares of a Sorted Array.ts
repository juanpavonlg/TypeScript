function sortedSquares(nums: number[]): number[] {
  let l = 0;
  let r = l + 1;
  while (Math.abs(nums[l]) >= Math.abs(nums[r])) {
    l++;
    r++;
  }
  const ans = [nums[l] ** 2];
  l--;
  while (r - l <= nums.length) {
    if (r >= nums.length || Math.abs(nums[l]) < Math.abs(nums[r])) {
      ans.push(nums[l] ** 2);
      l--;
    } else {
      ans.push(nums[r] ** 2);
      r++;
    }
  }
  return ans;
} // sortedSquares()

console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));
console.log(sortedSquares([-4, -4, -3]));
