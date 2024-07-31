import { Coord } from "./preloaded";

export function quadrantSegment(A: Coord, B: Coord): boolean {
  return A.x > 0 !== B.x > 0 || A.y > 0 !== B.y > 0;
} // quadrantSegment()
