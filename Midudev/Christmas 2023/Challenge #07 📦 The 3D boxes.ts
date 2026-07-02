function drawGift(size: number, symbol: string) {
  if (size === 1) {
    return "#\n";
  }
  const rows: string[] = [];
  rows[0] = "#".repeat(size).padStart(2 * size - 1);
  rows[size - 1] = `${"#".repeat(size)}${symbol.repeat(size - 2)}#`;
  rows[2 * size - 2] = "#".repeat(size);
  for (let i = 1; i < size - 1; i++) {
    const row = `#${symbol.repeat(size - 2)}#${symbol.repeat(i - 1)}#`;
    rows[i] = row.padStart(2 * size - 1);
    rows[2 * size - 2 - i] = row;
  }
  return `${rows.join("\n")}\n`;
} // drawGift()

console.log(drawGift(4, "+"));
console.log(drawGift(5, "*"));
console.log(drawGift(1, "^"));
