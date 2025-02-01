type arr = arr[];

export function repSet(n: number): arr {
  return n ? repSet(n - 1).concat([repSet(n - 1)]) : [];
} // repSet()

console.log(repSet(0));
console.log(repSet(1));
console.log(repSet(2));
console.log(repSet(3));
