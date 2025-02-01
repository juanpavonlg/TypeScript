type Move = "down" | "up" | "right" | "left";

export function streetFighterSelection(fighters: string[][], position: number[], moves: Move[]) {
  const hovered: string[] = [];
  let r = position[0];
  let c = position[1];
  for (const move of moves) {
    switch (move) {
      case "down":
        r = 1;
        break;
      case "up":
        r = 0;
        break;
      case "right":
        c = ++c % fighters[0].length;
        break;
      case "left":
        c = (fighters[0].length - 1 + c) % fighters[0].length;
        break;
    }
    hovered.push(fighters[r][c]);
  }
  return hovered;
} // streetFighterSelection()

let fighters: string[][] = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"],
];
let moves: Move[] = ['up', 'left', 'right', 'left', 'left'];
console.log(streetFighterSelection(fighters, [0,0], moves));
moves = ["down","down","down","down"];
console.log(streetFighterSelection(fighters, [0,0], moves));
