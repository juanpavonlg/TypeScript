type RuleFunction = (a: number, b: number) => number;

export function reduceByRules(numbers: number[], rules: RuleFunction[]): number {
  for (let i = 1; i < numbers.length; i++) {
    numbers[i] = rules[(i - 1) % rules.length](numbers[i - 1], numbers[i]);
  }
  return numbers.at(-1)!;
  return numbers.reduce((a, e, i) => rules[(i - 1) % rules.length](a, e));
} // reduceByRules()

console.log(
  reduceByRules([2.0, 2.0, 3.0, 4.0], [(a, b) => a + b, (a, b) => a - b])
);
