export function kprimesStep(k: number, step: number, start: number, nd: number): number[][] {
  const kPrimes: number[] = [];
  const ans: [number, number][] = [];
  for (let i = start; i <= nd; i++) {
    let n = i;
    let prime = 2;
    let div = 0;
    while (n >= prime ** 2 ) {
      while (n % prime === 0) {        
        n /= prime;
        div++;
      }
      prime += prime % 2 + 1;
    }
    if (n > 1) {
      div++;
    }
    if (div === k) {
      kPrimes.push(i);
    }
  }
  return kPrimes.filter((e) => kPrimes.includes(e + step)).map((e) => [e, e + step]);
} // kprimesStep()

console.log(kprimesStep(2, 2, 0, 50));
console.log(kprimesStep(6, 8, 2627371, 2627581));
console.log(kprimesStep(5, 9, 220574, 220852));
console.log(kprimesStep(4, 10, 240807, 241079));
