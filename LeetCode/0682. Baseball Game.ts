function calPoints(operations: string[]): number {
  const scores: number[] = [];
  for (const operation of operations) {
    switch (operation) {
      case "+":
        scores.push(scores.slice(-2).reduce((a, e) => a + e));
        break;
      case "D":
        scores.push(2 * scores[scores.length - 1]);
        break;
      case "C":
        scores.pop();
        break;
      default:
        scores.push(+operation);
    }
  }
  return scores.reduce((a, e) => a + e, 0);
} // calPoints()

console.log(calPoints(["5", "2", "C", "D", "+"]));
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
console.log(calPoints(["1", "C"]));
