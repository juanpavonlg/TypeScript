export function isReallyNaN(val: any): boolean {
  return val !== val;
}; // isReallyNaN()

console.log(isReallyNaN(undefined));
console.log(isReallyNaN(NaN));
console.log(isNaN(NaN));
console.log(isReallyNaN(null));
