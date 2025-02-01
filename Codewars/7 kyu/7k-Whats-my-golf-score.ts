export function golfScoreCalculator(parList: string, scoreList: string): number {
  return scoreList.split("").reduce((a, e ,i) => a + +e - +parList[i], 0);
} // golfScoreCalculator()

console.log(golfScoreCalculator("443454444344544443", "353445334534445344"));

