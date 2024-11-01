function search(nums: number[], target: number): number {
  let [l, r] = [0, nums.length - 1];
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (nums[m] < nums[r]) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  const piv = l;
  [l, r] = [0, nums.length - 1];
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    const mid = (m + piv) % nums.length;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return -1;
} // search()

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([1], 0));
console.log(search([3, 1], 1));
