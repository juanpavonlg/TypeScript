export function findRoutes(routes: string[][]): string {
  let start = "";
  for (const route of routes) {
    start = route[0];
    for (const next of routes) {
      if (start === next[1]) {
        start = "";
        break;
      }
    }
    if (start) {
      break;
    }
  }
  const ans = [start];
  while (routes.length) {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i][0] === start) {
        start = routes[i][1];
        ans.push(start);
        routes.splice(i, 1);
        break;
      }
    }
  }
  return ans.join(", ");
} // findRoutes()

console.log(
  findRoutes([
    ["USA", "BRA"],
    ["JPN", "PHL"],
    ["BRA", "UAE"],
    ["UAE", "JPN"],
  ])
);
