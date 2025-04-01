export function runningPace(distance: number, time: string): string {
  const [minutes, seconds] = [...(time.match(/\d+/g) ?? ["0", "0"]).map(Number)];
  const pace = (60 * minutes + seconds) / distance | 0;
  return `${pace / 60 | 0}:${(pace % 60).toString().padStart(2, "0")}`;
} // runningPace()

console.log(runningPace(1, "3:15"));
console.log(runningPace(5, "25:00"));
console.log(runningPace(15, "75:00"));
console.log(runningPace(2.51, "10:43"));
console.log(runningPace(4.99, "22:32"));
console.log(runningPace(0.2, "0:38"));
console.log(runningPace(42.195, "122:57"));
