export const primeFactors = (n: number): string => {
  let prime = 2;
  let result = "";
  while (n !== 1) {
    let power = 0;
    while (n % prime === 0) {
      n /= prime;
      power++;
    }
    if (power) {
      result += `(${prime}${power > 1 ? `**${power})` : ")"}`;
    }
    prime++;
  }
  return result;
} // primeFactors()

console.log(primeFactors(20));
console.log(primeFactors(86240));
console.log(primeFactors(63778677));
