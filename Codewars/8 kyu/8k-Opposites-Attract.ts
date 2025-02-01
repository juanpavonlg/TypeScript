export function lovefunc(flower1: number, flower2: number): boolean {
  return (flower1 + flower2) % 2 === 1;
} // lovefunc()

console.log(lovefunc(1, 4));
