export function number(array: string[]): string[]{
  return array.map((line, i) => `${i + 1}: ${line}`);
} // number()

console.log(number(["a", "b", "c"]));
