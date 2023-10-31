export function escape(carpark: number[][]): string[] {
  let ans: string[] = [];
  let floor = -1;
  let start = -1;
  for (let i = 0; i < carpark.length; i++) {
    if (carpark[i].includes(2)) {
      floor = i;
      start = carpark[i].indexOf(2);
      break;
    }
  }
  let down = 0;
  for (let i = floor; i < carpark.length; i++) {
    const staircase = carpark[i].indexOf(1);
    const exit = staircase > -1 ? staircase : carpark[i].length - 1;
    const diff = Math.abs(exit - start);
    if (diff || i === carpark.length - 1) {
      if (down) {
        ans.push(`D${down}`);
        down = 0;
      } 
      if (diff) {
        ans.push(`${exit < start ? "L" : "R"}${diff}`);
      }
      down++;
    } else {
      down++;
    }
    start = exit;
  }
  return ans;
} // escape()

let carpark = [[1, 0, 0, 0, 2],
               [0, 0, 0, 0, 0]];
console.log(escape(carpark));
carpark = [[2, 0, 0, 1, 0],
           [0, 0, 0, 1, 0],
           [0, 0, 0, 0, 0]];
console.log(escape(carpark));
carpark = [[0, 2, 0, 0, 1],
           [0, 0, 0, 0, 1],
           [0, 0, 0, 0, 1],
           [0, 0, 0, 0, 0]];
console.log(escape(carpark));           
