export function maxMultiple(divisor: number, bound: number): number {
  return bound - bound % divisor;
} // maxMultiple()

console.log(maxMultiple(37, 200));
