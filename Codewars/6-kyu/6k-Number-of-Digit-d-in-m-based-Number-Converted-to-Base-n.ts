export function countDigit (number: string, digit: string, base: number, fromBase: number): number {
  return toBaseN(toBase10(number, fromBase), base).split("").filter((e) => e === digit).length;
  // return parseInt(number, fromBase).toString(base).split("").filter((e) => e === digit).length
} // countDigit()

function toBase10(number: string, fromBase: number): number {
  let base10 = 0;
  for (const [exp, digit] of number.split("").reverse().entries()) {
    const code = digit.charCodeAt(0);
    base10 += (code < 97 ? +digit : code - 87) * fromBase ** exp;
  }
  return base10;
} // toBase10()

function toBaseN(base10: number, base: number): string {
  let baseN = "";
  do {
    const res = base10 % base;    
    baseN = (res > 9 ? String.fromCharCode(87 + res) : res.toString()) + baseN;
    base10 = Math.floor(base10 / base);    
  } while (base10 > 0);
  return baseN;
} // toBaseN()

console.log(countDigit('133', '3', 10, 10));
console.log(countDigit('10', 'a', 11, 10));
console.log(countDigit('1100101110101', 'd', 15, 2));
console.log(countDigit('0', '0', 5, 4));
console.log(countDigit('eb52e1771', '9', 21, 16));
