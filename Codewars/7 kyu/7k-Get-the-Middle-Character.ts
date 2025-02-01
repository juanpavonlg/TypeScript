export function getMiddle(s: string) {
  const middle = Math.floor(s.length / 2);
  return s.length % 2 ? s[middle] : `${s[middle - 1]}${s[middle]}`;
} // getMiddle()

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));
