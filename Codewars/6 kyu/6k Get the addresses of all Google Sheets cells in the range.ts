export function getCellAddresses(range: string): string[] {
  const cs = range.match(/^[A-Z]/)![0].charCodeAt(0);
  const rs = +range.match(/^[A-Z](\d+)/)![1];
  const ce = range.match(/:([A-Z])/)![1].charCodeAt(0);
  const re = +range.match(/:[A-Z](\d+)/)![1];
  if (cs > ce || (cs === ce && rs === re)) {
    return [];
  }
  const cells: string[] = [];
  for (let r = rs; r <= re; r++) {
    for (let c = cs; c <= ce; c++) {
      cells.push(`${String.fromCharCode(c)}${r}`);
    }
  }
  return cells;
} // getCellAddresses()

console.log(getCellAddresses("H7:F3"));
console.log(getCellAddresses("C2:C2"));
console.log(getCellAddresses("B1:H5"));
console.log(getCellAddresses("A2:B3"));
console.log(getCellAddresses("A1:A5"));
console.log(getCellAddresses("X8:Z20"));
console.log(getCellAddresses("E345:J346"));
