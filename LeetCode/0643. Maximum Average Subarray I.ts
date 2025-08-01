function findMaxAverage(nums: number[], k: number): number {
  let sum = nums.slice(0, k).reduce((a, e) => a + e);
  let avg = sum / k;
  for (let i = k; i < nums.length; i++) {
    sum += -nums[i - k] + nums[i];
    avg = Math.max(sum / k, avg);
  }
  return avg;
} // findMaxAverage()

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));
console.log(findMaxAverage([0, 1, 1, 3, 3], 4));
