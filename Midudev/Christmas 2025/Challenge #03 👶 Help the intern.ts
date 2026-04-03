function drawGift(size: number, symbol: string): string {
  if (size < 2) {
    return "";
  }
  const box: string[] = [];
  for (let row = 1; row <= size; row++) {
    if (row === 1 || row === size) {
      box.push(symbol.repeat(size));
    } else {
      box.push(`${symbol}${" ".repeat(size - 2)}${symbol}`);
    }
  }
  return box.join("\n");
} // drawGift()

console.log(drawGift(4, "*"));
console.log(drawGift(3, "#"));
console.log(drawGift(2, "-"));
console.log(drawGift(1, "+"));
