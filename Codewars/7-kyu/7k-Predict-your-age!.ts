export function predictAge(...ages: number[]): number {
  return Math.sqrt(ages.reduce((a, b) => a + b * b, 0)) >> 1;
} // predictAge()

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));
