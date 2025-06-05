export function doubleton(num: number): number {
  while (new Set((++num).toString()).size !== 2) {}
  return num;
} // doubleton()

console.log(doubleton(120));
console.log(doubleton(1234));
console.log(doubleton(10));
