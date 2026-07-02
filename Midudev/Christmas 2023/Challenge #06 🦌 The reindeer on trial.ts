function maxDistance(movements: string) {
  const dirs: { [key: string]: number } = { "<": -1, ">": 1 };
  let [dist, ast] = [0, 0];
  for (const m of movements) {
    m === "*" ? ast++ : (dist += dirs[m]);
  }
  return Math.abs(dist) + ast;
} // maxDistance()

const movements = ">>*<";
const result = maxDistance(movements);
console.log(result);

const movements2 = "<<<>";
const result2 = maxDistance(movements2);
console.log(result2);

const movements3 = ">***>";
const result3 = maxDistance(movements3);
console.log(result3);
