export function wordsToHex(words: string): string[] {
  const w = words.split(" ");  
  const ans: string[] = [];
  for (const word of w) {
    const r = word[0].charCodeAt(0).toString(16);
    const g = word[1] ? word[1].charCodeAt(0).toString(16) : "00";
    const b = word[2] ? word[2].charCodeAt(0).toString(16) : "00";
    ans.push(`#${r}${g}${b}`);
  }
  return ans;
} // wordsToHex()

console.log(wordsToHex("Hello, my name is Gary and I like cheese."));
console.log(wordsToHex("0123456789"));
