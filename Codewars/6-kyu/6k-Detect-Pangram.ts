export const isPangram = (phrase: string): boolean => {
  return new Set(phrase.toLowerCase().match(/[a-z]/g)).size === 26;
}; // isPangram()

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
