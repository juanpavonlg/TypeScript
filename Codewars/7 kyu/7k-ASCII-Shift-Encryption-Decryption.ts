export function asciiEncrypt(plaintext: string): string {
  return [...plaintext].map((e, i) => String.fromCharCode(e.charCodeAt(0) + i)).join("");
} // asciiEncrypt()

export function asciiDecrypt(ciphertext: string): string {
  return [...ciphertext].map((e, i) => String.fromCharCode(e.charCodeAt(0) - i)).join("");
} // asciiDecrypt()

console.log(asciiEncrypt("password"));
console.log(asciiDecrypt("pbuv{txk"));
