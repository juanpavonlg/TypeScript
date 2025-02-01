export function pipeFix(numbers: number[]): number[] {
  return Array.from({ length: numbers[numbers.length - 1] - numbers[0] + 1 }, (_, i) => i + numbers[0]);
} // pipeFix()

console.log(pipeFix([6, 9]));
