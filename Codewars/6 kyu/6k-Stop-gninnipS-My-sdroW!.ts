export function spinWords(words: string): string {
  return words.split(" ").map((e) => e.length > 4 ? e.split("").reverse().join("") : e).join(" ");
} // spinWords()

console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));
