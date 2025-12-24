function findUniqueToy(toy: string): string {
  const freq: {[ch: string]: number} = {};
  for (const ch of toy.toLowerCase()) {
    freq[ch] = freq[ch] ? freq[ch] + 1 : 1;
  }
  for (const [ch, n] of Object.entries(freq)) {
    if (n === 1) {
      return toy[toy.search(new RegExp(ch, "i"))];
    }
  }
  return "";
} // findUniqueToy()

console.log(findUniqueToy("Gift"));
console.log(findUniqueToy("sS"));
console.log(findUniqueToy("reindeeR"));
console.log(findUniqueToy("AaBbCc"));
console.log(findUniqueToy("abcDEF"));
console.log(findUniqueToy("aAaAaAF"));
console.log(findUniqueToy("sTreSS"));
console.log(findUniqueToy("z"));
