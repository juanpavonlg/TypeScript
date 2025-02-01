type Position = {
  r: number;
  c: number;
};

export function mazeRunner(maze: number[][], directions: string[]): string {
  const moves: { [i: string]: Position } = { N: { r: -1, c: 0 }, E: { r: 0, c: 1 }, W: { r: 0, c: -1 }, S: { r: 1, c: 0 }, };
  const pos: Position = findStart(maze);
  for (const dir of directions) {
    pos.r += moves[dir].r;
    pos.c += moves[dir].c;
    if (pos.r < 0 || pos.c < 0 || pos.r >= maze.length || pos.c >= maze[pos.r].length || maze[pos.r][pos.c] === 1) {
      return "Dead";
    } else if (maze[pos.r][pos.c] === 3) {
      return "Finish";
    }
  }
  return "Lost";
} // mazeRunner()

function findStart(maze: number[][]): Position {
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === 2) {
        return { r: i, c: j };
      }
    }
  }
  return { r: -1, c: -1 };
} // findStart()

let maze = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1],
];

console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"]));
console.log(mazeRunner(maze, ["N","N","N","W","W"]));
console.log(mazeRunner(maze, ["N","N","N","N","N","E","E","S","S","S","S","S","S"]));
