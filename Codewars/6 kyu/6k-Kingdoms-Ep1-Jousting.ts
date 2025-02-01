export function joust(listField: string[], vKnightLeft: number, vKnightRight: number): string[] {
  if (!vKnightLeft && !vKnightRight) {
    return listField;
  }
  while (listField[0].indexOf(">") < listField[1].indexOf("<")) {
    listField[0] = listField[0].padStart(listField[0].length + vKnightLeft, " ").slice(0, listField[0].length);
    listField[1] = listField[1].padEnd(listField[1].length + vKnightRight, " ").slice(vKnightRight);
  }
  return listField;
} // joust()

console.log(joust(["$->    ", "    <-P"], 1, 1));
