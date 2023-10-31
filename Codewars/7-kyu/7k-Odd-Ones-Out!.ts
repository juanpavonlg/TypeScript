export function oddOnesOut(nums: number[]) {
  const numSet = new Set(nums);
  for (const num of numSet) {
    const count = nums.filter((e) => e === num).length;
    if (count % 2) {
      nums = nums.filter((e) => e !== num);
    }
  }
  return nums;
} // oddOnesOut()

console.log(oddOnesOut([1, 2, 3, 1, 3, 3]));
console.log(oddOnesOut([26, 23, 24, 17, 23, 24, 23, 26]));
