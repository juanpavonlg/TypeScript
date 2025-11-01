export function degreesOfLock(a: number, b: number, c: number, d: number): number {
  return 1080 + getDegrees(a, b) + getDegrees(c, b) + getDegrees(c, d);
} // degreesOfLock()

function getDegrees(start: number, finish: number): number {
  return 9 * Math.abs(start < finish ? 40 - finish + start : finish - start);
  return 9 * ((start - finish + 40) % 40);
} // getDegrees()

console.log(degreesOfLock(0, 30, 0, 30));
console.log(degreesOfLock(5, 35, 5, 35));
console.log(degreesOfLock(0, 20, 0, 20));
console.log(degreesOfLock(7, 27, 7, 27));
console.log(degreesOfLock(0, 10, 0, 10));
console.log(degreesOfLock(9, 19, 9, 19));
console.log(degreesOfLock(5, 30, 39, 30));
