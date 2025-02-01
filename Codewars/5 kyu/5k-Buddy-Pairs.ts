export function buddy(start: number, limit: number): number[] {
  for (let i = start; i <= limit; i++) {
    const sum = sumDivisors(i) - 1;
    if (i === sumDivisors(sum) - 1 && i < sum) {
      return [i, sum];
    }
  }
  return [];
} // buddy()

function sumDivisors(n: number): number {
  const divs = [1];
  for (let d = 2; d <= Math.sqrt(n); d++) {
    if (n % d === 0) {
      divs.push(d, n / d);
    }
  }
  return [...new Set(divs)].reduce((a, e) => a + e);
} // getDivisors()

console.log(buddy(48, 50));
console.log(buddy(1071625, 1103735));
console.log(buddy(2177, 4357));
