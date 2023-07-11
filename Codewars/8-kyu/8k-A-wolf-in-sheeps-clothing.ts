export function warnTheSheep(queue: string[]): string {
  const wolf = queue.reverse().indexOf("wolf");
  return wolf ? `Oi! Sheep number ${wolf}! You are about to be eaten by a wolf!` : "Pls go away and stop eating my sheep";
} // warnTheSheep()

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));
