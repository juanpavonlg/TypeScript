export function getBestCombination(time: number): string {
  let mins = Math.floor(time / 60);
  let secs = time % 60;
  const std = `${+`${mins}${`${secs}`.padStart(2, "0")}`}`;
  if (secs + 60 < 100) {
    mins--;
    secs += 60;
  }
  const alt = `${+`${mins}${`${secs}`.padStart(2, "0")}`}`;
  const difStd = [...std].reduce((a, e, i) => a + (e === std[i + 1] ? 0 : 1), 0);
  const difAlt = [...alt].reduce((a, e, i) => a + (e === alt[i + 1] ? 0 : 1), 0);
  if (difStd < difAlt) {
    return std;
  } else if (difAlt < difStd) {
    return alt;
  } if (alt.length < std.length) {
    return alt;
  }
  return std;
} // getBestCombination()

console.log(getBestCombination(71));
console.log(getBestCombination(72));
console.log(getBestCombination(3690));
console.log(getBestCombination(60));
console.log(getBestCombination(279));
