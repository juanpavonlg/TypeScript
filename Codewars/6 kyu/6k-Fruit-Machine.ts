export function fruit(reels: string[][], spins: number[]): number {
  const reel = ["Wild", "Star", "Bell", "Shell", "Seven", "Cherry", "Bar", "King", "Queen", "Jack"];
  const res = [reels[0][spins[0]], reels[1][spins[1]], reels[2][spins[2]]];
  if (res[0] === res[1] && res[0] === res[2]) {
    return (10 - reel.indexOf(res[0])) * 10;
  }
  let pair = "";
  let third = "";
  if (res[0] === res[1]) {
    pair = res[0];
    third = res[2];
  } else if (res[0] === res[2]) {
    pair = res[2];
    third = res[1];
  } else if (res[1] === res[2]) {
    pair = res[1];
    third = res[0];
  }
  return pair ? (10 - reel.indexOf(pair)) * (third !== "Wild" ? 1 : 2) : 0;
} // fruit()

const reel = ["Wild", "Star", "Bell", "Shell", "Seven", "Cherry", "Bar", "King", "Queen", "Jack"];
const spin = [1, 1, 0];
console.log(fruit([reel, reel, reel], spin));
