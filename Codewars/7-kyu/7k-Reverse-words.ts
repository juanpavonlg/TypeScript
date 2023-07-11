export function reverseWords(str: string): string {
  return str.split(' ').map(word => word.split("").reverse().join("")).join(' ');
} // reverseWords()

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
