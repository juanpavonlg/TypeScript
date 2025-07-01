export function vowelBack(s: string): string {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  let ans = "";
  [...s].forEach((c) => {
    let ch = "";
    if (/[aeiou]/.test(c)) {
      if (c === "o") {
        ch = alpha[(alpha.indexOf(c) + 25) % 26];
      } else if (c === "e") {
        ch = alpha[(alpha.indexOf(c) + 22) % 26];
      } else {
        ch = alpha[(alpha.indexOf(c) + 21) % 26];
      }
    } else {
      if (c === "c") {
        ch = alpha[(alpha.indexOf(c) + 25) % 26];
      } else if (c === "d") {
        ch = alpha[(alpha.indexOf(c) + 23) % 26];
      } else {
        ch = alpha[(alpha.indexOf(c) + 9) % 26];
      }
    }
    if (/[code]/.test(ch)) {
      ans += c;
    } else {
      ans += ch;
    }
  });
  return ans;
} // vowelBack()

console.log(vowelBack("testcase"));
console.log(vowelBack("codewars"));
console.log(vowelBack("exampletesthere"));
console.log(vowelBack("returnofthespacecamel"));
console.log(vowelBack("bringonthebootcamp"));
console.log(vowelBack("weneedanofficedog"));
