function autonomousDrive(store: string[], movements: string[]) {
  const [M, N] = [store.length, store[0].length];
  const directions: { [key: string]: [number, number] } = {
    R: [0, 1],
    L: [0, -1],
    U: [-1, 0],
    D: [1, 0],
  };
  let row = store.findIndex((e) => e.includes("!"));
  let col = store[row].indexOf("!");
  let temp = store[row].split("");
  temp[col] = ".";
  store[row] = temp.join("");
  for (const move of movements) {
    const [dr, dc] = directions[move];
    const [nr, nc] = [row + dr, col + dc];
    if (nr >= 0 && nc >= 0 && nr < M && nc < N && store[nr][nc] !== "*") {
      [row, col] = [nr, nc];
    }
  }
  temp = store[row].split("");
  temp[col] = "!";
  store[row] = temp.join("");
  return store;
} // autonomousDrive()

const store = ["..!....", "...*.*."];
const movements = ["R", "R", "D", "L"];
const result = autonomousDrive(store, movements);
console.log(result);
console.log(autonomousDrive(["***", ".!.", "***"], ["D", "U", "R", "R", "R"]));
