export function freqSeq(str: string, sep: string): string {
  return str.split("").map((ch, i, arr) => arr.filter(e => e === ch).length).join(sep);
} // freqSeq()

console.log(freqSeq("hello world", "-"));
console.log(freqSeq("19999999", ":"));
console.log(freqSeq("^^^**$", "x"));
