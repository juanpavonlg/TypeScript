function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
  const graph: {[sour: number]: number[]} = {};
  for (const [sour, dest] of edges) {
    graph[sour] ? graph[sour].push(dest) : graph[sour] = [dest];
    graph[dest] ? graph[dest].push(sour) : graph[dest] = [sour];
  }
  const visited = new Set([source]);
  const stack = [source];
  while (stack.length) {
    const node = stack.pop()!;
    if (node === destination) {
      return true;
    }
    for (const neig of graph[node]) {
      if (!visited.has(neig)) {
        visited.add(neig);
        stack.push(neig);
      }
    }
  }
  return false;
} // validPath()

console.log(validPath(3, [[0, 1], [1, 2], [2, 0]], 0, 2));
console.log(validPath(6, [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], 0, 5));
