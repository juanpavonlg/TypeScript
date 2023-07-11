export function bigToSmall(arr: number[][]): string {
  let result: number[] = [];
  for (const a of arr) {
    result = result.concat(a);
  }
  return result.sort((a, b) => b - a).join(">");
} // bigToSmall()

console.log(bigToSmall([[1, 2], [3, 4], [5, 6]]));
