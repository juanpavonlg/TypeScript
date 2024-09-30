function nextPermutation(nums: number[]): void {
  let unchanged = true;
  let l = nums.length - 2;
  while (unchanged) {
    const min = Number.MAX_SAFE_INTEGER;
    let i = 0;
    for (let r = l + 1; r < nums.length; r++) {
      const diff = nums[r] - nums[l];
      if (diff > 0 && diff < min) {
        i = r;
        unchanged = false;
      }
    }
    if (!unchanged) {
      [nums[l], nums[i]] = [nums[i], nums[l]];
      nums.splice(l + 1, nums.length - l, ...nums.slice(l + 1).sort((a, b) => a - b));
    }
    l--;
    if (l < 0 && unchanged) {
      nums.sort((a, b) => a - b);
      unchanged = false;
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
