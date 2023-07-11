export function dative(word: string): string | undefined {
  return word + (/[aáoóuú]/.test(word) ? "nak" : "nek");
} // dative()

console.log(dative("ablak"));
