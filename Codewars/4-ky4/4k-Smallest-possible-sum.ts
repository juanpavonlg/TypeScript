export function solution(numbers: number[]): number {
  let div = 0;
  for (const num of numbers) {
    div = gcd(num, div);
    if (div === 1) {
      break;
    }
  }
  return numbers.length * div;
} // solution()

function gcd(a: number, b: number): number {
  return b ? gcd(b, a % b) : a;
} // gcd()

console.log(solution([6, 9, 21]));
