export function flip(dir: string, arr: number[]): number[] {
  return arr.sort((a, b) => (dir === "R" ? a - b : b - a));
} // flip()

console.log(flip("R", [3, 2, 1, 2]));
console.log(flip("L", [1, 4, 5, 3, 5]));
