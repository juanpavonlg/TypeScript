export function getHUD(screenSize: number[], position: number[], sha: number[]): string[] {
  const hud = Array.from({length: screenSize[1]}, () => Array(screenSize[0]).fill(" "));
  const put = (x: number, y: number, ch: string) => {
    if (hud[y] && hud[y][x]) {
      hud[y][x] = ch;
    }
  }
  for (let x = position[0] - 2; x <= position[0] + 2; x++) {
    put(x, position[1], "-");
  }
  for (let y = position[1] - 1; y <= position[1] + 1; y++) {
    put(position[0], y, "|");
  }
  const xMid = Math.ceil(hud[0].length / 2) - 1;
  const yMid = Math.ceil(hud.length / 2) - 1;
  hud[0][xMid] = sha[1];
  hud[yMid][0] = sha[0];
  hud[yMid][screenSize[0] - 1] = sha[2];
  return hud.map((row) => row.join(""));
} // getHUD()

console.log(getHUD([5, 3], [2, 1], [5, 6, 7]));
console.log(getHUD([4, 3], [2, 1], [5, 6, 7]));
console.log(getHUD([5, 5], [2, 2], [5, 6, 7]));
console.log(getHUD([5, 3], [5, 2], [5, 6, 7]));
console.log(getHUD([10, 10], [0, 0], [2, 6, 2]));
