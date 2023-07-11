export function solution(nums: number[]): number[] {
  return nums.sort((a, b) => a - b);
} // solution()

console.log(solution([1, 2, 10, 50, 5]));
