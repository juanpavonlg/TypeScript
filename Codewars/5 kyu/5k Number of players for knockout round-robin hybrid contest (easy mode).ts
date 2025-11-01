export function solve(n: number): number[] {
  const ans: number[] = [];
  for (let games = 0, i = 1; games <= n; games += 2 * i + 1, i += 2) {
    let players = (n - games) / i;
    if (players % 1 === 0 && (players++ & players) === 0) {
      ans.push(players * i);
    }
  }
  return ans.sort((a, b) => a - b);
} // solve()

console.log(solve(3));
console.log(solve(12));
console.log(solve(7));
