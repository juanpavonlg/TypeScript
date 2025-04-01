function dailyTemperatures(temperatures: number[]): number[] {
  const answer: number[] = new Array(temperatures.length).fill(0);
  const stack: [number, number][] = [[temperatures[0], 0]];
  for (let i = 1; i < temperatures.length; i++) {
    while (stack.length && temperatures[i] > stack[stack.length - 1][0]) {
      const [_, j] = stack.pop()!;
      answer[j] = i - j;
    }
    stack.push([temperatures[i], i]);
  }
  return answer;
} // dailyTemperatures()

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([30, 40, 50, 60]));
console.log(dailyTemperatures([30, 60, 90]));
