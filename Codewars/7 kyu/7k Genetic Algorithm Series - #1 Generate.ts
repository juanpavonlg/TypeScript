export function generate(length: number): string {
  return length > 0 ? Math.floor(2 ** length * Math.random()).toString(2).padStart(length, "0") : "";
} // generate()

console.log(generate(4));
console.log(generate(0));
