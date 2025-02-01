export function sortCsvColumns(csvFileContent: string): string {
  const lines = csvFileContent.split("\n");
  const mat = Array.from({length: lines.length}, (_, i) => lines[i].split(";"));
  const matT: string[][] = Array.from({length: mat[0].length}, () => Array(mat.length).fill(""));
  for (let j = 0; j < mat[0].length; j++) {
    for (let i = 0; i < mat.length; i++) {
      matT[j][i] = mat[i][j];
    }
  }
  matT.sort((a, b) => a[0].localeCompare(b[0]));
  for (let i = 0; i < matT.length; i++) {
    for (let j = 0; j < matT[0].length; j++) {
      mat[j][i] = matT[i][j];
      
    }
  }
  for (let i = 0; i < lines.length; i++) {
    lines[i] = mat[i].join(";");
  }
  return lines.join("\n");
} // sortCsvColumns()

console.log(
  sortCsvColumns(
    "myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n" +
      "17945;10091;10088;3907;10132\n" +
      "2;12;13;48;11"
  )
);
