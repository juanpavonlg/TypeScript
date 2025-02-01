export function unique(arr: any[], keys: string[]): any[] {
  const uniques = [];
  for (const object of arr) {
    const obj: { [key: string]: number } = {};
    for (const key of keys) {
      obj[key] = object[key];
    }
    let contains = false;
    for (const unique of uniques) {
      if (keys.every((key) => unique[key] === obj[key])) {
        contains = true;
        break;
      }
    }
    if (!contains) {
      uniques.push(object);
    }
  }
  return uniques;
} // unique()

const objs = [
  { x: 1, y: 1 },
  { x: 2, y: 2 },
  { x: 1, z: 1 },
  { x: 1, y: 1, z: 3 },
];
const keys = ["x", "y"];
console.log(unique(objs, keys));
const objs2 = [
  { a: 11, z: 7, efg: 3 },
  { b: 5, r: 17, z: 7 },
  { d: 32, o: 6, e: 31 },
];
const keys2 = ["z"];
console.log(unique(objs2, keys2));
