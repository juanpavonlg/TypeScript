export function intersect<T extends Object, U extends Object>(first: T, second: U): T & U {
  let result = <T & U>{};
  for (const prop in first) {
    if (second.hasOwnProperty(prop)) {
      (<any>result)[prop] = first[prop];
    }
  }
  return result;
} // intersect()

const obj1 = { a: 1 };
const obj2 = { a: 1, b: 2 };
console.log(intersect(obj1, obj2));
const obj3 = { c: 3, d: 4 };
console.log(intersect(obj1, obj3));
