export function encode(text: string): string {
  let bits = "";
  [...text].forEach((ch) => {
    bits += ch
      .charCodeAt(0)
      .toString(2)
      .padStart(8, "0")
      .split("")
      .map((bit) => bit.repeat(3))
      .join("");
  });
  return bits;
} // encode()

export function decode(bits: string): string {
  let text = "";
  let byte = "";
  for (let i = 0; i < bits.length; i += 3) {
    const triple = bits.slice(i, i + 3);
    byte += [...triple].filter((bit) => +bit).length > 1 ? 1 : 0;
    if (byte.length === 8) {
      text += String.fromCharCode(parseInt(byte, 2));
      byte = "";
    }
  }
  return text;
} // decode()

console.log(encode("hey"));
console.log(
  decode(
    "100111111000111001000010000111111000000111001111000111110110111000010111"
  )
);
