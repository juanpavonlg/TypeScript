export function timeCorrect(timestring: string | null): string | null {
  if (!timestring) {
    return timestring;
  } else if (!timestring?.match(/\d\d:\d\d:\d\d/)) {
    return null;
  }
  const time = timestring.split(":").map(Number);
  time[0] = (time[0] + ~~((time[1] + ~~(time[2] / 60)) / 60)) % 24;
  time[1] = (time[1] + ~~(time[2] / 60)) % 60;
  time[2] %= 60;
  return time.map(t => ("0" + t).slice(-2)).join(":");
} // timeCorrect()

console.log(timeCorrect("14:59:94"));
console.log(timeCorrect("09:10:01"));
console.log(timeCorrect("11:70:10"));
console.log(timeCorrect("19:99:99"));
console.log(timeCorrect("24:01:01"));
console.log(timeCorrect("00;11;22"));
console.log(timeCorrect(""));
console.log(timeCorrect(null));
