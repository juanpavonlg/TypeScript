export function stringsConstruction(A: string, B: string): number {
  const a: number[] = new Array(26).fill(0);
  const b: number[] = new Array(26).fill(0);
  for (const ch of A) {
    a[ch.charCodeAt(0) - 97]++;
  }
  for (const ch of B) {
    if (A.includes(ch)) {
      b[ch.charCodeAt(0) - 97]++;
    }
  }
  let min = Infinity;
  for (let i = 0; i < a.length; i++) {
    if (a[i]) {
      min = Math.min((b[i] / a[i]) | 0, min);
    }
  }
  return min;
} // stringsConstruction()

console.log(stringsConstruction("abc", "abccba"));
console.log(
  stringsConstruction(
    "hnccv",
    "hncvohcjhdfnhonxddcocjncchnvohchnjohcvnhjdhihsn"
  )
);
