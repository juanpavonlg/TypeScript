export function rot(s: string): string {
  return s.split("").reverse().join("");
} // rot()

export function selfieAndRot(s: string): string {
  const dots = Array(s.split("\n")[0].length + 1).join(".");
  return `${s.split("\n").join(`${dots}\n`)}${dots}\n${dots}${rot(s).split("\n").join(`\n${dots}`)}`;
} // selfieAndRot()

export function oper(fn: (s: string) => string, s: string): string {
  return fn(s);
} // oper()

console.log(oper(rot, "abcd\nefgh\nijkl\nmnop"));
console.log(oper(selfieAndRot, "abcd\nefgh\nijkl\nmnop"));
console.log(oper(rot, "fijuoo\nCqYVct\nDrPmMJ\nerfpBA\nkWjFUG\nCVUfyL"));
console.log(oper(selfieAndRot, "fijuoo\nCqYVct\nDrPmMJ\nerfpBA\nkWjFUG\nCVUfyL"));
