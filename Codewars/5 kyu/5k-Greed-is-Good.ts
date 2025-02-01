export function score(dice: number[]): number {
  let points = 0;
  new Set(dice).forEach((die) => {
    const count = dice.filter((e) => e === die).length;
    if (die === 1) {
      points += (count % 3) * 100;
    } else if (die === 5) {
      points += (count % 3) * 50;
    }
    if (count >= 3) {
      points += die !== 1 ? 100 * die : 1000;
    }
  });
  return points;
} // score()

console.log(score([5, 1, 3, 4, 1]));
console.log(score([1, 1, 1, 3, 1]));
console.log(score([2, 4, 4, 5, 4]));
