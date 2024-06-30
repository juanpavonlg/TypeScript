function isValid(s: string): boolean {
  const oposite: {[key: string]: string} = { "(": ")", "[": "]", "{": "}" };
  const stack: string[] = [];
  for (const ch of s) {
    if (ch in oposite) {
      stack.push(ch);
    } else if (oposite[stack[stack.length - 1]] === ch) {
      stack.pop()
    } else {
      return false;
    }
  }
  return stack.length === 0;
} // isValid()

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("["));
console.log(isValid("(("));
console.log(isValid(")("));
