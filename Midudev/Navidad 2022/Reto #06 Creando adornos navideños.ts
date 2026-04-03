function createCube(size: number) {
  const upper: string[] = [];
  const lower: string[] = [];
  for (let i = 0; i < size; i++) {
    upper.push(
      `${" ".repeat(size - 1 - i)}${"/\\".repeat(i + 1)}${"_\\".repeat(size)}`,
    );
    lower.push(`${" ".repeat(i)}${"\\/".repeat(size - i)}${"_/".repeat(size)}`);
  }
  return [...upper, ...lower].join("\n");
} // createCube()

console.log(createCube(3));
console.log(createCube(1));
console.log(createCube(2));
