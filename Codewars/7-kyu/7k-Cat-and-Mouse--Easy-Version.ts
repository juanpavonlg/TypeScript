export function catMouse(x: string): string {
  return x.indexOf("m") - x.indexOf("C") <= 4 ? "Caught!" : "Escaped!";
} // catMouse()

console.log(catMouse("C....m"));
console.log(catMouse("C..m"));
