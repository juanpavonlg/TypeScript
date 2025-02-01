export function generateShape(int: number): string {
  return (new Array(int).fill("")).map(e => e = "+".repeat(int)).join("\n");
} // generateShape()

console.log(generateShape(4));
