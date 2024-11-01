export function averages(numbers: number[] | null): number[] {
  return numbers && numbers.length > 1 ? numbers.slice(1).map((e, i) => (e + numbers[i]) / 2) : [];
} // averages()

console.log(averages([1, 3, 5, 1, -10]));
