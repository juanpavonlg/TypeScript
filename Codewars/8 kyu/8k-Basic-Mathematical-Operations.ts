export function basicOp(operation: string, value1: number, value2: number): number {
  const arithmetic: {[key: string]: number} =  {
    "+": value1 + value2,
    "-": value1 - value2,
    "*": value1 * value2,
    "/": value1 / value2,
  }
  return arithmetic[operation];
} // basicOp()

console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 15, 18));
console.log(basicOp("*", 5, 5));
console.log(basicOp("/", 49, 7));
