export function simplify(integer: number, numerator: number, denominator: number): number[] {
  if (denominator === 0) {
    return [integer, 0, denominator]
  }
  const divisor = gcd(numerator, denominator);  
  numerator /= divisor;
  denominator /= divisor;
  integer += Math.floor(numerator / denominator);
  numerator %= denominator;
  denominator = numerator ? denominator : 0;
  return [integer, numerator, denominator];
} // simplify()

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
} // gcd

console.log(simplify(4, 3, 2));
console.log(simplify(0, 15, 12));
console.log(simplify(2, 0, 0));
console.log(simplify(2, 20, 20));
console.log(simplify(999, 100, 0));
console.log(simplify(0, 32, 16));
