export const reduce = (arr: number[]): number[] => {
  const factor = gcd(arr[0], arr[1]);
  return [arr[0] / factor, arr[1] / factor];
}; // reduce()

const gcd = (a: number, b: number): number => {
  return b !== 0 ? gcd(b, a % b) : a;
} // gcd()

console.log(reduce([45, 120]));
