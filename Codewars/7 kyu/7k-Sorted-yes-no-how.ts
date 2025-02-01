export function isSortedAndHow(array: number[]): string {
  const sorted  = [...array];
  sorted.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {    
    if (array[i] !== sorted[i] && array[i] !== sorted[sorted.length - 1 - i]) {
      return "no";
    }
  }
  return `yes, ${array[0] <= sorted[0] ? "ascending" : "descending"}`;
} // isSortedAndHow()

console.log(isSortedAndHow([15, 7, 3, -8]));
console.log(isSortedAndHow([4, 2, 30]));
