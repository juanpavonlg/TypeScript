function sortColors(nums: number[]): void {
  const freqs = [0, 0, 0];
  for (const n of nums) {
    freqs[n]++;
  }
  const [R, W] = freqs;
  nums.fill(0, 0, R);
  nums.fill(1, R, R + W);
  nums.fill(2, R + W);
} // sortColors()

let nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
console.log(nums);
nums = [2, 0, 1];
sortColors(nums);
console.log(nums);
nums = [2, 2, 0];
sortColors(nums);
console.log(nums);
