export function replaceDots(str: string): string {
  return str.replace(/\./g, "-");
} // replaceDots()

console.log(replaceDots(""));
console.log(replaceDots("no dots"));
console.log(replaceDots("one.two.three"));
console.log(replaceDots("..."));
