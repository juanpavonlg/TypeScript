function intToRoman(num: number): string {
  const syms: {[key: number]: string} = { 1: "I", 5: "V", 10: "X", 50: "L", 100: "C", 500: "D", 1000: "M" };
  const exp = Math.floor(Math.log10(num) + 1) - 1;
  const w8 = 10 ** exp;
  if (num === 0) {
    return "";
  }
  if (num >= 9 * w8) {
    return syms[w8] + syms[10 * w8] + intToRoman(num - 9 * w8);
  }
  if (num >= 5 * w8) {
    return syms[10 * w8 / 2] + intToRoman(num - 5 * w8);
  }
  if (num >= 4 * w8) {
    return syms[w8] + syms[10 * w8 / 2] + intToRoman(num - 4 * w8);
  }
  return syms[w8] + intToRoman(num - w8);
} // intToRoman()

console.log(intToRoman(3));
console.log(intToRoman(58));
console.log(intToRoman(1994));
