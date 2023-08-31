export function noBoringZeros(n: number): number {  
  return +n.toString().replace(/0+$/, "");
} // noBoringZeros()

console.log(noBoringZeros(30500));
console.log(noBoringZeros(0));
console.log(noBoringZeros(100));
