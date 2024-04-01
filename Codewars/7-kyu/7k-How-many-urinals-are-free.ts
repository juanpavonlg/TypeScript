export function getFreeUrinals(urinals: string): number {
  let free = 0;
  for(let i = 0; i < urinals.length; i++) {
    if (urinals[i] === "0" && (urinals[i - 1] === "0" || !urinals[i - 1]) && (urinals[i + 1] === "0" || !urinals[i + 1])) {
      free++;
      i++;
    } else if (urinals[i] === "1" && urinals[i + 1] === "1") {
      return -1;
    }
  }
  return free;
  return !/11/.test(urinals) ? (urinals.match(/(?<=0|^)0(0|$)/g) ?? []).length : -1;
} // getFreeUrinals()

console.log(getFreeUrinals("10001"));
console.log(getFreeUrinals("1001"));
console.log(getFreeUrinals("00000"));
console.log(getFreeUrinals("0000"));
console.log(getFreeUrinals("01000"));
console.log(getFreeUrinals("0100"));
console.log(getFreeUrinals("001000"));
console.log(getFreeUrinals("011"));
console.log(getFreeUrinals("1"));
