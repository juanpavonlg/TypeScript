export function divisors(integer: number): number[] | string {
  const divisors: number[] = [];
  for (let d = 2; d <= integer / 2; d++) {
    if (integer % d === 0) {
      divisors.push(d);
    }
  }
  return divisors.length ? divisors : `${integer} is prime`;
} // divisors()

console.log(divisors(12));
console.log(divisors(25));
console.log(divisors(13));
