export function smash(words: string[]): string {
  return words.join(' ');
};

console.log(smash(["this", "is", "a", "really", "long", "sentence"]));
