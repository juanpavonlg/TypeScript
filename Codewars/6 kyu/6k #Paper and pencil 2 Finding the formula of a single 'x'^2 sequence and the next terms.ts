export function quadraticFormula(y1: number, y2: number, y3: number): [string, number, number] {
  const b = y2 - y1 - 3;
  const c = y1 - 1 - b;
  let formula = "x^2";
  if (b) {
    formula += `${b > 0 ? "+" + (b !== 1 ? b : "") : b !== -1 ? b : "-"}x`;
  }
  if (c) {
    formula += `${c > 0 ? "+" + c : c}`;
  }
  const y4 = 4 ** 2 + b * 4 + c;
  const y5 = 5 ** 2 + b * 5 + c;
  return [formula, y4, y5];
} // quadraticFormula()

console.log(quadraticFormula(4, 9, 16));
console.log(quadraticFormula(1, 4, 9));
console.log(quadraticFormula(0, 2, 6));
