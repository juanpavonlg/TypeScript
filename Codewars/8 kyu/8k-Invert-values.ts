export function invert(array: number[]): number[] {
  return array.map((e) => -e);
} // invert()

console.log(invert([1, -2, 3, -4, 5]));
