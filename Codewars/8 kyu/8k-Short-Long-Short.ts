export function shortLongShort(a: string, b: string) {
  return a.length < b.length ? `${a}${b}${a}` : `${b}${a}${b}`;
} // shortLongShort()

console.log(shortLongShort("1", "22"));
console.log(shortLongShort("22", "1"));
