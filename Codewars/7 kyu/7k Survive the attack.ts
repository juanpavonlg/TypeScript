export const hasSurvived = (attackers: number[], defenders: number[]): boolean => {
  const attack = [...attackers];
  const defend = [...defenders];
  const sumA = attack.reduce((attack, e) => attack + e, 0);
  const sumD = defend.reduce((attack, e) => attack + e, 0);
  const lim = Math.min(attack.length, defend.length);
  for (let i = 0; i < lim; i++) {
    if (attack[i] < defend[i]) {
      attack[i] = 0;
    } else if (attack[i] > defend[i]) {
      defend[i] = 0;
    } else {
      attack[i] = 0;
      defend[i] = 0;
    }
  }
  const survA = attack.filter((attacker) => attacker).length;
  const survD = defend.filter((defender) => defender).length;
  return survD > survA ? true : survA === survD ? sumD >= sumA : false;
}; // hasSurvived()

console.log(hasSurvived([1, 3, 5, 7], [2, 4, 6, 8]));
console.log(hasSurvived([1, 3, 5, 7], [2, 4]));
console.log(hasSurvived([1, 3, 5, 7], [2, 4, 0, 8]));
