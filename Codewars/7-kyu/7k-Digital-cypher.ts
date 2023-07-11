export function encode(str: string, n: number): number[] {
  const len = n.toString().length;
  n = parseInt(n.toString().split("").reverse().join(""));
  return str.split("").map((char, i) => char.charCodeAt(0) - 96 + ~~(n / 10 ** ((len + i) % len) % 10));
} // encode()

console.log(encode("scout", 1939));
console.log(encode("masterpiece", 1939));
 