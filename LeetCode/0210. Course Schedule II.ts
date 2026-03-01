enum State {
  Unvisited,
  Visiting,
  Visited,
}

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const graph: { [dest: number]: number[] } = {};
  for (const [a, b] of prerequisites) {
    graph[a] ? graph[a].push(b) : (graph[a] = [b]);
  }
  const states: number[] = new Array(numCourses).fill(State.Unvisited);
  const order: number[] = [];

  function dfs(node: number): boolean {
    if (states[node] === State.Visited) {
      return true;
    } else if (states[node] === State.Visiting) {
      return false;
    }
    states[node] = State.Visiting;
    if (node in graph) {
      for (const neig of graph[node]) {
        if (!dfs(neig)) {
          return false;
        }
      }
    }
    states[node] = State.Visited;
    order.push(node);
    return true;
  } // dfs()

  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course)) {
      return [];
    }
  }
  return order;
} // findOrder()

console.log(findOrder(2, [[1, 0]]));
console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]),
);
console.log(findOrder(1, []));
