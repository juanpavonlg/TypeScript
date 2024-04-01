export function isIsogram(str: string): boolean {
  return new Set(str.toLowerCase()).size === str.length;
} // isIsogram()

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
