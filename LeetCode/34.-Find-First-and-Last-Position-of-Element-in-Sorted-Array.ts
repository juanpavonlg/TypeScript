function searchRange(nums: number[], target: number): number[] {
  let [l, r] = [0, nums.length - 1];
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (nums[m] === target) {
      [l, r] = [m, m];
      do {
        l--;
      } while (nums[l] === target);
      do {
        r++;
      } while (nums[r] === target);
      return [++l, --r];
    } else if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return [-1, -1];
} // searchRange()

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([], 0));
