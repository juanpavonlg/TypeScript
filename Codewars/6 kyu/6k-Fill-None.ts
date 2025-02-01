export function fill(arr: Array<number | undefined>, method = 0): Array<number | undefined> {
  return arr.map((_, i) => {
    if (arr[i] !== undefined) {
      return arr[i];
    }
    if (method === -1) {
      return arr.slice(i + 1).find((e) => e !== undefined);
    } else if (method === 1) {
      return arr.slice(0, i).reverse().find((e) => e !== undefined);
    }
    const left = arr.slice(0, i).reverse().find((e) => e !== undefined);
    const right = arr.slice(i + 1).find((e) => e !== undefined);
    if (left !== undefined && right !== undefined) {
      const l = arr.indexOf(left);
      const r = arr.indexOf(right)
      return i - l < r - i ? left : r - i < i - l ? right : Math.min(left, right);
    }
    return left ?? right;
  });
} // fill()

console.log(fill([undefined, 1, undefined, undefined, undefined, 2, undefined], -1));
console.log(fill([undefined, 1, undefined, undefined, undefined, 2, undefined]));
console.log(fill([undefined, 1, undefined, undefined, undefined, 2, undefined], 1));
console.log(fill([4, 5, undefined, undefined, undefined, 2, undefined, 2], 0));
