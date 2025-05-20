function lengthOfLastWord(s: string): number {
  return s.trim().split(" ").at(-1)!.length;
  return s.match(/(\w+) *$/)![1].length;
} // lengthOfLastWord()

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
