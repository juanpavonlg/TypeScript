export function toIndustrial(time: number | string): number {
  let mins: number;
  if (typeof time === "string") {
    const [hh, mm] = time.split(":");
    mins = 60 * +hh + +mm;
  } else {
    mins = time;
  }
  return +(mins / 60).toFixed(2);
} // toIndustrial()

export function toNormal(time: number): string {
  const dMins = Math.round(60 * time);
  return `${(dMins / 60) | 0}:${(dMins % 60).toString().padStart(2, "0")}`;
} // toNormal()

console.log(toIndustrial(1));
console.log(toIndustrial("1:45"));
console.log(toNormal(0.33));
