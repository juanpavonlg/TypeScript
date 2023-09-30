export function rot90Counter(strng: string): string {
  const str = strng.split("\n");
  return str.map((e, i) => e.split("").map((_, j) => str[j][e.length - 1 - i]).join("")).join("\n");
} // rot90Counter()

export function diag2Sym(strng: string): string {
  return rot90Counter(strng).split("\n").map((e) => e.split("").reverse().join("")).join("\n");
} // diag2Sym()

export function selfieDiag2Counterclock(strng: string): string {
  const rot90C = rot90Counter(strng).split("\n");
  const diag2 = diag2Sym(strng).split("\n");
  return strng.split("\n").map((e, i) => `${e}|${diag2[i]}|${rot90C[i]}`).join("\n");
} // selfieDiag2Counterclock()

export function oper(fct: (s: string) => string, s: string): string {
  return fct(s);
} // oper()

console.log(oper(rot90Counter, "abcd\nefgh\nijkl\nmnop"));
console.log(oper(diag2Sym, "abcd\nefgh\nijkl\nmnop"));
console.log(oper(selfieDiag2Counterclock, "abcd\nefgh\nijkl\nmnop"));
console.log(oper(rot90Counter, "sator\narepo\ntenet\nopera\nrotas"));
console.log(oper(diag2Sym, "sator\narepo\ntenet\nopera\nrotas"));
console.log(oper(selfieDiag2Counterclock, "sator\narepo\ntenet\nopera\nrotas"));
