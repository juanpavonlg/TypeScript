export const tour = (friends: string[], fTowns: string[][], distTable: (string|number)[]): number => {
  const dist: number[] = [];
  for (const friend of friends) {
    for (const town of fTowns) {
      if (town[0] === friend) {        
        dist.push(+distTable[distTable.indexOf(town[1]) + 1]);
        break;
      }
    }
  }
  let sum = dist[0];
  for (let i = 1; i < dist.length; i++) {
    sum += Math.sqrt(dist[i] ** 2 - dist[i - 1] ** 2);
  }  
  sum += dist[dist.length- 1];
  return ~~(sum);
}; // tour()

let friends1:   string[]          = ["A1", "A2", "A3", "A4", "A5"];
let fTowns1:    string[][]        = [["A1", "X1"], ["A2", "X2"], ["A3", "X3"], ["A4", "X4"]];
let distTable1: (string|number)[] = ["X1", 100.0, "X2", 200.0, "X3", 250.0, "X4", 300.0];
console.log(tour(friends1, fTowns1, distTable1));
friends1                          = ["A1", "A2", "A3", "A4", "A5"];
fTowns1                           = [["A1", "X1"], ["A2", "X2"], ["A3", "X3"], ["A4", "X4"], ["A5", "X5"]];
distTable1                        = ['X1', 100, 'X2', 200, 'X3', 250, 'X4', 300, 'X5', 320];
console.log(tour(friends1, fTowns1, distTable1));
