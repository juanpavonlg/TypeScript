export function removeDuplicateWords(s: string): string {
  return [...new Set(s.split(" "))].join(" ");
} // removeDuplicateWords()

console.log(removeDuplicateWords("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"));
