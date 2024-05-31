type Object = {
  start: number;
  total: number;
  step: number;
};

export function arrayToString(arr: number[]): string {
  const objs: Object[] = [];
  for (let i = 0; i < arr.length; ) {
    const obj = { start: arr[i], total: 0, step: 0 };
    const diff = arr[i + 1] - arr[i];
    if (arr[i + 1] - arr[i] === arr[i + 2] - arr[i + 1]) {
      for (let j = i + 3; j <= arr.length; j++) {
        if (arr[j] - arr[j - 1] !== diff) {
          [obj.total, obj.step] = [j - i, diff];
          i = j;
          break;
        }
      }
    } else if (arr[i + 1] - arr[i] === arr[i] - arr[i - 1] && objs[objs.length - 1].total > 3) {
      objs[objs.length - 1].total--;
      [obj.start, obj.total, obj.step] = [arr[i - 1], 3, diff];
      i += 2
    } else {
      i++;
    }
    objs.push(obj);
  }
  return objs.map(encode).join(",");
} // arrayToString()

export function stringToArray(str: string): number[] {
  const objs = str.split(",").map(decode);
  const arr: number[] = [];
  for (const obj of objs) {
    for (let i = 0; i < obj.total; i++) {
      arr.push(obj.start + i * obj.step);
    }
  }
  return arr;
} // stringToArray()

function encode(obj: Object): string {
  return `${obj.start}${obj.total ? `:${obj.total}` : ""}${obj.step ? `${obj.step > 0 ? "+" : "-"}${Math.abs(obj.step)}` : ""}`;
} // encode()

function decode(str: string): Object {
  const obj: Object = {
    start: +(str.match(/^[+-]?\d+/) ?? 0),
    total: +(str.match(/:(\d+)/) ?? [0, 1])[1],
    step: +(str.match(/[+-]\d+$/) ?? 0),
  };
  return obj;
} // decode()

console.log(arrayToString([1, 2, 3]));
console.log(arrayToString([1, 2, 3, 4, 6, 6, 6, 6, 8, 6, 4, 2]));
console.log(arrayToString([2, 1, 6, 12, 5]));
console.log(arrayToString([1, 2, 3, 4, 3, 2, 1]));
console.log(arrayToString([1, 2, 3, 4, 3, 2]));
console.log(arrayToString([-1, -2, -3, -4, -3, -2]));
console.log(stringToArray("1:4+1,6:4,8:4-2"));
console.log(stringToArray("2,1,6,12,5"));
console.log(stringToArray("1:4+1,3:3-1"));
console.log(stringToArray("1:3+1,4:3-1"));
console.log(stringToArray("-1:3-1,-4:3+1"));
