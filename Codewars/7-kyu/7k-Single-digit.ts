export function singleDigit(n: number): number {
  while (n > 9) {
    n = n.toString(2).split("").map(Number).reduce((a, b) => a + b);
  }
  return n;
} // singleDigit()

console.log(singleDigit(5665));
console.log(singleDigit(123456789));
