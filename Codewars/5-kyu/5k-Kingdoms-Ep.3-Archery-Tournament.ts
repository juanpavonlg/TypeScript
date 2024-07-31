export function countAndSort(target: string[]): string[] {
  const res: {[key: string]: {a: number, p: number}} = {};
  for (let r = 0; r < target.length; r++) {
    for (let c = 0; c < target[r].length; c++) {
      if (/[a-z]/i.test(target[r][c])) {
        const letter = target[r][c].toLowerCase();
        const arrows = letter === target[r][c] ? 1 : 2;
        const points = getPoints(r, c, target.length) * arrows;
        if (res[letter]) {
          res[letter].a += arrows;
          res[letter].p += points;
        } else {
          res[letter] = {a: arrows, p: points}
        }
      }
    }
  }
  const ans: [string, number, number][] = Object.keys(res).map((key) => [key, res[key].a, res[key].p]);
  ans.sort((a, b) => a[2] - b[2] || b[1] - a[1] || a[0].localeCompare(b[0]));
  return ans.map((e) => e[0]);
} // countAndSort()

function getPoints(r: number, c: number, n: number) {
  n--;
  return Math.min(r, c, n - r, n - c) + 1;
} // getPoints()

console.log(countAndSort(["z**", "*a*", "***"]));
console.log(countAndSort(["z*B", "*a*", "**z"]));
console.log(countAndSort(["z**", "a**", "**z"]));
