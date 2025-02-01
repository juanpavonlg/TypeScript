export function divisions(n: number, divisor: number): number {
  return Math.floor(Math.log(n) / Math.log(divisor));
} // divisions()

console.log(divisions(6, 2));
console.log(divisions(100, 2));
