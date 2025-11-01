export function setTable(theDead: string[]): string[] {
  const table = new Array(12).fill("_____");
  const names = ["QUTHCRDMZ", "WEVOXING", "JFABKPLY", "SSSSSSSSS"];
  for (const ghost of theDead.slice(0, 12)) {
    const corner = names.findIndex((e) => e.includes(ghost[0])) * 3;
    for (let d = 0; d <= table.length / 2; d++) {
      const l = (corner - d + table.length) % table.length;
      if (table[l] === "_____") {
        table[l] = ghost;
        break;
      }
      const r = (corner + d) % table.length;
      if (table[r] === "_____") {
        table[r] = ghost;
        break;
      }
    }
  }
  return table;
} // setTable()

console.log(
  setTable([
    "Yojne",
    "Xenna",
    "Verap",
    "Ebyam",
    "Teseb",
    "Ycuag",
    "Onets",
    "Skcaw",
    "Yrovi",
    "Tpets",
    "Lizuf",
    "Girnu",
  ])
);
