function majorityElement(nums: number[]): number {
  let count = 0;
  let ans = -1;
  nums.forEach((num) => {
    if (count === 0) {
      ans = num;
    }
    num === ans ? count++ : count--;
  });
  return ans;
} // majorityElement()

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([3, 2, 1, 1, 2, 2, 2, 3, 3]));
