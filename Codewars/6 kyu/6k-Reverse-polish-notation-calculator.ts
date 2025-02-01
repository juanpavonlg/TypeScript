export function calc(expr: string): number {
  const tokens = expr.split(" ");
  const oper: { [key: string]: Function } = {
    "+": (a: number, b: number) => a + b,
    "-": (a: number, b: number) => a - b,
    "*": (a: number, b: number) => a * b,
    "/": (a: number, b: number) => a / b,
  };
  let i = tokens.length - 1;
  while (tokens.length > 1) {
    if (/[^\d]/.test(tokens[i]) && /\d+/.test(tokens[i - 1]) && /\d+/.test(tokens[i - 2])) {
      tokens.splice(i - 2, 3, oper[tokens[i]](+tokens[i - 2], +tokens[i - 1]).toString());
      i = tokens.length - 1;
    } else {
      i--;
    }
  }
  return +tokens[0];
  // const stack: number[] = [];
  // for (const token of tokens) {
  //   if (token in oper) {
  //     const [b, a] = [stack.pop(), stack.pop()];
  //     stack.push(oper[token](a, b));
  //   } else {
  //     stack.push(+token);
  //   }
  // }
  // return stack.pop()!;
} // calc()

console.log(calc("5 1 2 + 4 * + 3 -"));
