export function duplicateCount(text: string): number {
  const length = text.length;
  if (length === 0) {
    return 0;
  }
  text = text.replace(RegExp(text[0], "gi"), "");
  return length - text.length > 1 ? duplicateCount(text) + 1 : duplicateCount(text);
  // return new Set(text.toLowerCase().match(/(\w)(?=.*\1)/gi)).size;
} // duplicateCount()

console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("indivisibility"));
console.log(duplicateCount("Indivisibilities"));
console.log(duplicateCount("aA11"));
console.log(duplicateCount("ABBA"));
