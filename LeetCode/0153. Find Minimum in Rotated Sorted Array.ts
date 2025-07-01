function findMin(nums: number[]): number {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const m = ((l + r) / 2) | 0;
    if (nums[m] < nums[r]) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  return nums[l];
} // findMin()

console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([11, 13, 15, 17]));
