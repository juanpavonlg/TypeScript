export function duplicateEncode(word: string) {
  const letters = [...word.toLowerCase()];
  return letters.map((x) => letters.filter((y) => x === y).length > 1 ? ")" : "(").join("");
  return letters.map((e, _, a) => a.indexOf(e) === a.lastIndexOf(e) ? "(" : ")").join("");
} // duplicateEncode()

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));
