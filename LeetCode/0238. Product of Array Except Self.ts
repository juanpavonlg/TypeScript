function productExceptSelf(nums: number[]): number[] {
  const answer: number[] = [];
  let left = 1;
  for (const num of nums) {
    answer.push(left);
    left *= num;
  }
  let right = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    answer[j] *= right;
    right *= nums[j];
  }
  return answer;
} // productExceptSelf()

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
