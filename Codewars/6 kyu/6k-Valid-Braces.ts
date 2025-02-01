export function validBraces(braces: string): boolean {
  const oposite: {[key: string]: string} = { ")": "(", "]": "[", "}": "{" };
  const stack: string[] = [];
  for (const brace of braces) {
    if (brace in oposite) {
      if (stack.pop() !== oposite[brace]) {
        return false;
      }
    } else {
      stack.push(brace);
    }
  }
  return stack.length === 0;
} // validBraces()

console.log(validBraces("(){}[]"));
console.log(validBraces("([{}])"));
console.log(validBraces("(}"));
console.log(validBraces("[(])"));
console.log(validBraces("[({})](]"));
