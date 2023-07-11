export function vertMirror(strng: string): string {
  return strng.split("\n").map(s => s.split("").reverse().join("")).join("\n");
} // vertMirror()

export function horMirror(strng: string): string {
  return strng.split("\n").reverse().join("\n");
} // horMirror()

export function oper(fct: (s: string) => string, s: string) {
  return fct(s);
} // oper()

console.log(oper(horMirror, "abcd\nefgh\nijkl\nmnop"));
console.log();
console.log(oper(vertMirror, "abcd\nefgh\nijkl\nmnop"));
