export function kiyoLcm(a: any[][]): number {
  const sums: number[] = [];
  a.forEach((arr) => {
    sums.push(arr.reduce((a, e) => a + (typeof e === "number" && e % 2 ? e : 0), 0));
  });
  let lcm = sums[0];
  for (let i = 1; i < sums.length; i++) {
    lcm = (lcm * sums[i]) / gcd(lcm, sums[i]);
  }
  return lcm || 0;
} // kiyoLcm()

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
} // gcd()

const a = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
];
const a1 = [[], [], [], [], [], [], [], [], []];
const a2 = [
  [4, 3, 7, 8, 9, 2, 1, 5, "c"],
  [6, 5, 6, 1, "v", 1, 0, 5, 1],
  [4, 4, "c", 7, 6, 6, 3, 6, 7],
  [1, 7, 7, "l", 5, 8, 9, 5, 9],
  [0, "t", 8, 2, 8, 9, 0, 8, 0],
  [4, 6, 2, 6, "o", 8, 4, 2, 4],
  [3, 6, 9, 2, 0, 8, 2, 3, "u"],
  [9, 3, 1, 9, 4, 4, "u", 7, 7],
  [0, "n", 9, 0, 0, 0, 9, 2, 2],
];
const a5 = [
  [9, 4, 5, 8, 0, 9, 1, 1, 3],
  [5, 0, 8, 5, 4, 3, 4, 5, 5],
  [9, 5, 1, 6, 7, 8, 8, 9, 5],
  [9, 9, 7, 8, 6, 2, 0, 2, 9],
  [4, 7, 9, 3, 6, 6, 2, 6, 1],
  [0, 3, 5, 7, 0, 5, 1, 6, 2],
  [7, 8, 4, 1, 0, 1, 6, 0, 0],
  [0, 2, 1, 8, 8, 7, 6, 0, 1],
  [4, 3, 5, 6, 5, 4, 0, 3, 6],
];
console.log(kiyoLcm(a));
console.log(kiyoLcm(a1));
console.log(kiyoLcm(a2));
console.log(kiyoLcm(a5));
