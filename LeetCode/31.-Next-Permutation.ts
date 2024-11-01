function nextPermutation(nums: number[]): void {
  let l = nums.length - 2;
  while (l >= 0) {
    const next = l + 1;
    let i = -1;
    for (let r = next; r < nums.length; r++) {
      if (nums[r] - nums[l] > 0) {
        i = r;
      }
    }
    if (i >= 0) {
      [nums[l], nums[i]] = [nums[i], nums[l]];
      nums.splice(next, nums.length - next, ...nums.slice(next).sort((a, b) => a - b));
      break;
    }
    l--;
    if (l === -1) {
      nums.sort((a, b) => a - b);
    }
  }
} // nextPermutation()

let nums = [1, 2, 3];
nextPermutation(nums);
console.log(nums);
nums = [3, 2, 1];
nextPermutation(nums);
console.log(nums);
nums = [1, 1, 5];
nextPermutation(nums);
console.log(nums);
nums = [1, 3, 2];
nextPermutation(nums);
console.log(nums);
