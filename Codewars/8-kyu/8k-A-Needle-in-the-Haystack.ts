export function findNeedle(haystack: any[]): string {
  return `found the needle at position ${haystack.indexOf("needle")}`;
} // findNeedle()

console.log(findNeedle(['3', '123124234', null, 'needle', 'world', 'hay', 2, '3', true, false]));
