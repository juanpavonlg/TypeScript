export function setAlarm(employed: boolean, vacation: boolean) {
  return employed && !vacation;
} // setAlarm

console.log(setAlarm(true, false));
