function revealSabotage(store: string[][]) {
  const [M, N] = [store.length, store[0].length];
  const dirs: [number, number][] = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
  ];
  for (let row = 0; row < M; row++) {
    for (let col = 0; col < N; col++) {
      if (store[row][col] === " ") {
        let adj = 0;
        for (const [dr, dc] of dirs) {
          const [nr, nc] = [row + dr, col + dc];
          if (nr >= 0 && nc >= 0 && nr < M && nc < N && store[nr][nc] === "*") {
            adj++;
          }
        }
        store[row][col] = adj ? `${adj}` : " ";
      }
    }
  }
  return store;
} // revealSabotage()

const store = [
  ["*", " ", " ", " "],
  [" ", " ", "*", " "],
  [" ", " ", " ", " "],
  ["*", " ", " ", " "],
];
console.log(revealSabotage(store));
