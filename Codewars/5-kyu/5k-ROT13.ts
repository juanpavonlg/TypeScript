export function rot13(str: string): string {
  let ans = "";
  for (let ch of str) {
    if (/[a-z]/i.test(ch)) {
      const start = ch < "a" ? 65 : 97;
      ch = String.fromCharCode(start + (ch.charCodeAt(0) - start + 13) % 26);
    }
    ans += ch;
  }
  return ans;
  return str.replace(/[a-z]/gi, (ch) => String.fromCharCode(ch.charCodeAt(0) + (ch.toLowerCase() < "n" ? 13 : -13)));
} // rot13()

console.log(rot13("Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf."));
console.log(rot13("EBG13 rknzcyr."));
console.log(rot13("This is my first ROT13 excercise!"));
