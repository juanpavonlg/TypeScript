export function powerOf4(n: any): boolean {
  // const power = ~~(Math.log10(n)/Math.log10(4));  
	// return 4 ** power === n;
  return Math.log2(n) % 2 === 0;
} // powerOf4()

console.log(powerOf4(1024));
console.log(powerOf4("four"));
console.log(powerOf4(55));
