export function catMouse(x: string, j: number): string {
  const c = x.indexOf("C");
  const d = x.indexOf("D");
  const m = x.indexOf("m");
  const inReach = Math.abs(c - m) <= j;
  if (c === -1 || d === -1 || m === -1) {
    return "boring without all three";
  } else if ((d < c && d < m || d > c && d > m) && inReach) {
    return "Caught!";
  } else if (inReach) {
    return "Protected!";
  }
  return "Escaped!";
} // catMouse()

console.log(catMouse("..D.....Cm", 5));
console.log(catMouse("............C.............D..m...", 5));
console.log(catMouse("m.C...", 5));
console.log(catMouse(".CD......m.", 10));
