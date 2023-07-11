export function strCount(str: string, letter: string): number {
  return str.split("").filter(char => char === letter).length;
} // strCount()

console.log(strCount('Hello', 'l'));
