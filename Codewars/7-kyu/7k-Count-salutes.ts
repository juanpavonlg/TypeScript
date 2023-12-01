export function countSalutes(hallway: String): number {
  let right = 0;
  let left = 0;
  for (const person of hallway) {
    if (person === ">") {
      right++;
    } else if (person === "<") {
      left += right;
    }
  }
  return 2 * left;
} // countSalutes()

console.log(countSalutes(">>>>>>>>>>>>>>>>>>>>>----<->"));
console.log(countSalutes("<<----<>---<"));
