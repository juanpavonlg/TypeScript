export function rot90Clock(strng: string): string {
  return diag1Sym(strng)
    .split("\n")
    .map((e) => e.split("").reverse().join(""))
    .join("\n");
} // rot90Clock()

export function diag1Sym(strng: string): string {
  const str = strng.split("\n");
  return str.map((e, i) => e.split("").map((_, j) => str[j][i]).join("")).join("\n");
} // diag1Sym()

export function selfieAndDiag1(strng: string): string {
  const diag1 = diag1Sym(strng).split("\n");
  return strng.split("\n").map((e, i) => `${e}|${diag1[i]}`).join("\n");
} // selfieAndDiag1()

export function oper(fct: (s: string) => string, s: string): string {
  return fct(s);
} // oper()

console.log(oper(rot90Clock, "abcd\nefgh\nijkl\nmnop"));
console.log(oper(diag1Sym, "abcd\nefgh\nijkl\nmnop"));
console.log(oper(selfieAndDiag1, "abcd\nefgh\nijkl\nmnop"));
console.log(oper(rot90Clock, "sator\narepo\ntenet\nopera\nrotas"));
console.log(oper(diag1Sym, "sator\narepo\ntenet\nopera\nrotas"));
console.log(oper(selfieAndDiag1, "sator\narepo\ntenet\nopera\nrotas"));
