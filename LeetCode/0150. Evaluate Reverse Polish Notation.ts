function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  const operations: {[key: string]: (a: number, b: number) => number} = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b, 
    "*": (a, b) => a * b, 
    "/": (a, b) => Math.trunc(a / b) 
  };
  for (const token of tokens) {
    if (token in operations) {
      const [b, a] = [stack.pop()!, stack.pop()!];
      stack.push(operations[token](a, b));
    } else {
      stack.push(+token);
    }
  }
  return stack[0];
} // evalRPN()

console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["4", "13", "5", "/", "+"]));
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));
