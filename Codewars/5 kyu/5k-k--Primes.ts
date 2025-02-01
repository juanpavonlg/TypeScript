export const countKprimes = (k: number, start: number, nd: number): number[]  => {
  const kPrimes: number[] = [];
  for (let i = start; i <= nd; i++) {
    if (isKPrime(i, k)) {
      kPrimes.push(i);
    }
  }
  return kPrimes;
} // countKprimes()

export const puzzle = (s: number): number => {
  let count = 0;
  let num = s;
  while (num) {    
    if (isKPrime(num, 7)) {
      let rem = s - num;
      while (rem) {
        if (isKPrime(rem, 3) && isKPrime(s - num - rem, 1)) {
          count++;
        }
        rem--;
      }
    }
    num--;
  }
  return count;
} // puzzle()

const isKPrime = (num: number, k: number): boolean => {
  let prime = 2;
  let count = 0;
  while (prime * prime <= num) {   
    while (num % prime === 0) {
      num /= prime;
      count++;
    }
    prime ++;
  }
  if (num > 1) {
    count++;
  }
  return count === k;
} // isKPrime()

console.log(countKprimes(2, 0, 100));
console.log(countKprimes(7, 6687341, 6687693));
console.log(countKprimes(7, 3867611, 3868036));
console.log(puzzle(138));
console.log(puzzle(143));
console.log(puzzle(1000));
