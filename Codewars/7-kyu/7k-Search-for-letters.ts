export function change(string: string): string {
  const res = [...Array(27)].join("0").split("");
  for (const ch of string) {
    const code = ch.toUpperCase().charCodeAt(0);
    if (code >= 65 && code <= 90) {
      res[code - 65] = "1";
    }
  }
  return res.join("");
} // change()

console.log(change("a **&  bZ"));
