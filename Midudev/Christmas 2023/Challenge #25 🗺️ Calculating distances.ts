function travelDistance(map: string) {
  const copy = map.split("\n");
  const children: { [key: string]: [number, number] } = {};
  const regex = /\d/g;
  let kms = 0;
  let prev: [number, number] = [-1, -1];
  let row = 0;
  for (const line of copy) {
    if (line.includes("S")) {
      prev = [row, line.indexOf("S")];
    }
    let match: RegExpExecArray | null;
    while ((match = regex.exec(line)) !== null) {
      children[match[0]] = [row, match.index!];
    }
    row++;
  }
  for (const child in children) {
    const [row, col] = children[child];
    kms += Math.abs(row - prev[0]) + Math.abs(col - prev[1]);
    prev = [row, col];
  }
  return kms;
} // travelDistance()

const map = `.....1....
..S.......
..........
....3.....
......2...`;
const result = travelDistance(map);
console.log(result);
const result2 = travelDistance(`..S.1...`);
console.log(result2);
