export function cubeChecker(volume: number, side: number): boolean{
  return volume > 0 ? volume === side ** 3 : false;
} // cubeChecker()

console.log(cubeChecker(8, 2));
