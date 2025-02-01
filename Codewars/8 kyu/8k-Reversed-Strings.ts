export function solution(str: string): string {
  return [...str].reverse().join("");
} // solution()

console.log(solution("world"));
console.log(solution("word"));
