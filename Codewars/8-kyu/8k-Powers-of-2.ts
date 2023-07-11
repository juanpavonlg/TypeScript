export function powersOfTwo(n: number): number[] {
  const powers: number[] = [];
  for (let p = 0; p <= n; p++) {
    powers.push(2 ** p);
  }
  return powers;
} // powersOfTwo()

console.log(powersOfTwo(4));
