export function position(alphabet: string): string {
  return `Position of alphabet: ${alphabet.toUpperCase().charCodeAt(0) - 64}`;
} // position()

console.log(position("a"));
