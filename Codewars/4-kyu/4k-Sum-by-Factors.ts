export function sumOfDivided(lst: number[]): number[][] {
  const ans: [number, number][] = [];
  const lim = Math.max(...lst.map((e) => Math.abs(e)));
  for (let p = 2; p <= lim; p += (p % 2) + 1) {
    if (isPrime(p)) {
      let sum = 0;
      let added = false;
      for (const n of lst) {
        if (n % p === 0) {
          sum += n;
          added = true;
        }        
      }
      if (added) {
        ans.push([p, sum]);
      }
    }
  }
  return ans;
} // sumOfDivided()

function isPrime(n: number) {
  for (let d = 2; d * d <= n; d += (d % 2) + 1) {
    if (n % d === 0) {
      return false;
    }
  }
  return n > 1;
} // isPrime()

console.log(sumOfDivided([12, 15]));
console.log(sumOfDivided([15, 21, 24, 30, -45]));
