export function mirror(text: string): string {
  const words = text.split(" ").map((e) => e.split("").reverse().join(""));
  const len = words.reduce((a, e) => Math.max(a, e.length), 0);
  const hor = ["*".repeat(len + 4)]; 
  return `${hor}\n${words.map((e) => `* ${e.padEnd(len, " ")} *`).join("\n")}\n${hor}`;
} // mirror()

console.log(mirror("Hello World"));
