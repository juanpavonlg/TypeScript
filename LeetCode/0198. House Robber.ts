function rob(nums: number[]): number {
  let [prev, curr] = [nums[0], Math.max(nums[0], nums[1] ?? 0)];
  for (let i = 2; i < nums.length; i++) {
    [prev, curr] = [curr, Math.max(nums[i] + prev, curr)];
  }
  return curr;
  // const dp = [...nums];
  // for (let i = 2; i < dp.length; i++) {
  //   dp[i] += Math.max(...dp.slice(0, i - 1));
  // }
  // return Math.max(...dp);
} // rob()

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
