export function pyramid(n: number): Array<Array<Number>> {
  return Array.from({length: n}, (_, i) => new Array(i + 1).fill(1));
} // pyramid()

console.log(pyramid(0));
console.log(pyramid(1));
console.log(pyramid(2));
console.log(pyramid(3));
