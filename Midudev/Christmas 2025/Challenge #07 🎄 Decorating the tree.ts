function drawTree(height: number, ornament: string, frequency: number): string {
  const tree: string[] = [];
  let spaces = (2 * height - 2) / 2;
  let count = 1;
  for (let i = 0; i < height; i++) {
    let row = " ".repeat(spaces);
    for (let j = 0; j < 2 * i + 1; j++) {
      row += count % frequency === 0 ? ornament : "*";
      count++;
    }
    tree.push(row);
    spaces--;
  }
  tree.push(`${" ".repeat((2 * height - 2) / 2)}#`);
  return tree.join("\n");
} // drawTree()

console.log(drawTree(5, "o", 2));
console.log(drawTree(3, "@", 3));
console.log(drawTree(4, "+", 1));
