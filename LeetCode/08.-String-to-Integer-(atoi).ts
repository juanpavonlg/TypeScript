function myAtoi(s: string): number {
  let sign = 0;
  let digs = 0;
  for (const ch of s) {
    if (digs) {
      if (/\d/.test(ch)) {
        digs = 10 * digs + +ch;
      } else {
        break;
      }
    } else {
      if (sign === 0 && /[ +-]/.test(ch)) {
        sign = ch === "+" ? 1 : ch === "-" ? -1 : 0;
      } else if (/\d/.test(ch)) {
        digs = +ch;
        sign = sign | 1;
      } else {
        break;
      }
    }
  }
  const int = sign * digs;
  return int < -2_147_483_648 ? -2_147_483_648 : int > 2_147_483_647 ? 2_147_483_647 : int;
} // myAtoi()

console.log(myAtoi("42"));
console.log(myAtoi("   -42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("+-12"));
console.log(myAtoi("00000-42a1234"));
