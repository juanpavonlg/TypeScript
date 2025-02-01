export function squareSum(numbers: number[]): number {
    return numbers.reduce((a, e) => a + e * e, 0);
} // squareSum()

console.log(squareSum([1, 2, 2]));
