export function encode(s: string): string {
  let cipher = "";
  for (let i = 0; i < s.length; i++) {
    cipher += s[i % 2 ? s.length - Math.ceil(i / 2) : i / 2];
  }
  return cipher;
} // encode()

export function decode(s: string): string {
  let message: string[] = [];
  for (let i = 0; i < s.length; i++) {
    message[i % 2 ? s.length - Math.ceil(i / 2) : i / 2] = s[i];
  }
  return message.join("");
} // decode()

console.log(encode("codewars"));
console.log(decode("csordaew"));
console.log(encode("white"));
console.log(decode("wehti"));
