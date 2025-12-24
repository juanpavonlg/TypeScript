type Data = Array<Record<string, string | number>>;
type SortBy = string;

function drawTable(data: Data, sortBy: SortBy): string {
  const makeSeparator = (widths: number[]): string => {
    let separator = "+";
    for (const width of widths) {
      separator += `${"-".repeat(width + 2)}+`;
    }
    return separator;
  }; // makeSeparator()

  const table: string[] = [];
  const cols = Object.keys(data[0]);
  let widths: { [col: string]: number } = {};
  for (const col of cols) {
    widths[col] = 0;
    for (const d of data) {
      widths[col] = Math.max(d[col].toString().length, widths[col]);
    }
  }
  const w = Object.values(widths);
  table.push(makeSeparator(w));
  let headers = "|";
  for (let col = 0; col < w.length; col++) {
    headers += ` ${String.fromCharCode(65 + col).padEnd(w[col], " ")} |`;
  }
  table.push(headers);
  table.push(makeSeparator(w));
  data.sort((a, b) => {
    if (typeof a[sortBy] === "string" && typeof b[sortBy] === "string") {
      return a[sortBy].localeCompare(b[sortBy]);
    } else if (typeof a[sortBy] === "number" && typeof b[sortBy] === "number") {
      return a[sortBy] - b[sortBy];
    }
    return 0;
  });
  for (const d of data) {
    let row = "|";
    for (const col of cols) {
      row += ` ${d[col].toString().padEnd(widths[col], " ")} |`;
    }
    table.push(row);
  }
  table.push(makeSeparator(w));
  return table.join("\n");
} // drawTable()

console.log(
  drawTable(
    [
      { name: "Charlie", city: "New York" },
      { name: "Alice", city: "London" },
      { name: "Bob", city: "Paris" },
    ],
    "name"
  )
);
console.log(
  drawTable(
    [
      { gift: "Book", quantity: 5 },
      { gift: "Music CD", quantity: 1 },
      { gift: "Doll", quantity: 10 },
    ],
    "quantity"
  )
);
