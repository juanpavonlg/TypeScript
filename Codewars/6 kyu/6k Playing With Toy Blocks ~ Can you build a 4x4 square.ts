export function buildSquare(blocks: number[]): boolean {
  let rows = 0;
  while (blocks.includes(4)) {
    rows++;
    blocks.splice(blocks.indexOf(4), 1);
  }
  while (blocks.includes(3) && blocks.includes(1)) {
    rows++;
    blocks.splice(blocks.indexOf(3), 1);
    blocks.splice(blocks.indexOf(1), 1);
  }
  while (blocks.filter((e) => e === 2).length > 1) {
    rows++;
    blocks.splice(blocks.indexOf(2), 1);
    blocks.splice(blocks.indexOf(2), 1);
  }
  while (blocks.includes(2) && blocks.filter((e) => e === 1).length > 1) {
    rows++;
    blocks.splice(blocks.indexOf(2), 1);
    blocks.splice(blocks.indexOf(1), 1);
    blocks.splice(blocks.indexOf(1), 1);
  }
  while (blocks.filter((e) => e === 1).length > 3) {
    rows++;
    blocks.splice(blocks.indexOf(1), 1);
    blocks.splice(blocks.indexOf(1), 1);
    blocks.splice(blocks.indexOf(1), 1);
    blocks.splice(blocks.indexOf(1), 1);
  }
  return rows > 3;
} // buildSquare()

console.log(buildSquare([1, 3, 2, 2, 4, 1, 1, 3, 1, 4, 2]));
console.log(buildSquare([1, 3, 2, 4, 3, 3, 2]));
