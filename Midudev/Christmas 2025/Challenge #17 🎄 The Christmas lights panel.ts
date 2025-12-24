function hasFourLights(board: string[][]): boolean {
  const hasFour = (line: string[]): boolean => {
    return /G{4}|R{4}/.test(line.join(""));
  }; // hasFour()

  for (const row of board) {
    if (hasFour(row)) {
      return true;
    }
  }
  for (let col = 0; col < board[0].length; col++) {
    if (
      hasFour(Array.from({ length: board.length }, (_, i) => board[i][col]))
    ) {
      return true;
    }
  }
  return false;
} // hasFourLights()

console.log(
  hasFourLights([
    [".", ".", ".", ".", "."],
    [".", "R", "R", "R", "R"],
    ["G", "G", ".", ".", "."],
  ])
);
console.log(
  hasFourLights([
    [".", "G", ".", "."],
    [".", "G", ".", "."],
    [".", "G", ".", "."],
    [".", "G", ".", "."],
  ])
);
console.log(
  hasFourLights([
    ["R", "G", "R"],
    ["G", "R", "G"],
    ["G", "R", "G"],
  ])
);
