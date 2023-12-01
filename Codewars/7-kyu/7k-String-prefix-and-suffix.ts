export function solve(s: string): number {
  for (let i = Math.floor(s.length / 2); i > 0; i--) {
    if (s.slice(0, i) === s.slice(-i)) {      
      return i;
    }
  }  
  return 0;
  return s.match(/^(.*).*\1$/)![1].length;
} // solve()

console.log(solve("abcabc"));
console.log(solve("abcdabc"));
console.log(solve("abcddabc"));
console.log(solve("abcd"));
