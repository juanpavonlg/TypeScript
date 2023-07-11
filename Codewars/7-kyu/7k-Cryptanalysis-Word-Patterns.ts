export function wordPattern(word: string): string {
  const letters = word.toLowerCase().split("");
  const letterCode: {[i: string]: number} = {};
  let code = 0;
  for (const letter of new Set(letters)) {
      letterCode[letter] = code++;
  }
  return letters.map((letter) => letterCode[letter]).join(".");
} // wordPattern()

console.log(wordPattern("hello"));
console.log(wordPattern("Hippopotomonstrosesquippedaliophobia"));
