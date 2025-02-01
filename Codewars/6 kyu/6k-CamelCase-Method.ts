export function camelCase(str: string): string {
  return str.split(" ").map((word) => word.toLowerCase().replace(/^./, (char) => char.toUpperCase())).join("");
} // camelCase()

console.log(camelCase("hello case"));
console.log(camelCase("camel case word"));
