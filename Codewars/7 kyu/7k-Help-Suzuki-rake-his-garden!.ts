export function rakeGarden(garden: string): string {
  return garden.split(" ").map(s => s === "gravel" || s === "rock" ? s : "gravel").join(" ");
} // rakeGarden()

console.log(rakeGarden("slug spider rock gravel gravel gravel gravel gravel gravel gravel"));
