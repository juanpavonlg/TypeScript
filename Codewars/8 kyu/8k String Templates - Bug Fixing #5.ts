export function buildString(...template: string[]): string {
  return `I like ${template.join(", ")}!`;
} // buildString()

console.log(buildString("Cheese", "Milk", "Chocolate"));
console.log(buildString("Cheese", "Milk"));
console.log(buildString("Chocolate"));
