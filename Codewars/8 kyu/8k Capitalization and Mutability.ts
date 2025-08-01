export function capitalizeWord(word: string): string {
  return word.replace(word[0], word[0].toUpperCase());
} // capitalizeWord()

console.log(capitalizeWord("hello"));
console.log(capitalizeWord("Hello"));
console.log(capitalizeWord("a"));
