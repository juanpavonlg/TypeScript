export function encrypt(text: string, key: number): string {
  return shift(text, key, 1);
} // encrypt()

export function decrypt(text: string, key: number): string {
  return shift(text, key, -1);
} // decrypt()

function shift(text: string, key: number, dir: number) {
  const [r1, r2, r3] = ["qwertyuiop", "asdfghjkl", "zxcvbnm,."];
  const [k1, k2, k3] = [(key / 100) | 0, ((key / 10) | 0) % 10, key % 10];
  let ans = "";
  for (let ch of text) {
    const caps = /[A-Z<>]/.test(ch);
    if (caps) {
      ch = ch === "<" ? "," : ch === ">" ? "." : ch.toLowerCase();
    }
    if (r1.includes(ch)) {
      ch = r1[(r1.indexOf(ch) + r1.length + dir * k1) % r1.length];
    } else if (r2.includes(ch)) {
      ch = r2[(r2.indexOf(ch) + r2.length + dir * k2) % r2.length];
    } else if (r3.includes(ch)) {
      ch = r3[(r3.indexOf(ch) + r3.length + dir * k3) % r3.length];
    }
    if (caps) {
      ch = ch === "," ? "<" : ch === "." ? ">" : ch.toUpperCase();
    }
    ans += ch;
  }
  return ans;
} // shift()

console.log(encrypt("Ball", 134));
console.log(decrypt(">fdd", 134));
console.log(encrypt("Wave", 0));
console.log(decrypt("Wave", 0));
