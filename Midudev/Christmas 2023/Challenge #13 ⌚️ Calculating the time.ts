function calculateTime(deliveries: string[]) {
  let ss = 0;
  for (const time of deliveries) {
    ss += time.split(":").reduce((a, e, i) => a + +e * 60 ** (2 - i), 0);
  }
  ss -= 7 * 3600;
  const sign = ss < 0 ? "-" : "";
  ss = Math.abs(ss);
  const hh = `${(ss / 3600) | 0}`.padStart(2, "0");
  ss -= 3600 * +hh;
  const mm = `${(ss / 60) | 0}`.padStart(2, "0");
  ss -= 60 * +mm;
  return `${sign}${hh}:${mm}:${`${ss}`.padStart(2, "0")}`;
} // calculateTime()

console.log(calculateTime(["00:10:00", "01:00:00", "03:30:00"]));
console.log(calculateTime(["02:00:00", "05:00:00", "00:30:00"]));
console.log(calculateTime(["00:45:00", "00:45:00", "00:00:30", "00:00:30"]));
