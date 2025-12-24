function escapePyramidHead(room: string[][]): number {
  const pyr = { row: 0, col: 0 };
  const you = { row: 0, col: 0 };
  for (let r = 0; r < room.length; r++) {
    const c = room[r].indexOf("▲");
    if (c >= 0) {
      [pyr.row, pyr.col] = [r, c];
      break;
    }
  }
  for (let r = 0; r < room.length; r++) {
    const c = room[r].indexOf("T");
    if (c >= 0) {
      [you.row, you.col] = [r, c];
      break;
    }
  }
  const dr = [-1, 0, 1, 0];
  const dc = [0, 1, 0, -1];
  let min = Number.MAX_VALUE;
  let steps = 0;

  function isValid(row: number, col: number): boolean {
    return row >= 0 && col >= 0 && row < room.length && col < room.length && room[row][col] !== "#";
  } // isValid()

  function backtrack(row: number, col: number) {
    if (row === you.row && col === you.col) {
      min = Math.min(steps, min);
      return;
    }
    room[row][col] = "#";
    for (let i = 0; i < dr.length; i++) {
      const newRow = row + dr[i];
      const newCol = col + dc[i];
      if (isValid(newRow, newCol)) {
        steps++;
        backtrack(newRow, newCol);
        steps--;
      }
    }
    room[row][col] = ".";
  } // backtrack()

  backtrack(pyr.row, pyr.col);
  return min < Number.MAX_VALUE ? min: -1;
} // escapePyramidHead()

const room = [
  [".", ".", "#", ".", "▲"],
  ["#", ".", "#", ".", "#"],
  [".", ".", ".", ".", "."],
  ["#", "#", "#", ".", "#"],
  ["T", ".", ".", ".", "."],
];
console.log(escapePyramidHead(room));
const room2 = [
  ["T", ".", "#", "."],
  [".", ".", ".", "."],
  ["▲", ".", ".", "#"],
  [".", "#", "#", "#"],
];
console.log(escapePyramidHead(room2));
const room3 = [
  ["#", "#", "#"],
  ["▲", ".", "#"],
  [".", "#", "T"],
];
console.log(escapePyramidHead(room3));
