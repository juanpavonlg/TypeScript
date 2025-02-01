export function points(games : string[]): number {
  let sum = 0;
  for (const match of games) {
    sum += match[0] > match[2] ? 3 : match[0] === match[2] ? 1 : 0;
  }
  return sum;
} // points()

console.log(points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']));

