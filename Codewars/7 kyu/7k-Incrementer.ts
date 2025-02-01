export function incrementer(nums: number[]) {
  return nums.map((n, i) => (n + i + 1) % 10);
} // incrementer()

console.log(incrementer([3, 6, 9, 8, 9]));
