export function greet(name: string): string {
  if (name === "Johnny") {
    return "Hello, my love!";
  }
  return "Hello, " + name + "!";
} // greet()

console.log(greet("Jim"));
console.log(greet("Jane"));
console.log(greet("Simon"));
console.log(greet("Johnny"));
