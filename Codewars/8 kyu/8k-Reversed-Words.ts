export function reverseWords(str: string): string {
  return str.split(" ").reverse().join(" ");
} // reverseWords()

console.log(reverseWords("The greatest victory is that which requires no battle"));
