export function sortVowels(str?: number | string | null): string {
  return typeof str === "string" ? [...str].map((e) => /[aeiou]/i.test(e) ? `|${e}` : `${e}|`).join("\n") : "";
} // sortVowels()

console.log(sortVowels("CODEWARS"));
console.log(sortVowels("Rnd Te5T"));
