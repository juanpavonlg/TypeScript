export function equalize(array: number[]): string[] {
  return array.map((e) => {
    const diff = e - array[0];
    return (diff >= 0 ? "+" : "") + diff;
  });
} // equalize()

console.log(equalize([10, 20, 25, 0]));
