export function minimumSteps(nums: number[], value: number) {
  nums.sort((a, b) => a - b);
  let sum = 0;
  let ope = -1;
  while (sum < value) {
    ope++;
    sum += nums[ope];
  }
  return ope;
} // minimumSteps()

console.log(minimumSteps([1, 10, 12, 9, 2, 3], 6));
