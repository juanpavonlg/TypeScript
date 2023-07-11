export function multipleOfIndex(array: number[]): number[] {
  return array.filter((x, i) => x % i === 0);
} // multipleOfIndex()

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));
