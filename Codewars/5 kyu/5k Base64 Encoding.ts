export function toBase64(str: string): string {
  const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let binary = [...str].map((e) => e.charCodeAt(0).toString(2).padStart(8, "0")).join("");
  binary += "0".repeat(6 - (binary.length % 6 || 6));
  let base64 = "";
  for (let i = 0; i < binary.length; i += 6) {
    base64 += charSet[parseInt(binary.slice(i, i + 6), 2)];
  }
  return base64;
} // toBase64()

export function fromBase64(str: string): string {
  const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  const binary = [...str].map((e) => charSet.indexOf(e).toString(2).padStart(6, "0")).join("");
  let ascii = "";
  for (let i = 0; i < binary.length; i += 8) {
    ascii += String.fromCharCode(parseInt(binary.slice(i, i + 8), 2));
  }
  return ascii;
} // fromBase64()

console.log(toBase64("this is a string!!"));
console.log(fromBase64("dGhpcyBpcyBhIHN0cmluZyEh"));
console.log(toBase64("Man"));
console.log(fromBase64("TWFu"));
