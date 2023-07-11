export function numPrimorial(n: number) {
  let primordial = 2;
  for (let i = 3, primes = 1; primes < n; i += 2) {
    if (isPrime(i)) {
      primordial *= i;
      primes++;
    }
  }
  return primordial;
} // numPrimorial()

function isPrime(n: number): boolean {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
} // isPrime()

console.log(numPrimorial(3));
console.log(numPrimorial(4));
console.log(numPrimorial(5));
console.log(numPrimorial(8));
