function longestValidParentheses(s: string): number {
  const stack: number[] = [];
  const pairs: number[] = Array(s.length).fill(0);
  for (let j = 0; j < s.length; j++) {
    if (s[j] === ")") {
      const i = stack.pop();
      if (i !== undefined) {
        [pairs[i], pairs[j]] = [1, 1];
      }
    } else {
      stack.push(j);
    }
  }
  let max = 0;
  let sum = 0;
  for (const pair of pairs) {
    if (pair) {
      sum += pair;
      max = Math.max(sum, max);
    } else {
      sum = 0;
    }
  }
  return max;
} // longestValidParentheses()

console.log(longestValidParentheses("(()"));
console.log(longestValidParentheses(")()())"));
console.log(longestValidParentheses(""));
console.log(longestValidParentheses("()(()"));
