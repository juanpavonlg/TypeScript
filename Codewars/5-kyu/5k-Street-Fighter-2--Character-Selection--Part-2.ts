export function superStreetFighterSelection(fighters: string[][], position: [number, number], moves: string[]): string[] {
  const hovered: string[] = [];
  let r = position[0];
  let c = position[1];
  for (const move of moves) {
    switch (move) {
      case "down":
        if (r !== fighters.length - 1 && fighters[r + 1][c] !== "") {
          r++;
        }
        break;
      case "up":
        if (r !== 0 && fighters[r - 1][c] !== "") {
          r--;
        }
        break;
      case "right":
        do {
          c = ++c % fighters[0].length;
        } while (!fighters[r][c]);
        break;
      case "left":
        do {
          c = (fighters[0].length - 1 + c) % fighters[0].length;
        } while (!fighters[r][c]);
        break;
    }
    hovered.push(fighters[r][c]);
  }
  return hovered;
} // superStreetFighterSelection()

let fighters = [
  ["", "Ryu", "E.Honda", "Blanka", "Guile", ""],
  ["Balrog", "Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat"],
  ["Vega", "T.Hawk", "Fei Long", "Deejay", "Cammy", "M.Bison"],
];
let moves = ["right", "right", "right", "right"];
console.log(superStreetFighterSelection(fighters, [0, 1], moves));
moves = ["left", "left", "left", "left"];
console.log(superStreetFighterSelection(fighters, [0, 1], moves));
moves = ["up", "up", "up", "up"];
console.log(superStreetFighterSelection(fighters, [2, 1], moves));
moves = ["down", "down", "down", "down"];
console.log(superStreetFighterSelection(fighters, [2, 1], moves));
