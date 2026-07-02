function createChristmasTree(ornaments: string, height: number) {
  const levels: string[] = [];
  let orna = 0;
  for (let i = 0; i < height; i++) {
    const level = Array.from(
      { length: i + 1 },
      () => ornaments[orna++ % ornaments.length],
    );
    levels.push(`${level.join(" ").padStart(height + i)}`);
  }
  return `${levels.join("\n")}\n${"|".padStart(height)}\n`;
} // createChristmasTree()

console.log(createChristmasTree("123", 4));
console.log(createChristmasTree("*@o", 3));
