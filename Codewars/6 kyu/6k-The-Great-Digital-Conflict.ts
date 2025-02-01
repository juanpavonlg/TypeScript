// return the winner's army as string, 'Draw' or 'Peace'
export function battleCodes(armyLetters: string, armyNumbers: string): string {
  if (!armyLetters || !armyNumbers) {
    return "Peace";
  }
  while (armyLetters && armyNumbers) {
    const powL = armyLetters.slice(-1).charCodeAt(0) - 96;
    const powN = +armyNumbers[0];
    armyLetters = `${armyLetters.slice(0, -2)}${armyLetters.slice(-2).split("").map((l) => l.charCodeAt(0) - powN > 96 ? String.fromCharCode(l.charCodeAt(0) - powN) : "").join("")}`;
    armyNumbers = `${+armyNumbers[0] - powL > 0 ? +armyNumbers[0] - powL : ""}${armyNumbers.slice(1)}`;
  }
  return armyLetters ? armyLetters : armyNumbers ? armyNumbers : "Draw";
} // battleCodes()

console.log(battleCodes("abc", "12"));
console.log(battleCodes("ah", "8"));
