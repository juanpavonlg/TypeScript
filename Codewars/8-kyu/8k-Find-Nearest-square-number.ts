export function nearestSq(n: number): number {
  return Math.round(Math.sqrt(n)) ** 2;
} // nearestSq()

console.log(nearestSq(111));
