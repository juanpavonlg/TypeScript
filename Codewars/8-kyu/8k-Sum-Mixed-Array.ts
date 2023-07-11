export function sumMix(x: any[]): number {
  return x.map(Number).reduce((a, b) => a + b);
} // sumMix()

console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));
