export function bitMarch(n: number): number[][] {
  const byte = Array.from({length: 8}, (_, i) => 7 - i < n ? 1 : 0);
  const march = [[...byte]];
  while (byte[0] !== 1) {
    byte.push(byte.shift() ?? 0);
    march.push([...byte]);
  }
  return march;
  // const march = [];
  // n = (1 << n) - 1;
  // while (n < 256) {
  //   march.push(n.toString(2).padStart(8, "0").split("").map((e) => +e));
  //   n <<= 1;
  // }
  // return march;
} // bitMarch()

console.log(bitMarch(3));
console.log(bitMarch(7));
