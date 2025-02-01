export function getSum(a: number, b: number): number {
  return (a + b) * (Math.abs(a - b) + 1) / 2;
} // getSum()

console.log(getSum(-1,-1));
