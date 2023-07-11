export function sumDigits(n: number): number {
  return Math.abs(n).toString().split("").reduce((sum, digit) => sum + parseInt(digit), 0);
} // sumDigits()

console.log(sumDigits(-32));
