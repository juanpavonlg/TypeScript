type Factory = string[];
type Result = "completed" | "broken" | "loop";

function runFactory(factory: Factory): Result {
  const [M, N] = [factory.length, factory[0].length];

  const isValid = (row: number, col: number): boolean => {
    return row >= 0 && col >= 0 && row < M && col < N;
  }; // isValid()

  const visited = new Set<number>();
  let [row, col] = [0, 0];
  while (factory[row][col] !== ".") {
    const cell = N * row + col;
    if (visited.has(cell)) {
      return "loop";
    } else {
      visited.add(cell);
    }
    switch (factory[row][col]) {
      case ">":
        col++;
        break;
      case "<":
        col--;
        break;
      case "^":
        row--;
        break;
      case "v":
        row++;
        break;
    }
    if (!isValid(row, col)) {
      return "broken";
    }
  }
  return "completed";
} // runFactory()

console.log(runFactory([">>."]));
console.log(runFactory([">>>"]));
console.log(runFactory([">><"]));
console.log(runFactory([">>v", "..<"]));
console.log(runFactory([">>v", "<<<"]));
console.log(runFactory([">v.", "^.."]));
console.log(runFactory(["v.", "^."]));
