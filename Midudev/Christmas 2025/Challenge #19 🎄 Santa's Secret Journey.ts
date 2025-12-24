function revealSantaRoute(routes: string[][]): string[] {
  const map: {[orig: string]: string} = {};
  for (const [orig, dest] of routes) {
    map[orig] = dest;
  }
  const route: string[] = [];
  let orig = routes[0][0];
  while (orig in map) {
    route.push(orig);
    orig = map[orig];
  }
  route.push(orig);
  return route;
} // revealSantaRoute()

console.log(
  revealSantaRoute([
    ["MEX", "CAN"],
    ["UK", "GER"],
    ["CAN", "UK"],
  ])
);
console.log(
  revealSantaRoute([
    ["USA", "BRA"],
    ["JPN", "PHL"],
    ["BRA", "UAE"],
    ["UAE", "JPN"],
    ["CMX", "HKN"],
  ])
);
console.log(
  revealSantaRoute([
    ["STA", "HYD"],
    ["ESP", "CHN"],
  ])
);
