export function solve(s: string) {
  let caps = 0;
  for (const char of s) {
    caps += char.charCodeAt(0) < 97 ? 1 : -1;
  }
  return caps > 0 ? s.toUpperCase() : s.toLowerCase();  
} // solve()

console.log(solve("CODe"));
