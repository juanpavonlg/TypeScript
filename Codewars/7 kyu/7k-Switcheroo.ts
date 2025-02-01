export function switcheroo(x: string): string {
  return x.replace(/[ab]/g, (ch) => (ch === "a" ? "b" : ch === "b" ? "a" : ch));
} // switcheroo()

console.log(switcheroo("aaacbbb"));
