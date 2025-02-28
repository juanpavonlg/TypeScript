export function hanoi(disks: number): number {
  return 2 ** disks - 1;
} // hanoi()

console.log(hanoi(0));
console.log(hanoi(1));
console.log(hanoi(2));
console.log(hanoi(3));
console.log(hanoi(5));
console.log(hanoi(10));
console.log(hanoi(20));
