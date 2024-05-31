export function encodeCD(n: number): string {
  const inv: { [key: string]: string } = { P: "L", L: "P" };
  return  [...n.toString(2).padStart(8, "0")].reverse().reduce((a, e, i) => a + (+e ? inv[a[i]] : a[i]), "P");
} // encodeCD()

console.log(encodeCD(5));
