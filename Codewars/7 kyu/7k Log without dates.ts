export function checkLogs(log: string[]): number {
  let days = 0;
  let time = ["", "", ""];
  for (const event of log) {
    const [hh, mm, ss] = event.split(":");
    if (hh < time[0] || time[0] === "") {
      days++;
    } else if (hh === time[0]) {
      if (mm < time[1]) {
        days++;
      } else if (mm === time[1]) {
        if (ss <= time[2]) {
          days++;
        }
      }
    }
    time = [hh, mm, ss];
  }
  return days;
} // checkLogs()

console.log(
  checkLogs(["00:00:00", "00:01:11", "02:15:59", "23:59:58", "23:59:59"])
);
console.log(checkLogs(["12:12:12"]));
console.log(checkLogs(["12:00:00", "23:59:59", "00:00:00"]));
console.log(checkLogs([]));
console.log(checkLogs(["12:00:00", "12:00:00", "00:00:00"]));
