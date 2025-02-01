export function solve(s: string) {
  return Math.max(
    ...s
      .split(/[aeiou]/)
      .map((str) =>
        str.split("").reduce((acc, ch) => acc + ch.charCodeAt(0) - 96, 0)
      )
  );
} // solve()

console.log(solve("strength"));
console.log(solve("weight"));
console.log(solve("zombie"));
