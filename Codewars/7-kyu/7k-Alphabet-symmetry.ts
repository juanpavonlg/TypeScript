export function solve(arr: string[]) {
  return arr.map(word => word.split("").reduce((sum, letter, i) => sum += letter.toUpperCase().charCodeAt(0) - 65 === i ? 1 : 0, 0));
} // solve()

console.log(solve(["abide", "ABc", "xyz"]));
