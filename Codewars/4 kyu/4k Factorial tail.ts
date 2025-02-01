export const zeroes = (base: number, num: number) => {
  const primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
    157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
    239, 241, 251,
  ];
  const primeCount: { [key: number]: number } = {};
  for (let i = 0; i < primes.length && base > 1; i++) {
    while (base % primes[i] === 0) {
      primeCount[primes[i]] = primeCount[primes[i]] ? ++primeCount[primes[i]] : 1;
      base /= primes[i];
    }
  }
  let zeroes = Number.MAX_VALUE;
  for (const prime in primeCount) {
    zeroes = Math.min(Math.floor(getFactorCount(num, +prime) / primeCount[prime]), zeroes);
  }
  return zeroes;
}; // zeroes()

const getFactorCount = (number: number, prime: number): number => {
  let count = 0;
  for (let n = 2; n <= number; n++) {
    let factor = n;
    while (factor % prime === 0) {
      count++;
      factor /= prime;
    }
  }
  return count;
}; // getFactorCount()

console.log(zeroes(10, 10));
console.log(zeroes(16, 16));
