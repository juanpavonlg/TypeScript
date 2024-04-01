export function isValidWalk(walk: string[]) {
  const dirs: { [key: string]: number } = { n: 0, s: 0, e: 0, w: 0 };
  walk.forEach((dir) => dirs[dir]++);
  return dirs.n === dirs.s && dirs.e === dirs.w && walk.length === 10;
} // isValidWalk()

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]));
console.log(isValidWalk(["w"]));
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(isValidWalk(["n", "w", "n", "s", "w", "n", "n", "s", "n", "n"]));
console.log(isValidWalk(["e", "s", "e", "s", "e", "s", "e", "s", "s", "s"]));
