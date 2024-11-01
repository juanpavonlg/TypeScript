function twoSum(nums: number[], target: number): number[] {
  const used: {[key: number]: number} = {};
  for (let i = 0; i < nums.length; i++) {
    const index = used[target - nums[i]];
    if (index !== undefined) {
      return [index, i];
    }
    used[nums[i]] = i;
  }
  return [];
} // twoSum()

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
