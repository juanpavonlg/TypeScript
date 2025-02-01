export function multiTable(number: number): string {
  const table: string[] = new Array(10).fill(""); 
  return table.map((str, i) => `${i + 1} * ${number} = ${(i + 1) * number}`).join("\n");
} // multiTable()

console.log(multiTable(5));
