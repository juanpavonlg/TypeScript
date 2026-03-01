enum State {
  Unvisited,
  Visiting,
  Visited,
}

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph: { [dest: number]: number[] } = {};
  for (const [a, b] of prerequisites) {
    graph[a] ? graph[a].push(b) : (graph[a] = [b]);
  }
  const states: number[] = new Array(numCourses).fill(State.Unvisited);

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
    return true;
  } // dfs()

  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course)) {
      return false;
    }
  }
  return true;
} // canFinish()

console.log(canFinish(2, [[1, 0]]));
console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ]),
);
