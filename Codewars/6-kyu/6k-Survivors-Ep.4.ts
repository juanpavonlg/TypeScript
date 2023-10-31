export function survivors(listOfMomentum: number[], listOfPowerups: number[][]): number[] {
  const ans: number[] = [];
  for (let i = 0; i < listOfMomentum.length; i++) {
    let momentum = listOfMomentum[i];
    for (let j = 0; j < listOfPowerups[i].length && momentum > 0; j++) {
      momentum--;
      momentum += listOfPowerups[i][j];      
    }
    if (momentum > 0) {
      ans.push(i);
    }
  }
  return ans;
} // survivors()

console.log(survivors([3, 2, 1, 0], [[1, 0, 0], [0, 2, 0, 0], [0, 9], [8, 8]]));
console.log(survivors([5], [[0, 0, 0, 0, 4, 0, 0, 0, 8, 0, 0, 0, 0]]));

