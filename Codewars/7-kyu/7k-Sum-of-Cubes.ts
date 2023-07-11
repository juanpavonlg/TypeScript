export function sumCubes(n: number): number {
  let sum = 1;
  for (let i = 2; i <= n; i++) {
    sum += i ** 3;
  }
  return sum;
} // sumCubes()

console.log(sumCubes(3));
