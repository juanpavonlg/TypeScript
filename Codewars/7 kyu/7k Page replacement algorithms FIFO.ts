export function fifo(n: number, referenceList: number[]): number[] {
  const table: number[] = new Array(n).fill(-1);
  let oldest = 0;
  for (const page of referenceList) {
    if (!table.includes(page)) {
      table[oldest++ % n] = page;
    }
  }
  return table;
} // fifo()

console.log(fifo(3, [1, 2, 3, 4, 2, 5]));
