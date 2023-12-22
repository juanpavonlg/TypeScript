export function duplicated(arr: any[], keys: string[]): any[] {
  const duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    const obj: { [key: string]: any } = {};
    for (const key of keys) {
      obj[key] = arr[i][key];
    }
    for (let j = 0; j < arr.length; j++) {
      let contains = true;
      for (const key in obj) {
        if (obj[key] !== arr[j][key]) {
          contains = false;
          break;
        }
      }
      if (contains && i !== j) {
        duplicates.push(arr[i]);
        break;
      }
    }
  }
  return duplicates;
} // duplicated()

const objs = [
  { x: 1, y: 1 },
  { x: 2, y: 2 },
  { x: 1, z: 1 },
  { x: 1, y: 1, z: 3 },
];
const keys = ["x", "y"];
console.log(duplicated(objs, keys));
const objs2 = [
  { a: 11, z: 7, efg: 3 },
  { b: 5, r: 17, z: 7 },
  { d: 32, o: 6, e: 31 },
];
const keys2 = ["z"];
console.log(duplicated(objs2, keys2));
