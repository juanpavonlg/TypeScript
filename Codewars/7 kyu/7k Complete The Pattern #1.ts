export function pattern(n: number): string {
  if (n < 1) {
    return "";
  }
  let output = "1";
  for (let i = 2; i <= n; i++) {
    output += "\n" + `${i}`.repeat(i);
  }
  return output;
} // pattern()

console.log(pattern(1));
console.log(pattern(2));
console.log(pattern(5));
console.log(pattern(-1));
