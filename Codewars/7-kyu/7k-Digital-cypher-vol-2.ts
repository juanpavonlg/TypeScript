export function decode(code: number[], n: number): String {
  const digits: number[] = n.toString().split("").map(Number);
  return code.map((char, i) => String.fromCharCode(char  + 96 - digits[i % digits.length])).join("");
} // decode()

console.log(decode([ 20, 12, 18, 30, 21], 1939));
 