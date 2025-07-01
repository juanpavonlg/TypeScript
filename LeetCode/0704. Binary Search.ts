function search(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (nums[m] === target) {
      return m;
    } else if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return -1;
} // search()

console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
