export function consecKprimes(k: number, arr: number[]): number {
  const ks: number[] = [];
  for (let n of arr) {
    let prime = 2;
    let count = 0;
    while (n !== 1) {
      while (n % prime === 0) {
        n /= prime;
        count++;
      }
      prime++;
    }
    ks.push(count);
  }
  return ks.reduce((a, e, i) => a += e === k && e === ks[i + 1] ? 1 : 0, 0);
} // consecKprimes()

console.log(consecKprimes(4, [10005, 10030, 10026, 10008, 10016, 10028, 10004]));
