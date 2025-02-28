export function redistributeWealth(wealth: number[]): void {
  const equal = wealth.reduce((a, e) => a + e) / wealth.length;
  wealth.fill(equal);
} // redistributeWealth()

const wealth = [5, 10, 6];
redistributeWealth(wealth)
console.log(wealth);
