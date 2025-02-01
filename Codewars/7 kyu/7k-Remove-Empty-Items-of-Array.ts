export function clean(array: any[]): any[] {
  return array.filter((_) => true);
} // clean()

console.log(clean([1, 2, , 0, 3, 4,]));
console.log(clean([1, 2, [], , 3]));
console.log(clean([1, 2, null, undefined, 3]));
console.log(clean(Array(10)));

