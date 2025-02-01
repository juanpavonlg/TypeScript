export function figureOut(arr: string[]): string | null {
  const dancers = arr[0].replace(/ /g, "");
  for (const dancer of dancers) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (Math.abs(arr[i].indexOf(dancer) - arr[i + 1].indexOf(dancer)) > 1) {
        return dancer; // the Witch
      }
    }
  }
  return null; // the Witch is gone
} // figureOut()

console.log(figureOut(["a b", " ba"]));
console.log(figureOut(["ab kl", "ba kl", "a blk"]));
console.log(figureOut(["icwth", "wicth", "witch"]));
console.log(figureOut(["abcdef", "abcfde"]));
console.log(figureOut(["hop", "hpo", "pho"]));
