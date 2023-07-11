export function solve(s: string) {
  console.log(s.match(/[aeiou]+/gi));
  
  return s.match(/[aeiou]+/gi)?.reduce((max, v) => max = v.length > max ? v.length : max, 0);
} // solve()

console.log(solve("Codewarriors"));
