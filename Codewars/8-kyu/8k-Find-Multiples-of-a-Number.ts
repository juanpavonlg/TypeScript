export function findMultiples(integer: number, limit: number): number[] {
  const multiples: number[] = [];
  limit -= limit % integer;
  for (let m = integer; m <= limit; m += integer) {
    multiples.push(m);
  }
  return multiples;
} // findMultiples()

console.log(findMultiples(2, 6));
