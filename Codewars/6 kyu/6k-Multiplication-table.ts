export function multiplicationTable(size: number): number[][] {
  const table: number[][] = new Array(size);
  for (let i = 0; i < size; i++) {
    table[i] = new Array(size);
  }
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      table[i - 1][j - 1] = i * j;
    }
  }
  return table;
} // multiplicationTable()

console.log(multiplicationTable(1));
console.log(multiplicationTable(4));
