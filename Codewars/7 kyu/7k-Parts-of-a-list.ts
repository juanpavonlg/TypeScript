export function partlist(arr: string[]): string[][] {
  const pairs: string[][] = [];
  for (let i = 0; i < arr.length - 1; i++) {
    const first = [];
    for (let j = 0; j <= i; j++) {
      first.push(arr[j]);
    }
    const second = [];
    for (let k = i + 1; k < arr.length; k++) {
      second.push(arr[k]);
    }
    pairs.push([first.join(" "), second.join(" ")]);
  }
  return pairs;
} // partlist()

console.log(partlist(["az", "toto", "picaro", "zone", "kiwi"]));
