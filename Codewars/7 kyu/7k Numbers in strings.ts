export function solve(s: string): number {
  return Math.max(...(s.match(/\d+/g) ?? []).map(Number));
} // solve()

console.log(solve("gh12cdy695m1"));
