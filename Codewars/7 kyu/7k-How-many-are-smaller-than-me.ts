export function smaller(nums: number[]): number[] {
  return nums.map((a, i) => nums.slice(i).filter((b) => b < a).length);
} // smaller()

console.log(smaller([5, 4, 3, 2, 1]));
console.log(smaller([1, 2, 0]));
