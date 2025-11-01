export function solution(start: number, finish: number) {
  const diff = finish - start;
  return ((diff % 3) + diff / 3) | 0;
} // solution()

console.log(solution(1, 5));
