export function arrayLeaders(numbers: number[]): number[] {
  return numbers.filter((n, i) => n > numbers.slice(i + 1).reduce((a, b) => a + b, 0));
} // arrayLeaders()

console.log(arrayLeaders([1, 2, 3, 4, 0]));
