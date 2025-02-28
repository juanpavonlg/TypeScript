export function getPositions(s: number): number[] {
  return [s % 3, Math.floor(s % 9 / 3), Math.floor(s % 27 / 9)];
} // getPositions()

console.log(getPositions(54));
console.log(getPositions(98));
console.log(getPositions(3));
console.log(getPositions(13));
console.log(getPositions(213));
console.log(getPositions(2147483647));
console.log(getPositions(1340254));
console.log(getPositions(26));
console.log(getPositions(27));
