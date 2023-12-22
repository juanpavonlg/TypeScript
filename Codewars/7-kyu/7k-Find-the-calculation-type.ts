export function calcType(a: number, b: number, res: number): string {
  const operation: { [key: string]: number } = {
    addition: a + b,
    subtraction: a - b,
    multiplication: a * b,
    division: a / b,
  };
  for (const op in operation) {
    if (operation[op] === res) {
      return op;
    }
  }
  return "unknown";
} // calcType()

console.log(calcType(1, 2, 3));
