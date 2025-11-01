export function tapCodeTranslation(text: string): string {
  const ans: string[] = [];
  const dict: { [key: string]: number } = {
    A: 11,
    B: 12,
    C: 13,
    D: 14,
    E: 15,
    F: 21,
    G: 22,
    H: 23,
    I: 24,
    J: 25,
    K: 13,
    L: 31,
    M: 32,
    N: 33,
    O: 34,
    P: 35,
    Q: 41,
    R: 42,
    S: 43,
    T: 44,
    U: 45,
    V: 51,
    W: 52,
    X: 53,
    Y: 54,
    Z: 55,
  };
  for (const ch of text) {
    const code = dict[ch.toUpperCase()];
    ans.push(`${".".repeat((code / 10) | 0)} ${".".repeat(code % 10)}`);
  }
  return ans.join(" ");
} // tapCodeTranslation()

console.log(tapCodeTranslation("dot"));
console.log(tapCodeTranslation("example"));
console.log(tapCodeTranslation("more"));
