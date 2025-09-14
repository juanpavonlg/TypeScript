export const twinPrime = (n: number): number => {
  let twins = 0;
  let last = 2;
  for (let p = 3; p <= n + 1; p += 2) {
    if (isPrime(p)) {
      if (p - last === 2) {
        twins++;
      }
      last = p;
    }
  }
  return twins;
}; // twinPrime()

const isPrime = (n: number): boolean => {
  for (let d = 2; d * d <= n; d += d % 2 + 1) {
    if (n % d === 0) {
      return false;
    }
  }
  return n > 1;
}; // isPrime()

console.log(twinPrime(10));
console.log(isPrime(1));

