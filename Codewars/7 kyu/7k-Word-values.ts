export function wordValue(arr: string[]) {
  return arr.map((s, i) => (i + 1) * s.split("").reduce((acc, ch) => acc += ch.charCodeAt(0) !== 32 ? ch.charCodeAt(0) - 96 : 0, 0));
} // wordValue()

console.log(wordValue(["abc","abc abc"]));
