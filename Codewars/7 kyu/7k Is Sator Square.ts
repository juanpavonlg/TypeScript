export function isSatorSquare(tablet: string[][]): boolean {
  const rings = Math.floor(tablet.length / 2);
  let ring = 0;
  while (ring < rings) {
    const last = tablet.length - 1 - ring;
    const lim = last - 1 * ring;
    for (let i = 0; i <= lim; i++) {
      if (
        (
          tablet[ring][ring + i] !== tablet[ring + i][ring] ||
          tablet[ring][ring + i] !== tablet[last][last - i] ||
          tablet[ring][ring + i] !== tablet[last - i][last]
        )
      ) {
        return false;
      }
    }
    ring++;
  }
  return true;
} // isSatorSquare()

console.log(
  isSatorSquare([
    ["B", "A", "T", "S"],
    ["A", "B", "U", "T"],
    ["T", "U", "B", "A"],
    ["S", "T", "A", "B"],
  ])
);
console.log(
  isSatorSquare([
    ["S", "A", "T", "O", "R"],
    ["A", "R", "E", "P", "O"],
    ["T", "E", "N", "E", "T"],
    ["O", "P", "E", "R", "A"],
    ["R", "O", "T", "A", "S"],
  ])
);
