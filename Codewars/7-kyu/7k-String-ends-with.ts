export function solution(str: string, ending: string): boolean {
  return str.endsWith(ending);
} // solution()

console.log(solution('abcde', 'cde'));
