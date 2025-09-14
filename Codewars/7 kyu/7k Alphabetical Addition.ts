export function addLetters(...letters: string[]) {
  return String.fromCharCode(96 + (letters.reduce((a, b) => a + b.charCodeAt(0) - 96, 0) % 26 || 26));
} // addLetters()

console.log(addLetters("a", "b", "c"));
console.log(addLetters("a", "b"));
console.log(addLetters("z"));
console.log(addLetters("z", "a"));
console.log(addLetters("y", "c", "b"));
console.log(addLetters());
