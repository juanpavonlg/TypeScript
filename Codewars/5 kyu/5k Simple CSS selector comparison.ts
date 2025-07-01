export function compare(a: string, b: string): string {
  const scoreA = getScore(a);
  const scoreB = getScore(b);
  if (scoreA[0] > scoreB[0]) {
    return a;
  } else if (scoreA[0] < scoreB[0]) {
    return b;
  } else if (scoreA[1] > scoreB[1]) {
    return a;
  } else if (scoreA[1] < scoreB[1]) {
    return b;
  } else if (scoreA[2] > scoreB[2]) {
    return a;
  }
  return b;
} // compare()

function getScore(selector: string): [number, number, number]  {
  let score: [number, number, number] = [0, 0, 0];
  const id = selector.match(/#\w+/g) ?? [];
  for (const s of id) {
    selector = selector.replace(s, "");
    score[0] += 1;
  }
  const _class = selector.match(/\.\w+/g) ?? [];
  for (const s of _class) {
    selector = selector.replace(s, "");
    score[1] += 1;
  }
  score[2] += (selector.match(/\w+/g) ?? []).length;
  return score;
} // getScore()

console.log(compare("body p", "div"));
console.log(compare(".class", "#id"));
console.log(compare("div.big", ".small"));
console.log(compare(".big", ".small"));
