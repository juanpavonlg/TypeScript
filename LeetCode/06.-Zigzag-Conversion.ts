function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }
  const zigzag: string[][] = Array.from({ length: numRows }, () => Array());
  let down = true;
  let r = 0;
  let c = 0;
  for (const ch of s) {
    zigzag[r][c] = ch;
    if (r === numRows - 1) {
      down = false;
    }
    if (r === 0) {
      down = true;
    }
    down ? r++ : r--, c++;
  }
  return zigzag.map((e) => e.join("")).join("");
} // convert()

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
console.log(convert("A", 1));
console.log(convert("ABCD", 1));
