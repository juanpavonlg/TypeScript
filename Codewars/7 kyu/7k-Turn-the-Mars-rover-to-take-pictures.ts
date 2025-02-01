type MoveDirection = "left" | "right";
type Direction = "N" | "S" | "E" | "W";

export function turn(current: Direction, target: Direction): MoveDirection {
  const left = { N: "W", W: "S", S: "E", E: "N" };
  if (left[current] === target) {
    return "left";
  }
  return "right";
  return "NESWN".includes(current + target) ? "right" : "left";
} // turn()

console.log(turn("N", "E"));
console.log(turn("N", "W"));
