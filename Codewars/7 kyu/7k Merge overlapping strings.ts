export const mergeStrings = (first: string, second: string): string => {
  let i = 0;
  for (; i < first.length; i++) {
    if (second.startsWith(first.slice(i))) {
        break;
    }
  }
  return first.slice(0, i) + second;
} // mergeStrings()

console.log(mergeStrings("abcde", "cdefgh"));
console.log(mergeStrings("abaab", "aabab"));
console.log(mergeStrings("abc", "def"));
console.log(mergeStrings("abc", "abc"));
console.log(mergeStrings("abcd", "dabcd"));
