export function productArray(nums: number[]): number[] {
  return nums.map((_, i) => nums.reduce((a, b, j) => a *= i !== j ? b : 1, 1));;
} // productArray()

console.log(productArray([3, 27, 4, 2]));
