function isNumber(s: string): boolean {
  return /^[+-]?\.?\d+(.\d+)?([Ee][+-]?\d+)?/.test(s);
} // isNumber()

console.log(isNumber("0"));
console.log(isNumber("e"));
console.log(isNumber("."));
console.log(isNumber("0e"));
