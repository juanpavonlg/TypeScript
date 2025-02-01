export function fixTheMeerkat(arr: string[]): string[] {
  [arr[0], arr[2]] = [arr[2], arr[0]];
  return arr;
} // fixTheMeerkat()

console.log(fixTheMeerkat(["tail", "body", "head"]));
console.log(fixTheMeerkat(["tails", "body", "heads"]));
console.log(fixTheMeerkat(["bottom", "middle", "top"]));
console.log(fixTheMeerkat(["ground", "rainbow", "sky"]));
console.log(fixTheMeerkat(["lower legs", "torso", "upper legs"]));
