export function evaluate(equation: string): BigInt | null {
  const operands = equation.replace(/ /g, "").split("@").map(BigInt);
  if (operands.indexOf(0n) > 0) {
    return null;
  }
  return operands.reduce((a, e) => 2n * a + a * e + a / e);
} // evaluate()

console.log(evaluate("1 @ 1"));
console.log(evaluate("3 @ 2"));
console.log(evaluate("6 @ 9"));
console.log(evaluate("4 @ -4"));
console.log(evaluate("1 @ 1 @ -4"));
console.log(evaluate("2 @ 2 @ 2"));
console.log(evaluate("0 @ 1 @ 2"));
console.log(evaluate("5 @ 0"));
