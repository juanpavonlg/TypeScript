export function toBinary(n: number): number {
  let binary = 0;
  let weight = 1;
  while (n > 0) {
    binary += n % 2 * weight;
    weight *= 10;
    n = Math.floor(n / 2);
  }
  return binary;
  return +n.toString(2);
} // toBinary()

console.log(toBinary(11));
