export function backwardsPrime(start: number, stop: number): number[] {
  const ans: number[] = [];
  for (let n = start; n <= stop; n += n % 2 + 1) {
    if (isPrime(n)) {
      let copy = n;
      let inv = 0;
      while (copy > 0) {
        inv = 10 * inv + copy % 10;
        copy = Math.floor(copy / 10);
      }
      if (isPrime(inv) && n !== inv) {
        ans.push(n);
      }
    }
  }
  return ans;
} // backwardsPrime()

function isPrime(n: number) {
  for (let d = 2; d * d <= n; d += d % 2 + 1) {
    if (n % d === 0) {
      return false;
    }
  }
  return n > 1;
} // isPrime()

console.log(backwardsPrime(2, 100));
console.log(backwardsPrime(9900, 10000));
console.log(backwardsPrime(501, 599));
