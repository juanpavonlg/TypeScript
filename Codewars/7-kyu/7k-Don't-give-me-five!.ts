export function dontGiveMeFive(start: number, end: number): number {
	let range = end - start + 1;
	for (let i = start; i <= end; i++) {
		if (/5/.test(i.toString())) {
			range--;
		}
	}
	return range;
} // dontGiveMeFive()

console.log(dontGiveMeFive(1, 9));
console.log(dontGiveMeFive(4, 17));
console.log(dontGiveMeFive(-4, 17));
console.log(dontGiveMeFive(-15, 12));
console.log(dontGiveMeFive(1, 90));
