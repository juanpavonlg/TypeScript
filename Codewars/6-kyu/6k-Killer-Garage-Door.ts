export function door(events: string): string {
  let ans = "";
  let total = 0;
  let step = 0;
  let dir = 1;
  for (const e of events) {
    switch (e) {
      case "P":
        step = step ? 0 : dir;
        break;
      case "O":
        dir *= -1;
        step = dir;
        break;
    }
    if (total === 0 && step === -1 || total === 5 && step === 1) {
      step = 0;
      dir *= -1;
    }
    total += step;
    ans += total;
  }
  return ans;
} // door()

console.log(door("..P...O....."));
console.log(door("P......P......"));
