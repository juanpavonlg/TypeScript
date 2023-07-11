export function isPowerOfTwo(n: number): boolean {
  const power = Math.log2(n);
  return power - ~~(power) === 0;
} // isPowerOfTwo()

console.log(isPowerOfTwo(333));
console.log(isPowerOfTwo(1024));
