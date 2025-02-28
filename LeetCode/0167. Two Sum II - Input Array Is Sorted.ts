function twoSum(numbers: number[], target: number): number[] {
  let [l, r] = [0, numbers.length - 1];
  while (l < r) {
    const sum = numbers[l] + numbers[r];
    if (sum === target) {
      return [l + 1, r + 1];
    } else if (sum < target) {
      l++;
    } else {
      r--;
    }
  }
  return [-1, -1];
} // twoSum()

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));
console.log([2, 3, 4].valueOf());

