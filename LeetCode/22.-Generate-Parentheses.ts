function generateParenthesis(n: number): string[] {
  const parenthesis: string[] = [];

  function getCombinations(open: number, close: number, sol: string) {
    console.log(open, close, sol);
    
    if (sol.length === 2 * n) {
      parenthesis.push(sol);
      return;
    }
    if (open < n) {
      getCombinations(open + 1, close, sol + "(");
      console.log("1.", open, close, sol);
    }
    if (close < open) {
      getCombinations(open, close + 1, sol + ")");
      console.log("2.", open, close, sol);
    }
  }

  getCombinations(0, 0, "");
  return parenthesis;
} // generateParenthesis()

// console.log(generateParenthesis(3));
console.log(generateParenthesis(1));
console.log(generateParenthesis(2));
