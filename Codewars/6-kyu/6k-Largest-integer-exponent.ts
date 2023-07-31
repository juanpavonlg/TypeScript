export function getExponent(n: number, p: number): null | number {
  if (p <= 1) {
    return null;
  }
  let x = 0;
  while (n % p === 0) {
    x++;
    n /= p;
  }
  return x;
} // getExponent()

console.log(getExponent(280, 7));
console.log(getExponent(27, 1));
console.log(getExponent(-250, 5));
