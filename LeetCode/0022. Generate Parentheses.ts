function generateParenthesis(n: number): string[] {
  const parenthesis: string[] = [];
  const sol: string[] = [];

  function getCombinations(open: number, close: number) {
    if (sol.length === 2 * n) {
      parenthesis.push(sol.join(""));
      return;
    }
    if (open < n) {
      sol.push("(")
      getCombinations(open + 1, close);
      sol.pop()
    }
    if (close < open) {
      sol.push(")")
      getCombinations(open, close + 1);
      sol.pop()
    }
  } // getCombinations()

  getCombinations(0, 0);
  return parenthesis;
} // generateParenthesis()

console.log(generateParenthesis(3));
console.log(generateParenthesis(1));
console.log(generateParenthesis(2));
