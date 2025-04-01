export function solve(s: string): string {
  s = s.replace(/\[backspace\]\*?(\d+)?/g, (_, n) => "#".repeat(+n || 1));
  const ans: string[] = [];
  for (const c of s) {
    if (c === "#") {
      ans.pop();
    } else {
      ans.push(c);
    }
  }
  return ans.join("");
} // solve()

console.log(solve("oopp[backspace]s"));
console.log(solve("ooppp[backspace][backspace]s"));
console.log(solve("a[backspace][backspace]ooppp[backspace][backspace]s"));
console.log(solve("a[backspace]*2oopppp[backspace]*2[backspace]s"));
console.log(solve("TT[backspace]*3Thn[backspace]is is is[backspace]*3 an edge case[backspace]*10 edge case[backspace]e"));
