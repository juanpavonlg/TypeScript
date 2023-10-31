export function sameCase(a: string, b: string): number {
  const nl = RegExp("[^a-z]", "i")
  const uc = RegExp("[A-Z]");
  return nl.test(a) || nl.test(b) ? -1 : +(uc.test(a) === uc.test(b));
} // sameCase()

console.log(sameCase("A", "B"));
console.log(sameCase("A", "b"));
console.log(sameCase("@", "b"));
