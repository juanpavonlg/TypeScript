export const gap = (g: number, m: number, n: number): number[] | null => {
  let prev: number = 0;
  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      if (i - prev === g && prev !== 0) {
        return [prev, i];
      } else {
        prev = i;
      }
    }
  }
  return null;
} // gap()

function isPrime(n: number): boolean {
  for (let i = 2; i <= ~~(n / 2); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
} // isPrime()

console.log(gap(4, 2, 15));
console.log(gap(4, 100, 110));
