export function menFromBoys(arr: number[]): number[] {
  arr = [...new Set(arr)];
  return arr.sort((a, b) => {
    if (a % 2 === 0 && b % 2 === 0) {
      return a - b;
    }
    if (a % 2 && b % 2) {
      return b - a;
    }
    if (Math.abs(a) % 2 > Math.abs(b) % 2) {
      return 1;
    }
    return -1;
  });
} // menFromBoys()

console.log(menFromBoys([7, 3, 14, 17]));
console.log(menFromBoys([82, 91, 72, 76, 76, 100, 85]));
console.log(menFromBoys([-32, -39, -35, -41]));
console.log(-32 % 2, -39 % 2);

