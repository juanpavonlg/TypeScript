export function sumArray(array:number[] | null) : number {
  return array && array.length > 1 ? 
          array.reduce((a, b) => a + b) - Math.min(...array) - Math.max(...array) : 0;
} // sumArray()

console.log(sumArray([ 6, 2, 1, 8, 10 ]));
