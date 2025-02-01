export function isSumOfCubes(s: string): string {
  const cubes = s.match(/\d{1,3}/g)?.map(Number).filter(x => isCubic(x));
  return cubes?.length ? `${cubes.join(" ")} ${cubes.reduce((a, b) => a + b)} Lucky` : "Unlucky";
} // isSumOfCubes()

function isCubic(n: number): boolean {
  return n.toString().split("").map(Number).map(d => d ** 3).reduce((a, b) => a + b) === n; 
} // isCubic()

console.log(isSumOfCubes("Once upon a midnight dreary, while100 I pondered, 9026315weak and weary -827&()"));
console.log(isSumOfCubes("&z371 upon 407298a --- dreary, ###100.153 I thought, 9926315strong and weary -127&() 1"));
