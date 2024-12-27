export function toCamelCase(str: string): string {
  return str.replace(/[-_]./g, (e) => e[1].toUpperCase());
} // toCamelCase()

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("The_Stealth-Warrior"));
